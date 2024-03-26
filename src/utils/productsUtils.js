import { getProductsByProperty } from "@/services/products";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";

export const formatAsCurrency = (money) =>{
  return money.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export const getColorBasedOnStatus = (status) => {
  switch (status) {
    case "En stock":
      return "bg-green-100 text-green-800";
    case "Más vendido":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-red-100 text-red-800";
  }
}

export const useProductFilters = (products) => {
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

  const filteredProducts = useMemo(() =>
    products.filter((product) => {
      return (
        (product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase())) &&
        (selectedProperty === "" || product.properties.includes(selectedProperty)) &&
        (selectedStatus === "" || product.status === selectedStatus)
      );
    }), [products, search, selectedProperty, selectedStatus]);

  const allStatuses = useMemo(() =>
    [...new Set(products.map((product) => product.status))], [products]);

  return {
    search,
    selectedProperty,
    selectedStatus,
    handleSearchChange,
    handlePropertyChange,
    handleStatusChange,
    filteredProducts,
    allStatuses
  };
}
