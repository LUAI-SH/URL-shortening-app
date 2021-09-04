import heroImg from "../../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container center hero-wrapper">
        <div className="" >
          <img
            className="hero__img"
            src={`${heroImg}`}
            alt="Person working on computer"
          />
        </div>
        <div className="hero__content pad-horizontal">
          <h1 className="hero__header">More than just shorter links</h1>
          <p className="hero__description">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn btn--cyan btn--rounded hero__btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
