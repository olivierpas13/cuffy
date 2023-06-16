import { useRouter } from "next/router";
import products from "@/lists/products";

const DetailedProduct = () => {
  const router = useRouter();

  const product = products.find((product) => {
    return product.id === router.asPath.split("/")[2];
  });

  return (
    <div className="container h-fit	p-16 flex justify-center  flex-col h-screen">
      <div className="text-sm breadcrumbs p-12">
        <ul>
          <li>
            <a href={'/'}>Inicio</a>
          </li>
          <li>
            <a href={'/productos'} >Todos los productos</a>
          </li>
          <li>{product.name}</li>
        </ul>
      </div>
      <div className=" mx-auto flex justify-center flex-row">

      <div className="basis-1/4 carousel w-full max-h-[30rem]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/products/1.jpeg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/products/2.jpeg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/products/3.jpeg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/products/4.jpeg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="basis-2/4 p-7">
        <h2 className="text-2xl tracking-wide	 font-semibold text-primary-content">{product.name}</h2>
        <h3 className="text-3xl tracking-wide	p-3 font-bold text-secondary-content">$ {product.price}</h3>
        <p className="py-6 leading-8">{product.description}</p>
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
              className={`inline-block px-2 py-1 my-4 rounded-md text-sm font-medium ${
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
};

export default DetailedProduct;
