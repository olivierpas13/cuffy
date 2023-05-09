const getProductsCharacteristics = (products) => {

    const allProperties = [...new Set(products.flatMap((product) => product.properties))];
    const allStatuses = [...new Set(products.map((product) => product.status))];

    return {
        allProperties,
        allStatuses,
    }

}

export default getProductsCharacteristics;