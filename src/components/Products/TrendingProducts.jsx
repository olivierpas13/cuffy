import Products from "./Products";
import products from "@/lists/products";

const TrendingProducts = () => {
    const trendingProds = products.filter(product=>{
        return product.status === "Más vendido";
    })
    return (
        <Products products={trendingProds} trending={true}/>
    );
}
 
export default TrendingProducts;