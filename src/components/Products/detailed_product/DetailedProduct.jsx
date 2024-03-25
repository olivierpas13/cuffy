"use client";

import { useEffect, useRef, useState } from "react";
import { createZoomImageMove } from "@zoom-image/core";
import { useRouter } from "next/router";
import ProductCard from "../ProductCard";
import ImgGallery from "./ImgGallery";
import MainGalleryImg from "./MainGalleryImg";
import ProductInfo from "./ProductInfo";
import ProductBreadcrumbs from "./ProductBreadcrumbs";
import { getSimilarProducts } from "@/utils/productsUtils";
import { getProductById } from "@/services/products";

const DetailedProduct = () => {
  const router = useRouter();
  const imageMoveContainerRef = useRef(null);
  const [product, setProduct] = useState(null);
  const [productId, setProductId] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  const [similarProducts, setSimilarProducts] = useState(null);
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
      getSimilarProducts(product.properties[0]).then((res) =>
        setSimilarProducts(res)
      );
    }
  }, [product]);

  useEffect(() => {
    if (product && currentImg) {
      console.log(imageMoveContainerRef);
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
        <div className="container h-auto p-14 flex m-auto flex-col overflow-scroll">
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
          {similarProducts && (
            <div className="mt-20">
              <p className="text-2xl text-center">Productos relacionados</p>
              <div className="flex justify-evenly p-7 gap-0">
                {similarProducts.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DetailedProduct;
