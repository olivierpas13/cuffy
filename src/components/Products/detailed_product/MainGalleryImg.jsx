import Image from "next/image";

const MainGalleryImg = ({ imageMoveContainerRef, currentImg }) => {
  return (
    <div
      ref={imageMoveContainerRef}
      className="relative my-auto cursor-crosshair overflow-hidden"
    >
      <Image
        width={450}
        height={450}
        alt="Imagen del producto"
        src={currentImg}
      />
    </div>
  );
};

export default MainGalleryImg;
