
import fetch from 'node-fetch';

async function randomCheck() {
    const randomId = Math.floor(Math.random() * 10000);
    const targetEmail = `kinetic-tester-${randomId}@example.com`;
    console.log(`🎲 Performing RANDOM CHECK to ${targetEmail}...`);
    
    try {
        const response = await fetch('http://localhost:3001/api/join-waitlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: targetEmail,
                fullName: 'Random Operator',
                tier: 'VIP Scaling'
            })
        });

        const data = await response.json();
        console.log('📦 API Response:', data);
        
        if (data.success) {
            console.log(`✅ RANDOM CHECK SUCCESS! Email sent to ${targetEmail}.`);
            console.log(`📍 Position in line: ${data.position}`);
        } else {
            console.log('❌ RANDOM CHECK FAILED:', data.error);
        }
    } catch (err) {
        console.error('💥 Error:', err.message);
    }
}

randomCheck();
