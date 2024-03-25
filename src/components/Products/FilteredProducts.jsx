import ProductCard from "./ProductCard";

const FilteredProducts = ({filteredProducts}) => {
  return (
    <div className="grid mx-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {filteredProducts.map((product) => {
      return <ProductCard key={product.id} product={product} />;
    })}
  </div>  )
}

export default FilteredProducts