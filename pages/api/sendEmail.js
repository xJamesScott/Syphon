import axios from 'axios';
import { email as emailBody } from '/public/email/orderConfirmation';

export default async function sendEmail(req, res) {

    const { body: { numItems, address, total } } = req // TODO: REPLACE PLACEHOLDERS

    // TODO: JOIN ADDRESS VALUES OF CHILDREN (street, city, etc.)
    // TODO: ITERATE THROUGH ITEM TOTALS AND CREATE COMBINED TOTAL



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
                // const numItems = "888888" // PLACEHOLDER USE BODY VALS
                // const address = "777777777777" // PLACEHOLDER USE BODY VALS
                // const total = "1111111111111" // PLACEHOLDER USE BODY VALS
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
                            "to": [{ "email": "jscizzle22@gmail.com" }]
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