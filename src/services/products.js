'use client'

import axios from "axios";
// const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`;

const baseUrl = `http://localhost:3003/products`;

// const config = {
//   headers: { Authorization: `Bearer ${token}` },
// };

export const testProd = async () => {
  var options = {
    method: "POST",
    url: "https://dev-vf1leamsnvsgn37c.us.auth0.com/oauth/token",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: "YOUR_CLIENT_ID",
      client_secret: "YOUR_CLIENT_SECRET",
      audience: "YOUR_API_IDENTIFIER",
    }),
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const createProduct = async () => {

  const response = await axios.get(baseUrl);
  return response.data;
};
