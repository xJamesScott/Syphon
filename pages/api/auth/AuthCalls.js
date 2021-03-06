// import React from 'react'
import axios from 'axios'

export const users = async (token) => {
  try {
    const res = await axios.get(`${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

    );
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
    return res.data;
  } catch (err) {
    console.log({ "err!": err })
    return err
  }
}


export const authenticate = async (grantType, payload) => {
  const body = {
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
  } catch (err) {
    console.log(`Error retrieving account(s): ${err}`)
    return false;
  }
};

export const passwordless = async (email, redirect) => {
  try {
    const token = await authenticate("client_credentials");
    const users = await users(token, {
      email: email
    });
    const body = {
      client_id: process.env.AUTH_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      connection: "email",
      email: email,
      send: link,
      authParams: {
        redirect_uri: redirect
      }
    }
    await axios.post(`${process.env.AUTH0_ISSUER_BASE_URL}/passwordless/start`, body)
    return true
  } catch (err) {
    console.log({ "Passwordless Auth Error! ": err })
    return err
  }
}