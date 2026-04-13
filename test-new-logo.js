
import fetch from 'node-fetch';

async function sendNewTestMail() {
    const targetEmail = 'mishranihalfc01@gmail.com';
    console.log(`🚀 Sending FRESH test mail to ${targetEmail} with NEW Custom Star SVG...`);
    
    try {
        const response = await fetch('http://localhost:3001/api/join-waitlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: targetEmail,
                fullName: 'Nihal Mishra',
                tier: 'VIP Scaling'
            })
        });

        const data = await response.json();
        console.log('📦 API Response:', data);
        
        if (data.success) {
            console.log(`✅ Success! Test email with custom Star logo dispatched to ${targetEmail}.`);
        } else {
            console.log('❌ API Error:', data.error);
        }
    } catch (err) {
        console.error('💥 Error:', err.message);
    }
}

sendNewTestMail();
