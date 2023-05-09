import products from "@/lists/products";
import ProductsListing from "./ProductsListing";

const TrendingProducts = () => {

    const trendingProducts = products.filter(product=> {
        return(
            product.status === "Más vendido"
        )
    })

    return (
        <ProductsListing 
        products={trendingProducts}
        />
    );
}
 
export default TrendingProducts;