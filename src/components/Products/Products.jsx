import { properties } from "@/lists/properties";
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
    data.pages.map((page) => page.page.map((item) => item)).flatMap((el) => el)
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
        <h1 className="text-xl lg:text-3xl font-bold mb-4">
          {trending ? "Los más vendidos" : "Todos los productos"}
        </h1>
        <div className="mx-auto w-screen items-center flex-wrap gap-4">
          <div className="mx-3">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Filtrar por propiedad:</span>
              </label>
              <select
                onChange={handlePropertyChange}
                value={selectedProperty}
                defaultValue={""}
                className="select select-bordered"
              >
                <option disabled>Seleccionar</option>
                <option value="">Todos</option>
                {properties.map((property) => (
                  <option key={property} value={property}>
                    {property.charAt(0).toUpperCase() + property.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {!trending && (
            <div className="mx-3">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Filtrar por estado:</span>
                </label>
                <select
                  onChange={handleStatusChange}
                  value={selectedStatus}
                  className="select select-bordered"
                >
                  <option disabled>Seleccionar</option>
                  <option value="">Todos</option>
                  {allStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          <div className="ml-5 lg:mx-20">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Buscar por nombre</span>
              </label>
              <input
                placeholder="Llavero de mona lisa"
                type="text"
                className="border border-gray-300 rounded-md px-4 py-1"
                value={search}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
      </div>
      {status === "pending" && <div>Loading...</div>}
      {status === "error" && <div>{error.message}</div>}
      <FilteredProducts filteredProducts={filteredProducts} />

      <div ref={ref}>{isFetchingNextPage && <LoadingSpinner />}</div>
    </div>
  );
};

export default Products;
