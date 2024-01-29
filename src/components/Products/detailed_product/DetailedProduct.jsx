"use client";

import { use, useEffect, useRef, useState } from "react";
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
  const imageMoveContainerRef1 = useRef(null);
  const imageMoveContainerRef2 = useRef(null);
  const imageMoveContainerRef3 = useRef(null);

  const [product, setProduct] = useState(null);
  const [productId, setProductId] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  const [similarProducts, setSimilarProducts] = useState(null);

  useEffect(() => {
    console.log(router.query.id);
    if (router.isReady) {
      setProductId(router.asPath.split("/")[2]);
    }
  }, [router.isReady]);

  useEffect(() => {
    if (router.isReady && productId !== null) {
      getProductById(productId).then((res) => setProduct(res));
    }
  }, [productId]);

  useEffect(() => {
    if (product) {
      console.log(product)
      setCurrentImg(product.imgs[0]);
      console.log(currentImg);
getSimilarProducts(product.properties[0]).then(res=>setSimilarProducts(res));
      // setSimilarProducts(getSimilarProducts(product.properties[0]));
    }
  }, [product]);

  useEffect(() => {
    if (product) {
      const imageContainer1 = imageMoveContainerRef1.current;
      const imageContainer2 = imageMoveContainerRef2.current;
      const imageContainer3 = imageMoveContainerRef3.current;

      createZoomImageMove(imageContainer1, {
        zoomImageSource: product.imgs[0],
        zoomFactor: 2,
      });
      createZoomImageMove(imageContainer2, {
        zoomImageSource: product.imgs[1],
        zoomFactor: 2,
      });
      createZoomImageMove(imageContainer3, {
        zoomImageSource: product.imgs[2],
        zoomFactor: 2,
      });
    }
  }, [product]);

  return (
    <>
      {product && (
        <div className="container h-auto p-14 flex m-auto flex-col overflow-auto">
          <ProductBreadcrumbs name={product.name} />
          <div className="w-3/4	mx-auto flex justify-center flex-row content-center">
            <ImgGallery
              product={product}
              currentImg={currentImg}
              setCurrentImg={setCurrentImg}
            />
            <div className={currentImg === product.imgs[0] ? "flex" : "hidden"}>
              <MainGalleryImg
                imageMoveContainerRef={imageMoveContainerRef1}
                currentImg={product.imgs[0]}
              />
            </div>
            <div className={currentImg === product.imgs[1] ? "flex" : "hidden"}>
              <MainGalleryImg
                imageMoveContainerRef={imageMoveContainerRef2}
                currentImg={product.imgs[1]}
              />
            </div>
            <div className={currentImg === product.imgs[2] ? "flex" : "hidden"}>
              <MainGalleryImg
                imageMoveContainerRef={imageMoveContainerRef3}
                currentImg={product.imgs[2]}
              />
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
