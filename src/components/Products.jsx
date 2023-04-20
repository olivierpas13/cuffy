import products from "@/lists/products";
import Image from "next/image";
import { useState } from "react";

const Products = () => {
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
      (selectedProperty === "" || product.properties.includes(selectedProperty)) &&
      (selectedStatus === "" || product.status === selectedStatus)
    );
  });

  const allProperties = [...new Set(products.flatMap((product) => product.properties))];
  const allStatuses = [...new Set(products.map((product) => product.status))];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Todos los productos</h1>
        <div className="flex items-center flex-wrap gap-4">
          <div className="mx-3" >
            <h3 className="text-lg font-medium mb-2">Filtrar por propiedad:</h3>
            <select
              className="border border-gray-300 rounded-md px-2 py-1"
              onChange={handlePropertyChange}
              value={selectedProperty}
            >
              <option value="">Todos</option>
              {allProperties.map((property) => (
                <option key={property} value={property}>
                  {property.charAt(0).toUpperCase() + property.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Filtrar por estado:</h3>
            <select
              className="border border-gray-300 rounded-md px-2 py-1"
              onChange={handleStatusChange}
              value={selectedStatus}
            >
              <option value="">Todos</option>
              {allStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <div className="mx-20">
            <h3 className="text-lg font-medium mb-2">Buscar:</h3>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-1"
              value={search}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-white rounded-md shadow-md overflow-hidden"
            >
              <div className="relative h-56 md:h-64 lg:h-96">
                <Image
                  src={`/products/${product.id}.jpeg`}
                  alt={product.name}
                  fill
                />
              </div>
              <div className="px-4 py-3">
                <h2 className="text-lg font-medium">{product.name}</h2>
               
                <p className="text-sm text-gray-500 mb-2">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.properties.map((property) => (
                <div
                  key={property}
                  className="bg-gray-100 text-gray-600 rounded-full px-2 py-1 text-xs"
                >
                  {property}
                </div>
              ))}
            </div>
            <div className="mt-2">
              <span
                className={`inline-block px-2 py-1 rounded-md text-sm font-medium ${
                  product.status === "En stock"
                    ? "bg-green-100 text-green-800"
                    : product.status === "Más vendido"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {product.status}
              </span>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>
);
};

export default Products;