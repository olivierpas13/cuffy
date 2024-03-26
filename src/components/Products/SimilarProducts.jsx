import { getProductsByProperty } from "@/services/products";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";

const SimilarProducts = ({ property }) => {
// TODO fetch only 4-5 elements
  const { data, status, isLoading } = useQuery({
    queryKey: ["products", property],
    queryFn: ()=> getProductsByProperty(property),
    staleTime: Infinity,
  });
  return (
    <>
      {status === "success" && (
        <div className="mt-20">
          <p className="text-xl font-light py-6 text-left lg:text-center">
            Productos relacionados
          </p>
          <div className="grid mx-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data.slice(0, 4).map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SimilarProducts;
