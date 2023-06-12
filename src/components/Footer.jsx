import { IoRose, IoLogoTiktok, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer
      className="footer footer-center p-10 bg-base-300
    text-primary-content"
    >
      <div>
        <div className="flex justify-center"
        >
        <IoRose
        fill="black"
        size={40}
        />
        </div>
        <p className="font-bold">
          Cuffy <br />
          Tejiendo con amor &lt;3
        </p>
        <p> Quito, Ecuador</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.tiktok.com/@cuffyec">

                <IoLogoTiktok size={25} />           
          </a>
          <a href="https://www.instagram.com/cuffyec/?hl=es" >
          <IoLogoInstagram size={25} />
          </a>
          <a href="https://wa.me/593997741067">
          <IoLogoWhatsapp size={25}/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
