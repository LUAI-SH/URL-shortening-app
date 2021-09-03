import brandReg from "../../assets/images/icon-brand-recognition.svg";

const Media = () => {
  return (
    <div className="card media">
      <div className="media__icon">
        <img className="media__img" src={brandReg}/>
      </div>
      <div className="media__content">
        <h3>Brand Recognition</h3>
        <p>
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>
    </div>
  );
};

export default Media;
