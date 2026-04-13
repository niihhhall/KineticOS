
import fetch from 'node-fetch';

async function finalMinimalTest() {
    const targetEmail = 'mishranihalfc01@gmail.com';
    console.log(`🚀 Sending MINIMAL (No Logo) test mail to ${targetEmail}...`);
    
    try {
        const response = await fetch('http://localhost:3001/api/join-waitlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: targetEmail,
                fullName: 'Nihal Mishra',
                tier: 'Starter'
            })
        });

        const data = await response.json();
        console.log('📦 API Response:', data);
        
        if (data.success) {
            console.log(`✅ Success! Minimalist email dispatched to ${targetEmail}.`);
        } else {
            console.log('❌ API Error:', data.error);
        }
    } catch (err) {
        console.error('💥 Error:', err.message);
    }
}

finalMinimalTest();
