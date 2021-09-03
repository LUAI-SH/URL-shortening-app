import heroImg from "../../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <section className="container hero">
      <img src={`${heroImg}`} />
      <div className="hero__img"></div>
      <div className="hero__content">
        <h1>More than just shortener links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
