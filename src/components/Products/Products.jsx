import { useState } from "react";
import Image from "next/image";

// import products from "@/lists/products";
import ProductCard from "./ProductCard";

const Products = ({products, trending}) => {
  const [search, setSearch] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePropertyChange = (e) => {
    setSelectedProperty(e.target.value);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())) &&
      (selectedProperty === "" ||
        product.properties.includes(selectedProperty)) &&
      (selectedStatus === "" || product.status === selectedStatus)
    );
  });

  const allProperties = [
    ...new Set(products.flatMap((product) => product.properties)),
  ];
  const allStatuses = [...new Set(products.map((product) => product.status))];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          {trending? "Los más vendidos": "Todos los productos"}</h1>
        <div className="flex items-center flex-wrap gap-4">
          <div className="mx-3">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Filtrar por propiedad:</span>
              </label>
              <select
                onChange={handlePropertyChange}
                value={selectedProperty}
                defaultValue={''}
                className="select select-bordered"
              >
                <option disabled>
                  Seleccionar
                </option>
                <option value="">Todos</option>
                {allProperties.map((property) => (
                  <option key={property} value={property}>
                    {property.charAt(0).toUpperCase() + property.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
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
                <option disabled selected>
                  Seleccionar
                </option>
                <option value="">Todos</option>
                {allStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mx-20">
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => {
          return (
            <ProductCard
            key={product.id}
            product={product}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
