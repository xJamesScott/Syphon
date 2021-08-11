import axios from 'axios';
import { getDomainLocale } from 'next/dist/next-server/lib/router/router';
import { email as emailBody } from '/public/email/orderConfirmation';

export default async function sendEmail(req, res) {

    const { body: { numItems, address, total, customerEmail } } = req // TODO: REPLACE PLACEHOLDERS

    try {

        const endpoint = "http://localhost:3000/email/orderConfirmation.html";

        async function postData(url = '') {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.text();
        }

        const emailBody = postData(endpoint) // TODO: pass email with data to "value" in "personalizations" array
            .then(data => {
                const emailTagMap = {
                    "{{numItems}}": numItems,
                    "{{address}}": address,
                    "{{total}}": total
                };
                const mapKeysToString = Object.keys(emailTagMap).join("|");
                const mapRegEx = new RegExp(mapKeysToString, "gi"); // creates regex of keys to be replaced
                const emailWithData = data.replace(mapRegEx, (match) => { // replaces tags in email with customer's data 
                    return emailTagMap[match];
                });
                return emailWithData;
            })
            .then(async emailWithData => {
                const email = {
                    "personalizations": [
                        {
                            "to": [{ "email": customerEmail }]
                        }],
                    "from": { "email": "support@jamscott.com" },
                    "subject": "Order Confirmed!",
                    "content": [{
                        "type": "text/html",
                        "value": emailWithData
                    }
                    ]
                };
                await axios({
                    method: 'post',
                    url: 'https://api.sendgrid.com/v3/mail/send',
                    data: email,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
                    },
                });
                return res.json("content");
            })
            .catch(err => console.log("Email Error!: " + err));
    } catch (error) {
        console.log("SEND GRID ERROR!: " + error);
        return res.status(500);
    }

};