// import React from 'react'
import axios from 'axios'

export const users = async (token, payload) => {
  // console.log({ "path": `${process.env.AUTH_DOMAIN}/api/v2/users` })
  // console.log({ "auth!": process.env.AUTHORIZATION })
  try {
    const res = await axios.get(`${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AUTHORIZATION}`
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

export const authenticate = async (token, payload) => {
  // console.log({ "path": `${process.env.AUTH_DOMAIN}/api/v2/users` })
  // console.log({ "auth!": process.env.AUTHORIZATION })
  try {
    const res = await axios.get(`${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AUTHORIZATION}`
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