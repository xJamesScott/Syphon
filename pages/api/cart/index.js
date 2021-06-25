import { users, authenticate, createUser, getAccountsWithSameEmail } from "./AuthCalls"
import dbConnect from '../../../utils/dbConnect';
import User from '../../models/User'
import axios from "axios";

//

export default async function cart(req, res) {
    const { body: { name, email, grantType, redirect },
        query: { call }
    } = req

    await dbConnect()

    switch (call) {
        case "get-cart":
            try {
                const response = await User.get("password", { })
                console.log({ "response!": response })
                return res.send({
                    redirect: redirect ? redirect : "",
                });

            } catch (err) {
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

        case "update-cart":
            const payload = {
                connection: "Username-Password-Authentication",
                email,
                password,
                verify_email: false,
            };
            try {
                const response = await createUser(payload)
                const user = await new User(response.email).save();
                return res.send(response)
            } catch (err) {
                console.log({ "error!": err })
                res.send(err)
            }

        // case "change-password":
        //     try {
        //         const responseMessage = await passwordless(
        //             email,
        //             redirect
        //         );
        //         return res.send({
        //             handler: {
        //                 redirect: redirect ? redirect : ""
        //             },
        //             data: { success: responseMessage }
        //         })
        //     } catch (err) {
        //         console.log(err)
        //         res.send(err)
        //     }

        default:
            return
    }
}