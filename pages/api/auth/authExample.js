// const Auth0 = require("../components/Auth0");
// const { isValidEmail, isValidPassword } = require("../utils");
// const {
//   changePasswordSchema,
//   loginSchema,
//   oAuthSchema,
//   oAuthProviderSchema,
//   signupSchema,
//   updatePasswordSchema,
// } = require("./schema/auth");
// const {
//   config: { auth: authConfig },
// } = require("../../config");
// const { getCookieToken } = require("../utils");
// const { SCOPES } = require("../constants");

// /*
//  * /api/auth
//  */
// async function routes(app) {
//   const User = app.mongo.model("IndividualUser");

//   app.post("/oauth", { schema: oAuthSchema }, async (req, reply) => {
//     try {
//       const { code, state } = req.body;
//       if (decodeURIComponent(state) !== authConfig.state) {
//         throw app.httpErrors.unauthorized("invalidState");
//       }
//       const token = await Auth0.authenticate("authorization_code", {
//         code,
//         redirect_uri: req.headers.referer,
//       });
//       reply.setAuthCookies(token);
//       const auth0User = await Auth0.getUser(token);
//       const {
//         email,
//         email_verified: emailVerified,
//         given_name: firstName,
//         family_name: lastName,
//       } = auth0User;
//       const { payload } = app.jwt.decode(token);
//       const userId = payload[authConfig.jwtMongoIdKey];
//       const dbUser = await User.findById(userId).populate("organisations");
//       let user = null;
//       if (dbUser) {
//         const {
//           firstName,
//           lastName,
//           organisations,
//           permissions = SCOPES.NONE,
//           photo,
//           usesPassword,
//         } = dbUser;
//         user = {
//           email,
//           firstName,
//           id: userId,
//           lastName,
//           organisations,
//           permissions,
//           photo,
//           usesPassword,
//         };
//       }
//       return {
//         email,
//         emailVerified,
//         firstName,
//         lastName,
//         token,
//         user,
//       };
//     } catch (err) {
//       req.log.error(err, "OAuth error");
//       throw app.httpErrors.internalServerError();
//     }
//   });

//   app.get(
//     "/oauth/:provider",
//     { schema: oAuthProviderSchema },
//     async (req, reply) => {
//       const { headers, params } = req;
//       const { provider } = params;
//       const providerName = provider === "google" ? "google-oauth2" : provider;
//       const url = Auth0.buildOauthUrl(providerName, headers.referer);
//       reply.redirect(url);
//     },
//   );

//   app.post(
//     "/signup",
//     { preHandler: [app.getServerToken], schema: signupSchema },
//     async (req) => {
//       const { body, token } = req;
//       const { email, password, confirmPassword } = body;
//       if (!email) {
//         throw app.httpErrors.badRequest("emailRequired");
//       } else if (!isValidEmail(email)) {
//         throw app.httpErrors.badRequest("invalidEmail");
//       }
//       if (!password) {
//         throw app.httpErrors.badRequest("passwordRequired");
//       } else if (!isValidPassword(password)) {
//         throw app.httpErrors.badRequest("invalidPassword");
//       } else if (password !== confirmPassword) {
//         throw app.httpErrors.badRequest("passwordNotMatch");
//       }
//       const payload = {
//         connection: "Username-Password-Authentication",
//         email,
//         password,
//         verify_email: true,
//       };
//       try {
//         await Auth0.createUser(token, payload);
//         req.log.info(`User created successfully email=${email}`);
//       } catch (err) {
//         if (err.statusCode === 409) {
//           throw app.httpErrors.conflict("userExists");
//         } else if (
//           err.message === "PasswordStrengthError: Password is too weak"
//         ) {
//           throw app.httpErrors.badRequest("passwordWeak");
//         }
//         req.log.error(err, "Error creating user");
//         throw app.httpErrors.internalServerError();
//       }
//       const accessToken = await Auth0.authenticate("password", {
//         password,
//         scope: "openid",
//         username: email,
//       });
//       return { emailVerified: false, token: accessToken };
//     },
//   );

//   const getExistingAccount = (serverToken, email, forVerified) => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         // Returns array Auth0 users
//         const otherAccounts = await Auth0.getAccountsWithSameEmail(
//           serverToken,
//           email,
//           forVerified,
//         );
//         // the first account with valid Database record will be the primary account
//         let provider = null;
//         let primaryAuthId = null;
//         const noAccount = !otherAccounts.some((account) =>
//           account.identities.some((id) => id.provider === "auth0"),
//         );
//         // Loops through array of Auth0 users
//         for (const account of otherAccounts) {
//           const { mongo_id } = account.app_metadata ? account.app_metadata : {};
//           if (mongo_id) {
//             const dbUser = await User.findById(mongo_id);
//             if (dbUser) {
//               primaryAuthId = dbUser.authId;
//               const providerCode = primaryAuthId.split("|")[0]; // "provider|user_id"
//               provider =
//                 providerCode === "google-oauth2" ? "Google" : providerCode;
//               break;
//             }
//           }
//         }
//         resolve({ noAccount, otherAccounts, primaryAuthId, provider });
//       } catch (err) {
//         reject(app.httpErrors.badRequest("invalidEmail"));
//       }
//     });
//   };

