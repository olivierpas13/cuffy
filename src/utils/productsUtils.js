import products from "@/lists/products";

export const getSimilarProducts = (product) =>{
    return products.filter((prod)=>{
        return prod.properties.includes(product?.properties[0] || product?.properties[1])
      }).splice(-5);
    
}
