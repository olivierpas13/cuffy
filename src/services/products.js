"use client";

import axios from "axios";


const baseUrl = process.env.NODE_ENV === 'development'
  ? `http://localhost:3003/api/products`
  : "https://cuffy-backend.vercel.app/api/products";


export const createProduct = async (product) => {
  const response = await axios.post(baseUrl, product);
  return response.data;
};

export const getProducts = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export const getProductsByProperty = async(property) =>{
  const res = await axios.get(`${baseUrl}/property/${property}`);
  return res.data;
};
