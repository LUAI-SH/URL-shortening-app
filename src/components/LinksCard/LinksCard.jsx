import React, { Component } from "react";

class LinksCard extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="card">
          <header className="card__header card__link1"></header>
          <div className="card__body">
            <span className="card__link2"></span>
            <button className="btn btn--cyan card__btn">Copy</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LinksCard;
