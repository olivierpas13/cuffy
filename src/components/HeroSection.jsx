const HeroSection = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/cuffy-bg1.webp")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Que tu cariño jamás se marchite &lt;3</h1>
      <p className="mb-5">Tejidos a mano con la mejor calidad desde Quito - Ecuador.</p>
      <button className="btn btn-primary">Ver productos</button>
    </div>
  </div>
</div>
    );
}
 
export default HeroSection;