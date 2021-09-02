import React, { Component } from "react";

class LinksCard extends Component {
  state = {
    isClicked: false,
  };

  handleClicked = () => {
    this.setState({ isClicked: true });
    navigator.clipboard.writeText("copied to clip");
    setInterval(() => this.setState({ isClicked: false }), 5000);
  };

  render() {
    return (
      <div className="container center">
        <div className="card links-card">
          <header className="links-card__header links-card__link1">
            someURL
          </header>
          <div className="links-card__body">
            <span className="links-card__link2">someURK</span>
            <button
              onClick={this.handleClicked}
              className={`btn btn--cyan links-card__btn ${
                this.state.isClicked && "btn--violet btn--violet--animated"
              }`}
            >
              {this.state.isClicked ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LinksCard;
