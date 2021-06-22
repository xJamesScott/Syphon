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

import { users, authenticate, createUser, getAccountsWithSameEmail } from "./AuthCalls"
import { useRouter } from 'next/router';
import axios from "axios";
import dbConnect from '../../utils/dbConnect';

export default async function auth(req, res) {
    const { body: { password, email, grantType, redirect },
        query: { call }
    } = req

    await dbConnect()

    switch (call) {
        case "login":
            try {
                const response = await authenticate("password", {
                    password,
                    username: email,
                    scope: "openid",
                    redirect_uri: process.env.AUTH_DOMAIN
                })
                // res.status(200)
                // console.log({ "res!": res })
                console.log({ "response!": response })
                return res.send({
                    redirect: redirect ? redirect : "",
                    // data: { email  }
                });

                // AUTHENTICATE DIRECT CALL

                // await fetch('https://jsonplaceholder.typicode.com/todos/1',
                //     { method: 'GET' })
                // // return todos
                // // console.log() res.status(200).json({ message: "yo!" })
                // // return "success"
                // // return "sucess"
            } catch (err) {
                console.log({ "err!!!": err.response.headers })

                if (err.response.status == 429) {
                    return res.status(500).send("Whoops! Too many login attempts, please wait a while before attempting again");
                }
                const token = await authenticate("client_credentials");
                const accountExist = await getAccountsWithSameEmail(token, email);
                if (!accountExist) {
                    return res.status(500).send("Email not found: please click 'SignUp'")
                }

                return res.status(500).send("Login failed: Invalid email or password");
            }

        case "signup":
            const payload = {
                connection: "Username-Password-Authentication",
                email,
                password,
                verify_email: true,
            };
            try {
                const response = await createUser(payload)
                
                return res.send(response)
            } catch (err) {
                console.log({ "error!": err })
                res.send(err)
            }

        case "forgot-password":
            try {
                const responseMessage = await sendChangePasswordEmail(
                    token,
                    email,
                );
                return res.send({
                    handler: {
                        redirect: redirect ? redirect : ""
                    },
                    data: { responseMessage }
                })
            } catch (err) {
                console.log(err)
                res.send(err)
            }

        default:
            return
    }
}