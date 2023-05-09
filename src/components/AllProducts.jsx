import products from "@/lists/products";
import ProductsListing from "./ProductsListing";

const AllProducts = () => {
    return (
        <ProductsListing 
        products={products}
        />
    );
}
 
export default AllProducts;