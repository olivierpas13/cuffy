import Image from "next/image";

const ImgGallery = ({product, currentImg, setCurrentImg}) => {
    return (

        <ul className="flex flex-row lg:flex-col justify-center content-center md:mr-7 overflow-auto ">
        <li
          onClick={() => {
            setCurrentImg(product.imgs[0]);
          }}
        >
          {" "}
          <Image
            className={`cursor-pointer ${
              currentImg == product.imgs[0]
                ? "opacity-100"
                : "opacity-50 hover:opacity-100"
            }`}
            width={130}
            height={130}
            alt={`${product.name} 1`}
            src={product.imgs[0]}
          />
        </li>
        <li
        className="mx-2 lg:mx-0"
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