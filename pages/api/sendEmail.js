import axios from 'axios';

export default async function sendEmail(req, res) {
    
    const emailBody = () => {
        return (
            <div>
                
            </div>
        )
    }
    
    const email = {"personalizations": [
        {
            "to": [{"email": "jscizzle22@gmail.com"}]}],
            "from": {"email": "support@jamscott.com"},
            "subject": "Sending with SendGrid is Fun",
            "content": [{"type": "text/html", 
            "value": "<h2>yoooo</h2>and easy to do anywhere, even with cURL"
            }
        ]
    }

    try {
        const res = axios.post('https://api.sendgrid.com/v3/mail/send', {
            headers: { 
                "Content-Type": "applicant/json",
                Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
            },
            data: "test"
        });

        return res.status(200);
    } catch (error) {
        console.log(error);
    }
}