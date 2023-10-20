"use client";

import { useEffect, useRef, useState } from "react";
import { createZoomImageMove } from "@zoom-image/core";
import { useRouter } from "next/router";
import ProductCard from "../ProductCard";
import products from "@/lists/products";
import ImgGallery from "./ImgGallery";
import MainGalleryImg from "./MainGalleryImg";
import ProductInfo from "./ProductInfo";
import ProductBreadcrumbs from "./ProductBreadcrumbs";
import { getSimilarProducts } from "@/utils/productsUtils";

const DetailedProduct = () => {
  const router = useRouter();
  const productId = router.asPath.split("/")[2];
  const imageMoveContainerRef1 = useRef(null);
  const imageMoveContainerRef2 = useRef(null);
  const imageMoveContainerRef3 = useRef(null);

  const [product, setProduct] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  const [similarProducts, setSimilarProducts] = useState(null);

  useEffect(() => {
    const productData = products.find((product) => product.id === productId);
    setProduct(productData);
    setCurrentImg(productData?.mainImage);
    setSimilarProducts(getSimilarProducts(productData));
  }, [productId]);

  useEffect(() => {
    if (product) {
      const imageContainer1 = imageMoveContainerRef1.current;
      const imageContainer2 = imageMoveContainerRef2.current;
      const imageContainer3 = imageMoveContainerRef3.current;

      createZoomImageMove(imageContainer1, {
        zoomImageSource: product.mainImage,
        zoomFactor: 2,
      });
      createZoomImageMove(imageContainer2, {
        zoomImageSource: product.imgs[0],
        zoomFactor: 2,
      });
      createZoomImageMove(imageContainer3, {
        zoomImageSource: product.imgs[1],
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
            <div
              className={currentImg === product.mainImage ? "flex" : "hidden"}
            >
              <MainGalleryImg
                imageMoveContainerRef={imageMoveContainerRef1}
                currentImg={product.mainImage}
              />
            </div>
            <div
              className={currentImg === product.imgs[1] ? "flex" : "hidden"}
            >
              <MainGalleryImg
                imageMoveContainerRef={imageMoveContainerRef2}
                currentImg={product.imgs[0]}
              />
            </div>
            <div
              className={currentImg === product.imgs[2] ? "flex" : "hidden"}
            >
              <MainGalleryImg
                imageMoveContainerRef={imageMoveContainerRef3}
                currentImg={product.imgs[1]}
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