//   app.post(
//     "/login",
//     { preHandler: [app.getServerToken], schema: loginSchema },
//     async (req, reply) => {
//       const { body } = req;
//       const { email, password } = body;
//       try {
//         const token = await Auth0.authenticate("password", {
//           password,
//           scope: "openid",
//           username: email,
//         });
//         reply.setAuthCookies(token);
//         const auth0User = await Auth0.getUser(token);
//         const { email_verified: emailVerified } = auth0User;
//         // Don't throw as already checking 403 from Auth0 (wrong email/pw)
//         // to respond to client as 401 unauthorized error
//         if (!emailVerified) {
//           return app.httpErrors.forbidden("emailUnverified");
//         }
//         const { payload } = app.jwt.decode(token);
//         const userId = payload[authConfig.jwtMongoIdKey];
//         if (!userId) {
//           throw new Error("no mongo_id found in JWT");
//         }
//         const dbUser = await User.findById(userId).populate("organisations");
//         let user = null;
//         if (dbUser) {
//           const {
//             firstName,
//             lastName,
//             organisations,
//             photo,
//             permissions = SCOPES.NONE,
//             usesPassword,
//           } = dbUser;
//           user = {
//             email,
//             firstName,
//             id: userId,
//             lastName,
//             organisations,
//             permissions,
//             photo,
//             usesPassword,
//           };
//         }
//         return { email, emailVerified, token, user };
//       } catch (err) {
//         // Error handling
//         if (err.statusCode === 403) {
//           const { noAccount, provider } = await getExistingAccount(
//             req.token,
//             email,
//             false,
//           );
//           if (noAccount)
//             throw app.httpErrors.badRequest(
//               provider ? "registeredAccount" : "noEmailAccount",
//             );
//           else throw app.httpErrors.unauthorized("wrongCredentials");
//         }
//         if (err.statusCode === 429) {
//           req.log.error(
//             err,
//             "Maximum number of sign in attempts exceeded. (10 times)",
//           );
//           throw app.httpErrors.tooManyRequests("maxSignInAttemptsExceeded");
//         }
//         throw app.httpErrors.internalServerError(err);
//       }
//     },
//   );

//   app.put(
//     "/password",
//     {
//       preHandler: [app.getServerToken],
//       schema: updatePasswordSchema,
//     },
//     async (req, reply) => {
//       const {
//         body: { newPassword, oldPassword },
//         token,
//       } = req;
//       try {
//         const { email, sub: userId } = await Auth0.getUser(getCookieToken(req));

//         // validate old password
//         await Auth0.authenticate("password", {
//           password: oldPassword,
//           scope: "openid",
//           username: email,
//         });

//         // set new password
//         await Auth0.updateUser(token, userId, {
//           password: newPassword,
//         });

//         // don't use return w 204
//         reply.code(204);
//       } catch (err) {
//         if (err.statusCode === 403) {
//           throw app.httpErrors.unauthorized("wrongCredentials");
//         }
//         if (err.statusCode === 429) {
//           req.log.error(
//             err,
//             "Maximum number of sign in attempts exceeded. (10 times)",
//           );
//           throw app.httpErrors.tooManyRequests("maxSignInAttemptsExceeded");
//         }
//         if (err.message === "PasswordStrengthError: Password is too weak") {
//           throw app.httpErrors.badRequest("passwordWeak");
//         }
//         throw app.httpErrors.badRequest();
//       }
//     },
//   );

//   app.post(
//     "/change-password",
//     { preHandler: [app.getServerToken], schema: changePasswordSchema },
//     async (req) => {
//       const { body, token } = req;
//       const { email } = body;

//       try {
//         const responseMessage = await Auth0.sendChangePasswordEmail(
//           token,
//           email,
//         );
//         req.log.info(
//           `Change password email created successfully for email=${email}`,
//         );
//         return { email, responseMessage };
//       } catch (err) {
//         req.log.error(err, "Error creating change password email");
//         throw app.httpErrors.internalServerError("failedChangePasswordEmail");
//       }
//     },
//   );

//   app.post(
//     "/link-accounts",
//     { preHandler: [app.getServerToken] },
//     async (req) => {
//       try {
//         const token = getCookieToken(req);
//         if (!token) {
//           throw app.httpErrors.unauthorized("invalidToken");
//         }
//         const { email } = await Auth0.getUser(token);
//         const serverToken = req.token;
//         const { primaryAuthId, otherAccounts } = await getExistingAccount(
//           serverToken,
//           email,
//           true,
//         );
//         if (!primaryAuthId) return { primaryAuthId }; // no account with Database record (profile) yet
//         // link accounts (current and legacy dangling accounts) to the primary account
//         for (const account of otherAccounts) {
//           if (account.user_id !== primaryAuthId) {
//             await Auth0.linkAccounts(
//               serverToken,
//               primaryAuthId,
//               account.user_id,
//             );
//           }
//         }
//         return { primaryAuthId };
//       } catch (err) {
//         req.log.error(err, "Error linking accounts");
//         throw app.httpErrors.internalServerError();
//       }
//     },
//   );
// }

// module.exports = routes;
