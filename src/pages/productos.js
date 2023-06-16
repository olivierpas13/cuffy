import MainLayout from '@/layouts/MainLayout'
import ProductsComponent from "@/components/Products/Products";
import products from "@/lists/products";


const Productos = () => {
    return (
        <MainLayout>
            <ProductsComponent products={products}/>
        </MainLayout>
    );
}
 
export default Productos;