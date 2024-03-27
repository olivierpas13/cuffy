import { properties } from "@/lists/properties";
import ProductsFilters from "./ProductsFilters";
import { useInView } from "react-intersection-observer";
import FilteredProducts from "./FilteredProducts";
import { useProductFilters } from "@/utils/productsUtils";
import { useEffect } from "react";
import LoadingSpinner from "../General/LoadingSpinner";

const Products = ({
  data,
  error,
  trending,
  status,
  fetchNextPage,
  isFetchingNextPage,
  title,
}) => {
  const {
    search,
    selectedProperty,
    selectedStatus,
    handleSearchChange,
    handlePropertyChange,
    handleStatusChange,
    filteredProducts,
    allStatuses,
  } = useProductFilters(
    data
  );

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-xl lg:text-3xl font-bold mb-4">{title}</h1>
        <ProductsFilters
          properties={properties}
          selectedProperty={selectedProperty}
          handlePropertyChange={handlePropertyChange}
          allStatuses={allStatuses}
          selectedStatus={selectedStatus}
          handleStatusChange={handleStatusChange}
          trending={trending}
          search={search}
          handleSearchChange={handleSearchChange}
        />
      </div>
      {status === "pending" && <div>Loading...</div>}
      {status === "error" && <div>{error.message}</div>}
      <FilteredProducts filteredProducts={filteredProducts} />

      <div ref={ref}>{isFetchingNextPage && <LoadingSpinner />}</div>
    </div>
  );
};

export default Products;
