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

export default async function auth(req, res) {
    const router = useRouter();
    const { body: { password, email } } = req
    const { query: { call } } = req

    switch (call) {
        case "login":
            // return {
            try {
                const response = await authenticate("password", {
                    password,
                    username: email,
                    scope: "openid",
                    redirect_uri: "https://localhost:3001/"
                })
                console.log({ "response!": response })
                router.push("/")
                return response
            } catch (err) {
                console.log({ "error!": err })
                router.push("/")
                return err
            }
        // };

        case "signup":
            const payload = {
                connection: "Username-Password-Authentication",
                email,
                password,
                verify_email: true,
            };
            try {
                const response = await createUser(payload)
                console.log(`Successfully created email: ${email}`)
                console.log({ "signup response!": response })
                return response
            } catch (err) {

                console.log({ "error!": err })
                return err
            }

        default:
            return
    }


    //     case "signup":
    //         // async (req) => {
    //         // const { body, token } = req;
    //         // const { email, password, confirmPassword } = body;
    //         // if (!email) {
    //         //   throw app.httpErrors.badRequest("emailRequired");
    //         // } else if (!isValidEmail(email)) {
    //         //   throw app.httpErrors.badRequest("invalidEmail");
    //         // }
    //         // if (!password) {
    //         //   throw app.httpErrors.badRequest("passwordRequired");
    //         // } else if (!isValidPassword(password)) {
    //         //   throw app.httpErrors.badRequest("invalidPassword");
    //         // } else if (password !== confirmPassword) {
    //         //   throw app.httpErrors.badRequest("passwordNotMatch");
    //         // }
    //         // const payload = {
    //         //   connection: "Username-Password-Authentication",
    //         //   email,
    //         //   password,
    //         //   verify_email: true,
    //         // };

    //         // const payload = {
    //         //     connection: "Username-Password-Authentication",
    //         //     email: "asdflaskjdf@aslfkjask.com",
    //         //     password: "a;slfksjf",
    //         //     verify_email: true,
    //         // };
    //         // const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Iko3MzlKNmMyOWlLT1hnelduR2p0MyJ9.eyJpc3MiOiJodHRwczovL2phbXNjb3R0LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiI4Y05EV0JsVVhnTkl3RXhPcWN3S3pTdjBxY0hGRGppSkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9qYW1zY290dC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTYyMjIyMDM4NiwiZXhwIjoxNjIyMzA2Nzg2LCJhenAiOiI4Y05EV0JsVVhnTkl3RXhPcWN3S3pTdjBxY0hGRGppSiIsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgcmVhZDp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBkZWxldGU6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDpob29rcyB1cGRhdGU6aG9va3MgZGVsZXRlOmhvb2tzIGNyZWF0ZTpob29rcyByZWFkOmFjdGlvbnMgdXBkYXRlOmFjdGlvbnMgZGVsZXRlOmFjdGlvbnMgY3JlYXRlOmFjdGlvbnMgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDppbnNpZ2h0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOmxvZ3NfdXNlcnMgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIHVwZGF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHJlYWQ6YW5vbWFseV9ibG9ja3MgZGVsZXRlOmFub21hbHlfYmxvY2tzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHVwZGF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMgcmVhZDptZmFfcG9saWNpZXMgdXBkYXRlOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIGNyZWF0ZTpyb2xlcyBkZWxldGU6cm9sZXMgdXBkYXRlOnJvbGVzIHJlYWQ6cHJvbXB0cyB1cGRhdGU6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHVwZGF0ZTpicmFuZGluZyBkZWxldGU6YnJhbmRpbmcgcmVhZDpsb2dfc3RyZWFtcyBjcmVhdGU6bG9nX3N0cmVhbXMgZGVsZXRlOmxvZ19zdHJlYW1zIHVwZGF0ZTpsb2dfc3RyZWFtcyBjcmVhdGU6c2lnbmluZ19rZXlzIHJlYWQ6c2lnbmluZ19rZXlzIHVwZGF0ZTpzaWduaW5nX2tleXMgcmVhZDpsaW1pdHMgdXBkYXRlOmxpbWl0cyBjcmVhdGU6cm9sZV9tZW1iZXJzIHJlYWQ6cm9sZV9tZW1iZXJzIGRlbGV0ZTpyb2xlX21lbWJlcnMgcmVhZDplbnRpdGxlbWVudHMgcmVhZDphdHRhY2tfcHJvdGVjdGlvbiB1cGRhdGU6YXR0YWNrX3Byb3RlY3Rpb24gcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.eg9GqktUiysdDJM1pgOdT3MtgHFievVIrbkVcBhs94ecv7pd-6SwWduHwulrO_vTgqcLQ-Mg5UUHauZdySbKnZX1uxtZG3IZVRpybaz2r6Z-2whAtKl09g2-7U_YvKpNnjyrMmz8uEt0avz4JFG3vK-cE0DMkBuOmnkvNYAlPIEDqv6_ExEaO037kQbcffwWfxR42MFzmDm3FoG2iBT3o7Z9imU6R9-HOa02sB_0a5WJEeqlSHIbsfB98HAIE38E6fpqVwyYbYn36Hbq6SYPu4PqIbRu9fRD0qIxj_nQh53yg4F-rCkyc2Msrj1P5S_pTbuQ6jFjv_ZZWL6qBX9Ymw"

    //         try {
    //             console.log("  REQUEST STARTED!")//     
    //             // await Auth0.createUser(token, payload);
    //             //     //   req.log.info(`User created successfully email=${email}`);
    //             //     console.log("SUCCESS1!!!!")
    //         } catch (err) {
    //             //     //   if (err.statusCode === 409) {
    //             //     //     throw app.httpErrors.conflict("userExists");
    //             //     //   } else if (
    //             //     //     err.message === "PasswordStrengthError: Password is too weak"
    //             //     //   ) {
    //             //     //     throw app.httpErrors.badRequest("passwordWeak");
    //             //     //   }
    //             //     //   req.log.error(err, "Error creating user");
    //             //     //   throw app.httpErrors.internalServerError();
    //             console.log("ERRORRR!!!")
    //         }
    //     // // const accessToken = await Auth0.authenticate("password", {
    //     // //   password,
    //     // //   scope: "openid",
    //     // //   username: email,
    //     // // });
    //     // // return { emailVerified: false, token: accessToken };
    //     // console.log("SUCCESS2!!!!")
    //     // }

    //     // switch (req.type) {
    //     //     case "test":
    //     //         console.log("Tessst!")
    //     //     default:
    //     //         res.status(405).end() //Method Not Allowed
    //     //         break
    //     // }
    // }

    // try {
    //     console.log("  REQUEST STARTED!")//     
    //     // await Auth0.createUser(token, payload);
    //     //     //   req.log.info(`User created successfully email=${email}`);
    //     //     console.log("SUCCESS1!!!!")
    // } catch (err) {
    //     //     //   if (err.statusCode === 409) {
    //     //     //     throw app.httpErrors.conflict("userExists");
    //     //     //   } else if (
    //     //     //     err.message === "PasswordStrengthError: Password is too weak"
    //     //     //   ) {
    //     //     //     throw app.httpErrors.badRequest("passwordWeak");
    //     //     //   }
    //     //     //   req.log.error(err, "Error creating user");
    //     //     //   throw app.httpErrors.internalServerError();
    //     console.log("ERRORRR!!!")
    // }
    

}

