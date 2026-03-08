import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4242;

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2023-10-16',
});

// Initialize Resend
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
if (!resend) {
  console.warn('⚠️ RESEND_API_KEY is not set. Email notifications will be disabled.');
}

// Initialize Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseAnonKey) ? createClient(supabaseUrl, supabaseAnonKey) : null;
if (!supabase) {
  console.warn('⚠️ SUPABASE_URL or SUPABASE_ANON_KEY is not set. Database logging will be disabled.');
}

// Middleware
app.use(cors());

// Webhook endpoint needs raw body
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    if (endpointSecret) {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } else {
      event = req.body;
    }
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Fulfill the purchase...
    console.log('✅ Payment successful for session:', session.id);
    console.log('📧 Sending email to:', session.customer_details?.email);

    // Integrate email service (Resend) here to send the Notion template link
    try {
      if (session.customer_details?.email) {
        if (resend) {
          await resend.emails.send({
            from: 'hi@kineticos.store',
            to: session.customer_details.email,
            subject: 'Your KineticOS Notion Template',
            html: `<p>Thank you for your purchase! Welcome to KineticOS.</p>
                   <p>Here is your <a href="https://notion.so/">Notion template link</a>. Please duplicate it to your workspace.</p>`
          });
          console.log('✅ Email sent successfully via Resend');
        } else {
          console.log('⚠️ Email skipped because RESEND_API_KEY is not configured.');
        }
      }
    } catch (emailErr) {
      console.error('❌ Email sending failed:', emailErr);
    }
  }

  res.send();
});

// JSON parser for other routes
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  try {
    const { priceId, successUrl, cancelUrl } = req.body;

    if (!priceId) {
      return res.status(400).json({ error: 'Price ID is required' });
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl || `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${req.headers.origin}/#pricing`,
      automatic_tax: { enabled: true },
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe Error:', err);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/support', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    console.log('📩 New support request from:', name, `<${email}>`);

    // Store in Supabase if configured
    if (supabase) {
      const { error: dbError } = await supabase
        .from('support_requests')
        .insert([{ name, email, message }]);

      if (dbError) {
        console.error('❌ Supabase Record Failed:', dbError.message);
      } else {
        console.log('✅ Support request saved to Supabase');
      }
    }

    if (resend) {
      // Send notification to site owner
      await resend.emails.send({
        from: 'hi@kineticos.store',
        to: 'hi@kineticos.store', // Replace with your actual support email
        subject: `[Support] New Message from ${name}`,
        html: `
          <h3>New Support Request</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      });

      // Send confirmation to user
      await resend.emails.send({
        from: 'hi@kineticos.store',
        to: email,
        subject: 'We received your message - KineticOS Support',
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for reaching out to KineticOS support. We've received your message and our team will get back to you within 24 hours.</p>
          <p><strong>Your message:</strong></p>
          <blockquote>${message}</blockquote>
          <p>Best regards,<br>The KineticOS Team</p>
        `
      });

      console.log('✅ Support emails sent successfully');
      res.json({ success: true });
    } else {
      console.warn('⚠️ Support email skipped because RESEND_API_KEY is not configured.');
      // Still return success to frontend to avoid user confusion, but log the warning
      res.json({ success: true, warning: 'Email service not configured' });
    }
  } catch (err) {
    console.error('Support API Error:', err);
    res.status(500).json({ error: 'Failed to send support request' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});