import brandReg from "../../assets/images/icon-brand-recognition.svg";

const Media = (props) => {
  console.log('props :>> ', props);
  let { icon, header, paragraph } = props;
  return (
    <div className="card media">
      <div className="media__icon">
        <img className="media__img" src={icon} />
      </div>
      <div className="media__content">
        <h3 className="media__heading">{header}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Media;
