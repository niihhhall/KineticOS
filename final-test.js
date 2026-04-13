
import fetch from 'node-fetch';

async function finalTest() {
    const targetEmail = 'mishranihalfc01@gmail.com';
    console.log(`🚀 Sending FRESH test mail to ${targetEmail} after server restart...`);
    
    try {
        const response = await fetch('http://localhost:3001/api/join-waitlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: targetEmail,
                fullName: 'Nihal Mishra',
                tier: 'Pro System'
            })
        });

        const data = await response.json();
        console.log('📦 API Response:', data);
        
        if (data.success) {
            console.log(`✅ TEST SUCCESS! Email dispatched with NEW branding.`);
        } else {
            console.log('❌ API Error:', data.error);
        }
    } catch (err) {
        console.error('💥 Error:', err.message);
    }
}

finalTest();
