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

// import { users, authenticate, createUser, getAccountsWithSameEmail } from "./AuthCalls"
import { useRouter } from 'next/router';
import axios from "axios";
import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';
import Item from '../../models/Item';

export default async function cart(req, res) {
    
    
    const { body: { email },
        query: { call, redirect }
    } = req

    // const userData = {
    //     ...req.body,
    //     _id: req.userId,
    //     authId: req.user.sub,
    //     email,
    //   };
    const data = {
        email: email
    }

    await dbConnect()

    switch (call) {
        case "create":
            try {
                // const response = await authenticate("password", {
                //     password,
                //     username: email,
                //     scope: "openid",
                //     redirect_uri: process.env.AUTH_DOMAIN
                // })
                const user = await new User(data).save();
                // res.status(200)
                // console.log({ "res!": res })
                // console.log({ "response!": response })
                // return res.send({
                //     redirect: redirect ? redirect : "",
                //     // data: { email  }
                // });

                // return {
                //     ...user.toObject()
                // }

                return res.send("success!")

                // AUTHENTICATE DIRECT CALL

                // await fetch('https://jsonplaceholder.typicode.com/todos/1',
                //     { method: 'GET' })
                // // return todos
                // // console.log() res.status(200).json({ message: "yo!" })
                // // return "success"
                // // return "sucess"
            } catch (err) {
                console.log({ "err!!!": err })

                // if (err.response.status == 429) {
                //     return res.status(500).send("Whoops! Too many login attempts, please wait a while before attempting again");
                // }
                // const token = await authenticate("client_credentials");
                // const accountExist = await getAccountsWithSameEmail(token, email);
                // if (!accountExist) {
                //     return res.status(500).send("Email not found: please click 'SignUp'")
                // }

                return res.status(400).send({ "err!!!!": err });
            }




        default:
            return
    }
}