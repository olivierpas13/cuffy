const AboutUs = () => {
  return(
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("cuffy-bg1.webp")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-5xl font-bold text-white">
            Tejidos con cariño &lt;3
          </h1>
          <p className="py-3 text-white"> Desde Quito, Ecuador.</p>
          <p className="py-2 text-white">Envíos a todo el país</p>
          <button className="btn btn-primary">Comunícate con nosotros</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
