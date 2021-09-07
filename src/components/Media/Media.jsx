const Media = (props) => {
  let { icon, header, paragraph, id } = props;
  return (
    <div className={`card media move-down--${id}`}>
      <div className="media__icon">
        <img className="media__img" src={icon} alt="Media icon."/>
      </div>
      <div className="media__content">
        <h3 className="media__heading">{header}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Media;
