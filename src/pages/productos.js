import MainLayout from "@/layouts/MainLayout";
import ProductsComponent from "@/components/Products/Products";
import { getProducts } from "@/services/products";
import { useEffect, useState } from "react";

const Productos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);
  return (
    <MainLayout>
      <ProductsComponent products={products} />
    </MainLayout>
  );
};

export default Productos;
