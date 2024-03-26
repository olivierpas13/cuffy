"use client";

import { useEffect, useRef, useState } from "react";
import { createZoomImageMove } from "@zoom-image/core";
import { useRouter } from "next/router";
import ImgGallery from "./ImgGallery";
import MainGalleryImg from "./MainGalleryImg";
import ProductInfo from "./ProductInfo";
import ProductBreadcrumbs from "./ProductBreadcrumbs";
import { getProductById } from "@/services/products";
import SimilarProducts from "../SimilarProducts";

const DetailedProduct = () => {
  const router = useRouter();
  const imageMoveContainerRef = useRef(null);
  const [product, setProduct] = useState(null);
  const [productId, setProductId] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  const zoomed = useRef(null);
  useEffect(() => {
    if (router.isReady) {
      setProductId(router.asPath.split("/")[2]);
    }
  }, [router.asPath, router.isReady]);

  useEffect(() => {
    if (router.isReady && productId !== null) {
      getProductById(productId).then((res) => setProduct(res));
    }
  }, [productId, router.isReady]);

  useEffect(() => {
    if (product) {
      setCurrentImg(product.imgs[0]);
    }
  }, [product]);

  useEffect(() => {
    if (product && currentImg) {
      const imageContainer = imageMoveContainerRef.current;
      if (zoomed.current) {
        zoomed.current.cleanup();
      }
      zoomed.current = createZoomImageMove(imageContainer, {
        zoomImageSource: currentImg,
        zoomFactor: 2,
      });
    }
  }, [currentImg, product]);

  return (
    <>
      {product && currentImg && (
        <div className="container h-auto p-14 px-6 flex m-auto flex-col ">
          <ProductBreadcrumbs name={product.name} />
          <div className="w-4/4 lg:w-3/4 mx-auto flex justify-center flex-col lg:flex-row content-center">
            <div id="imgs" className="flex flex-col lg:flex-row ">
              <div className="order-last lg:order-first w-5/6 lg:w-6/6 mx-auto mt-3" >
                <ImgGallery
                  product={product}
                  currentImg={currentImg}
                  setCurrentImg={setCurrentImg}
                />
              </div>
              <div>
                <MainGalleryImg
                  imageMoveContainerRef={imageMoveContainerRef}
                  currentImg={currentImg}
                />
              </div>
            </div>
            <ProductInfo product={product} />
          </div>
            <SimilarProducts property={product.properties[0]} />
        </div>
      )}
    </>
  );
};

export default DetailedProduct;
