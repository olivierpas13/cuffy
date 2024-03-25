import ProductCard from "./ProductCard";

const SimilarProducts = ({similarProducts}) => {
  return (
    <div className="mt-20">
      <p className="text-2xl text-center">Productos relacionados</p>
      <div className="grid mx-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {similarProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default SimilarProducts;
