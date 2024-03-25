import { getProductsByProperty } from "@/services/products";

export const getSimilarProducts = async (property) => {

  return await getProductsByProperty(property);

};

export const formatAsCurrency = (money) =>{
  return money.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}