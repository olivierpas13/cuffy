import { getProductsByProperty } from "@/services/products";

export const getSimilarProducts = async (property) => {

  return await getProductsByProperty(property);

};

export const formatAsCurrency = (money) =>{
  return money.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export const getColorBasedOnStatus = (status) => {
  switch (status) {
    case "En stock":
      return "bg-green-100 text-green-800";
    case "Más vendido":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-red-100 text-red-800";
  }
}