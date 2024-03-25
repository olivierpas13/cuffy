const ProductBreadcrumbs = ({name}) => {
    return (
        <div className="text-sm breadcrumbs md:p-12 overflow-scroll">
        <ul>
          <li>
            <a href={"/"}>Inicio</a>
          </li>
          <li>
            <a href={"/productos"}>Todos los productos</a>
          </li>
          <li>{name}</li>
        </ul>
      </div>
    );
}
 
export default ProductBreadcrumbs;