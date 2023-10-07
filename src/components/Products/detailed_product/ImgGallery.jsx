import Image from "next/image";

const ImgGallery = ({product, currentImg, setCurrentImg}) => {
    return (
        <ul className="flex flex-col justify-center content-center mr-7 ">
        <li
          onClick={() => {
            setCurrentImg(product.mainImage);
          }}
        >
          {" "}
          <Image
            className={`cursor-pointer ${
              currentImg == product.mainImage
                ? "opacity-100"
                : "opacity-50 hover:opacity-100"
            }`}
            width={130}
            height={130}
            alt={`${product.name} 1`}
            src={product.mainImage}
          />
        </li>
        <li
          onClick={() => {
            setCurrentImg(product.imgs[1]);
          }}
        >
          <Image
            className={`cursor-pointer ${
              currentImg == product.imgs[1]
                ? "opacity-100"
                : "opacity-50 hover:opacity-100"
            }`}
            width={130}
            height={130}
            alt={`${product.name} 2`}
            src={product.imgs[1]}
          />
        </li>
        <li
          onClick={() => {
            setCurrentImg(product.imgs[2]);
          }}
        >
          {" "}
          <Image
            className={`cursor-pointer ${
              currentImg == product.imgs[2]
                ? "opacity-100"
                : "opacity-50 hover:opacity-100"
            }`}
            width={130}
            height={130}
            alt={`${product.name} 3`}
            src={product.imgs[2]}
          />
        </li>
      </ul>
    );
}
 
export default ImgGallery;