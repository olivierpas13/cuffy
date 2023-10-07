"use client";

import { use, useEffect, useMemo, useRef, useState } from "react";
import { createZoomImageMove } from "@zoom-image/core";
import { useRouter } from "next/router";
import products from "@/lists/products";
import ImgGallery from "./ImgGallery";
import MainGalleryImg from "./MainGalleryImg";

const DetailedProduct = () => {
  const router = useRouter();

  const imageMoveContainerRef = useRef(null);

  const productId = router.asPath.split("/")[2];

  const [product, setProduct] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  
  useEffect(() => {
    console.log("hola")
      const productData = products.find((product) => product.id === productId);
      setProduct(productData);
      setCurrentImg(productData?.mainImage);
  }, [productId]);


  useEffect(() =>{
    
    console.log("adios")
    const imageContainer = imageMoveContainerRef.current;

    if (product) {
      createZoomImageMove(imageContainer, {
        zoomImageSource: currentImg,
        zoomFactor:2
      })}
  }, [currentImg])

  return (
    <>
      {product && (
        <div className="container h-4/6 p-14 flex m-auto flex-col h-screen">
          <div className="text-sm breadcrumbs p-12">
            <ul>
              <li>
                <a href={"/"}>Inicio</a>
              </li>
              <li>
                <a href={"/productos"}>Todos los productos</a>
              </li>
              <li>{product.name}</li>
            </ul>
          </div>
          <div className="w-3/4	mx-auto flex justify-center flex-row content-center">
            <ImgGallery product={product} currentImg={currentImg} setCurrentImg={setCurrentImg} />
            <MainGalleryImg
            imageMoveContainerRef={imageMoveContainerRef}
            src={currentImg}
            />
            {/* <div className="flex">
                <div
                  ref={imageMoveContainerRef}
                  className="relative my-auto cursor-crosshair overflow-hidden"
                >
                  <Image
                    width={450}
                    height={450}
                    alt="Large Pic"
                    src={currentImg}
                  />
                </div>
            </div> */}
            <div className="basis-3/6 p-8 flex flex-col my-auto">
              <h2 className="text-2xl tracking-wide font-semibold text-primary-content">
                {product.name}
              </h2>
              <h3 className="text-4xl tracking-wide py-3 my-auto font-semibold text-secondary-content">
                $ {product.price}
              </h3>
              <p className="py-3 leading-8">{product.description}</p>
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

              <button
                onClick={() => {}}
                className="btn btn-md my-8 bg-black text-white	 rounded-md block"
              >
                Comprar
              </button>
            </div>
          </div>
                
        </div>
      )}
    </>
  );
};

export default DetailedProduct;
