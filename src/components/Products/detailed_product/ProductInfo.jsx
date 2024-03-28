import { formatAsCurrency, sendBuyMessage } from "@/utils/productsUtils";

const ProductInfo = ({product}) => {
    return (
        <div className="basis-3/6 mt-6 lg:mt-0 lg:p-8 flex flex-col my-auto">
        <h2 className="text-lg lg:text-2xl tracking-wide font-light lg:font-semibold text-primary-content">
          {product.name}
        </h2>
        <h3 className="text-4xl tracking-wide py-3 my-auto font-semibold text-secondary-content">
          {formatAsCurrency(product.price)}
        </h3>
        <p className="py-3 leading-8 font-light">{product.description}</p>
        <div className="flex flex-wrap gap-2">
          {product.properties.map((property) => (
            <div
              key={property}
              className="bg-gray-100 text-gray-600 rounded-full px-2 py-1 text-s"
            >
              {property.charAt(0).toUpperCase() + property.slice(1)}
            </div>
          ))}
        </div>
        <span
          className={`inline-block w-fit px-2 py-1 my-4 rounded-md text-sm font-medium ${
            product.status === "En stock"
              ? "bg-green-100 text-green-800"
              : product.status === "Más vendido"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {product.status}
        </span>

          <p> <span className="font-semibold" > Disponibilidad:</span> <span className=" text-gray-400	" >{product.stock} disponibles</span></p>

        <a
          href={sendBuyMessage(product.name)}
          className="btn btn-md my-8 bg-black text-white rounded-md block content-center"
        >
          COMPRAR
        </a>
      </div>
    );
}
 
export default ProductInfo;