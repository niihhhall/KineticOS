
import fetch from 'node-fetch';

async function sendFinalMinimalTest() {
    const targetEmail = 'monitorbuddy.yt@gmail.com';
    console.log(`🚀 Sending final minimal test mail to ${targetEmail}...`);
    
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
            console.log(`✅ Success! Minimalist email dispatched to ${targetEmail}.`);
        } else {
            console.log('❌ API Error:', data.error);
        }
    } catch (err) {
        console.error('💥 Error:', err.message);
    }
}

sendFinalMinimalTest();
