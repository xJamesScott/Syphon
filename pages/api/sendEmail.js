import axios from 'axios';
import { email as emailBody } from '/public/email/orderConfirmation';

export default async function sendEmail(req, res) {

    // console.log({"yoooooo!": emailBody})

    // return res.json(emailBody);


    const email = {
        "personalizations": [
            {
                "to": [{ "email": "jscizzle22@gmail.com" }]
            }],
        "from": { "email": "support@jamscott.com" },
        "subject": "Order Confirmed!",
        "content": [{
            "type": "text/html",
            "value": emailBody
        }
        ]
    }

    try {
        const sendGridRequest = await axios({
            method: 'post',
            url: 'https://api.sendgrid.com/v3/mail/send',
            data: email,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
            },
        });
        // return res.json(sendGridRequest);
        return res.json("Confirmation Email Sent.");
    } catch (error) {
        // console.log("Send Grid Error! " + error);
        console.log(error);
        return res.status(500);
    }
}