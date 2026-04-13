
import fetch from 'node-fetch';

async function verifyMinimal() {
    const targetEmail = 'mishranihalfc01@gmail.com';
    console.log(`🚀 Sending FRESH MINIMAL (No Logo) test after server refresh to ${targetEmail}...`);
    
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
            console.log(`✅ TEST SUCCESS! Minimalist design with NO logo dispatched.`);
        } else {
            console.log('❌ API Error:', data.error);
        }
    } catch (err) {
        console.error('💥 Connection Error:', err.message);
    }
}

verifyMinimal();
