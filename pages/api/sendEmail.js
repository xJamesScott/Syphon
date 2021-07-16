import axios from 'axios';
import { email as emailBody } from '/public/email/orderConfirmation';

export default async function sendEmail(req, res) {

    const { query: { } } = req

    // console.log({"yoooooo!": emailBody})

    // return res.json(emailBody);



    // const htmlFile = () => {

    //     let htmlData = "bro"

    //     fetch("http://localhost:3000/email/orderConfirmation.html")
    //         .then(data => htmlData = data.text())
    //         .catch(error => console.log(error));

    //         return htmlData
    // }

    const endpoint = "http://localhost:3000/email/orderConfirmation.html"

    async function postData(url = '', data = {}) {
        // Default options are marked with *
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

        // return emailWithData; // TODO: pass email with data to "value" in "personalizations" array
    }

    // postData(endpoint)
    const emailBody = postData(endpoint)
        .then(data => {
            const numItems = "888888"
            const address = "777777777777"
            const total = "1111111111111"
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
            
            return res.json(emailWithData);  // TODO: pass email with data to "value" in "personalizations" array
            // TODO: return only emailData. use res.status(200) in sendGrid API request.
        })

        .catch(err => console.log("Email Error!: " + err));

    return


    const email = {
        "personalizations": [
            {
                "to": [{ "email": "jscizzle22@gmail.com" }]
            }],
        "from": { "email": "support@jamscott.com" },
        "subject": "Order Confirmed!",
        "content": [{
            "type": "text/html",
            "value": emailBody // email with data goes here
        }
        ]
    };

    // res.json(htmlFile());

    // console.log({"ressss!!!!!": res.json(emailBody)})
    // res.json(emailBody);

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

};