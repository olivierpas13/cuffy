const ProductBreadcrumbs = ({name}) => {
    return (
        <div className="text-sm breadcrumbs p-12">
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