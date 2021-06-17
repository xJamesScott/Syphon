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
  // console.log("RAN!!")
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
    console.log(res.data.access_token)
    return res.data.access_token;
  } catch (err) {
    // console.log({ "error": res })
    return err;
  }
  // console.log("RAN!!")
}