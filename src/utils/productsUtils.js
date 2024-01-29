import { getProductsByProperty } from "@/services/products";

export const getSimilarProducts = async (property) => {
  // getProductsByProperty(property).then(res=>(res));

  return await getProductsByProperty(property);

};
