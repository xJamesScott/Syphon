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
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
import Item from '../../../models/Item';

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
                const user = await new User(data).save();
                return res.send("success!")
            } catch (err) {
                console.log({ "err!!!": err })
                return res.status(400).send({ "err!!!!": err });
            }
        default:
            return
    }
}