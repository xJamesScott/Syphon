// import React from 'react'
import axios from 'axios'

export const users = async (token) => {
  // console.log({ "path": `${process.env.AUTH_DOMAIN}/api/v2/users` })
  // console.log({ "auth!": process.env.AUTHORIZATION })

  try {
    const res = await axios.get(`${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

    );
    console.log({ "DATA!!!!!": res.data })
    return res.data;
  } catch (err) {
    // return wrapError(err);
    console.log({ "err": err })
    return err
  }
}

export const createUser = async (payload) => {
  const token = await authenticate("client_credentials")
  try {
    const res = await axios.post(
      `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }

      }
    );
    console.log("success!")
    return res.data;
  } catch (err) {
    console.log({ "err!": err })
    return err
  }
}


export const authenticate = async (grantType, payload) => {
  // console.log({ "path": `${process.env.AUTH_DOMAIN}/api/v2/users` })
  // console.log({ "auth!": process.env.AUTHORIZATION })
  // try {
  //   const res = await axios.get(`${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${process.env.AUTHORIZATION}`
  //       }
  //     }

  //   );
  //   console.log({ "DATA!!!!!": res.data })
  //   return res.data;
  // } catch (err) {
  //   // return wrapError(err);
  //   console.log({ "err": err })
  //   return err

  // }

  // ----
  const body = {
    // TODO - AUTH0 UPDATE PARAMS
    audience: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/`,
    client_id: process.env.AUTH_CLIENT_ID,
    client_secret: process.env.AUTH0_CLIENT_SECRET,
    grant_type: grantType,
    ...payload,
  };
  try {
    const res = await axios.post(`${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`, body);
    return res.data.access_token;
  } catch (err) {
    console.log({ "AuthCall Error!": err })
    throw err
  }


  // ---


  // console.log("RAN!!")

  // const body = {
  //   // TODO - AUTH0 UPDATE PARAMS
  //   audience: `https://jamscott.us.auth0.com/api/v2/`,
  //   client_id: "***REMOVED***",
  //   client_secret: "***REMOVED***ET",
  //   grant_type: "password",
  //   ...payload,
  // };
  // try {
  //   const res = await axios.post(`https://jamscott.us.auth0.com/oauth/token`, body);
  //   console.log(res.data.access_token)
  //   console.log({ "ERROR BRO!!!": err, "USERNAME!!": body.username })
  //   return res.data.access_token;
  // } catch (err) {
  //   // console.log({ "error": res })
  //   console.log({ "ERROR BRO!!!": err, "USERNAME!!": body.username })
  //   // return err;
  // }
}

export const sendChangePasswordEmail = async (token, email) => {
  const client_id = process.env.AUTH_CLIENT_ID;
  const connection = "Username-Password-Authentication";
  const payload = {
    client_id,
    email,
    connection,
  };
  try {
    const res = await axios.post(
      `${process.env.AUTH0_ISSUER_BASE_URL}/dbconnections/change_password`,
      payload
    );
    return res.data;
  } catch (err) {
    return (err);
  }
};

export const getAccountsWithSameEmail = async (token, email, forVerified) => {
  try {
    const res = await axios.get(`${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users`, {
      params: {
        q: `email:"${email}`,
        search_engine: "v3",
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(`Account(s) retrieved: ${res}`)
    return true
    // return res.data;
  } catch (err) {
    console.log(`Error retrieving account(s): ${err}`)
    return false;
  }
};