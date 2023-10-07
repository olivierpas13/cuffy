"use client";

import { use, useEffect, useMemo, useRef, useState } from "react";
import { createZoomImageMove } from "@zoom-image/core";
import { useRouter } from "next/router";
import products from "@/lists/products";
import ImgGallery from "./ImgGallery";
import MainGalleryImg from "./MainGalleryImg";
import ProductInfo from "./ProductInfo";
import ProductBreadcrumbs from "./ProductBreadcrumbs";

const DetailedProduct = () => {
  const router = useRouter();

  const imageMoveContainerRef = useRef(null);

  const productId = router.asPath.split("/")[2];

  const [product, setProduct] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);

  useEffect(() => {
    console.log("hola");
    const productData = products.find((product) => product.id === productId);
    setProduct(productData);
    setCurrentImg(productData?.mainImage);
  }, [productId]);

  useEffect(() => {
    console.log("adios");
    const imageContainer = imageMoveContainerRef.current;

    if (product) {
      createZoomImageMove(imageContainer, {
        zoomImageSource: currentImg,
        zoomFactor: 2,
      });
    }
  }, [currentImg]);

  return (
    <>
      {product && (
        <div className="container h-4/6 p-14 flex m-auto flex-col h-screen">
            <ProductBreadcrumbs name={product.name} />
          <div className="w-3/4	mx-auto flex justify-center flex-row content-center">
            <ImgGallery
              product={product}
              currentImg={currentImg}
              setCurrentImg={setCurrentImg}
            />
            <MainGalleryImg
              imageMoveContainerRef={imageMoveContainerRef}
              src={currentImg}
            />
            <ProductInfo product={product} />
          </div>
          <div>Productos relacionados</div>
        </div>
      )}
    </>
  );
};

export default DetailedProduct;
