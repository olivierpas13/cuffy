import { getColorBasedOnStatus } from "@/utils/productsUtils";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/productos/${id}`);
  };

  return (
    product && (
      <div
        onClick={() => {
          handleClick(product.id);
        }}
        className="bg-white cursor-pointer rounded-md shadow-md overflow-hidden lg:h-96"
      >
        <div className="flex relative h-52 md:h-68 lg:w-full">
          <Image src={product.imgs[0]} alt={product.name} fill />
        </div>
        <div className="px-4 py-3">
          <h2 className="text-md lg:text-lg font-medium break-words">
            {product.name}
          </h2>
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
          <div className="mt-3 flex flex-col lg:flex-row justify-between items-end">
            <span
              className={`inline-block px-2 py-1 rounded-md text-sm font-medium ${getColorBasedOnStatus(
                product.status
              )}`}
            >
              {product.status}
            </span>
            <span className="badge badge-secondary badge-lg mt-2 lg:mt-0">
              $ {product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;
