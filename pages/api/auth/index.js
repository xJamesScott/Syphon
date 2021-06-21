// const Auth0 = require("../../../components/Auth0");
// const { isValidEmail, isValidPassword } = require("../utils");
// const {
//     changePasswordSchema,
//     loginSchema,
//     oAuthSchema,
//     oAuthProviderSchema,
//     signupSchema,
//     updatePasswordSchema,
// } = require("./schema/auth");
// const {
//     config: { auth: authConfig },
// } = require("../../../config");
// const { getCookieToken } = require("../utils");
// const { SCOPES } = require("../constants");
// const User = app.mongo.model("IndividualUser");
// import test4 from "./test4"

import { users, authenticate, createUser } from "./AuthCalls"
import { useRouter } from 'next/router';
import axios from "axios";

export default async function auth(req, res) {
    const { body: { password, email, grantType } } = req
    // const { query: { call } } = req

    // switch (call) {
    // case "login":
    // return {
    // await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // res.redirect("/")
    // res.writeHead(307, { Location: '/' })

    // await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    // return res || req

    try {
        // const response = await authenticate("password", {
        //     password,
        //     username: email,
        //     scope: "openid",
        //     redirect_uri: "https://localhost:3001/"
        // })
        // return res.status(200)

        // AUTHENTICATE DIRECT CALL

        await fetch('https://jsonplaceholder.typicode.com/todos/1',
            { method: 'GET' })
        // return todos
        // console.log() res.status(200).json({ message: "yo!" })
        // return "success"
        // return "sucess"
    } catch (err) {
        // console.log({ "error!": err })
        // res.redirect(400, "/")
        console.log(err)
        console.log({ "status!": err.response.status })
        // return "error!"
    }
    console.log({ "res status": res.statusCode })
    res.redirect(200, "https://www.google.com")
    // res.writeHead(200, { Location: "https://www.google.com" })
    // res.end()
    // fetch("/api/redirect")
    return "sucess"

    // return res.status(200).json({ message: "yo!" })
    // };

    // case "signup":
    //     const payload = {
    //         connection: "Username-Password-Authentication",
    //         email,
    //         password,
    //         verify_email: true,
    //     };
    //     try {
    //         const response = await createUser(payload)
    //         console.log(`Successfully created email: ${email}`)
    //         console.log({ "signup response!": response })
    //         return response
    //     } catch (err) {

    //         console.log({ "error!": err })
    //         return err
    //     }

    // default:
    //     return
    // }


}



// export async function getServerSideProps(context) {
//     return {
//         redirect: {
//             permanent: false,
//             destination: "/"
//         }
//     }
// }