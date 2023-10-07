import Image from "next/image";

const MainGalleryImg = ({imageMoveContainerRef, src}) => {
    return (
        <div className="flex">
        <div
          ref={imageMoveContainerRef}
          className="relative my-auto cursor-crosshair overflow-hidden"
        >
          <Image
            width={450}
            height={450}
            alt="Large Pic"
            src={src}
          />
        </div>
    </div>
    );
}
 
export default MainGalleryImg;