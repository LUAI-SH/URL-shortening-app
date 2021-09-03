import Media from "../Media/Media.jsx";
import { mediaData } from "./mediaData.js";

const Statistics = () => {
  return (
    <section>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard{" "}
      </p>
      <div>
        {mediaData.map((item, index) => {
          let { icon, header, paragraph } = item;
          console.log(icon);
          return (
            <Media
              key={index}
              icon={icon}
              header={header}
              paragraph={paragraph}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Statistics;
