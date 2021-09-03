import Media from "../Media/Media.jsx";
import { mediaData } from "./mediaData.js";

const Statistics = () => {
  return (
    <section className="container statistics">
      <h2 className="statistics__heading">Advanced Statistics</h2>
      <p className="statistics__description">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="statistics__media">
      <div className="statistics__connector"></div>
        {mediaData.map((item, index) => {
          let { icon, header, paragraph } = item;
          return (
            <Media
              key={index}
              icon={icon}
              header={header}
              paragraph={paragraph}
              id={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Statistics;
