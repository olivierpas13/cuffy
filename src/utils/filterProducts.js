const filterProducts = ({products, selectedProperty, selectedStatus, search}) =>{
    return products.filter((product) => {
        return (
          (product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase())) &&
          (selectedProperty === "" || product.properties.includes(selectedProperty)) &&
          (selectedStatus === "" || product.status === selectedStatus)
        );
      });
}

export default filterProducts;