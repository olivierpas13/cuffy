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
  const imageMoveContainerRef = useRef(null);

  const [product, setProduct] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  const [similarProducts, setSimilarProducts] = useState(null)

  useEffect(() => {
    const productData = products.find((product) => product.id === productId);
    setProduct(productData);
    setCurrentImg(productData?.mainImage);
    setSimilarProducts(getSimilarProducts(productData));
  }, [productId]);

  useEffect(() => {
    const imageContainer = imageMoveContainerRef.current;
    if (currentImg) {
      createZoomImageMove(imageContainer, {
        zoomImageSource: currentImg,
        zoomFactor: 2,
      });
    }
  }, [currentImg]);

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
            <MainGalleryImg
              imageMoveContainerRef={imageMoveContainerRef}
              imgs = {[product.mainImage, product.imgs[0], product.imgs[1]]}
              currentImg={currentImg}
            />
            <ProductInfo product={product} />
          </div>
          {similarProducts && 
          <div className="mt-20" >
            <p className="text-2xl text-center" >Productos relacionados</p>
            <div className="flex justify-evenly p-7 gap-0" >
              {
                similarProducts.map(product=>{
                  return(
                    <ProductCard key={product.id} product={product} />
                  )
                })
              }
            </div>
          </div>}
        </div>
      )}
    </>
  );
};

export default DetailedProduct;
