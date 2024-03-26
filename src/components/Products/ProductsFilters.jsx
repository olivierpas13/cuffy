import React from "react";

const ProductsFilters = ({
    properties,
    selectedProperty,
    handlePropertyChange,
    allStatuses,
    selectedStatus,
    handleStatusChange,
    trending,
    search,
    handleSearchChange,
  }) => {  return (
    <div className="mx-auto w-screen items-center flex flex-wrap gap-4">
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
  );
};

export default ProductsFilters;
