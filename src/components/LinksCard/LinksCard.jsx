import React, { useState } from "react";

export default function LinksCard(props) {
  const [buttonsStatus, setButtonStatus] = useState([]);
  let btnStatus = [];

  function handleClicked(buttonsStatus, index) {
    buttonsStatus[index] = { isClicked: true };
    setButtonStatus(buttonsStatus);
    navigator.clipboard.writeText(props.links[index].shortenUrl);
  }

  return (
    <div className="container center pad-horizontal move-up">
      {props.links.map((item, index) => {
        btnStatus.push({ isClicked: false });
        return (
          <div key={index} className="card links-card">
            <header className="links-card__header links-card__link1">
              {item.typedUrl}
            </header>
            <div className="links-card__body">
              <span className="links-card__link2">{item.shortenUrl}</span>
              <button
                onClick={() => handleClicked(btnStatus, index)}
                className={`btn btn--cyan links-card__btn ${
                  buttonsStatus[index]?.isClicked &&
                  "btn--violet btn--violet--animated"
                }`}
              >
                {buttonsStatus[index]?.isClicked ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
