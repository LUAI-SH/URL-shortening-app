import React, { Component } from "react";

class LinksCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonsStatus: [],
    };
  }

  handleClicked = async (buttonsStatus, index) => {
    console.log(`Before`, buttonsStatus);
    buttonsStatus[index] = { isClicked: true };
    console.log(buttonsStatus);
    await this.setState({ buttonsStatus });
    //console.log(this.state);
    navigator.clipboard.writeText(this.props.links[index].shortenUrl);
    // setInterval(() => this.setState({ buttonsStatus: false }), 5000);
  };

  render() {
    let btnStatus = [];
    const { buttonsStatus } = this.state;
    return (
      <div className="container center">
        {this.props.links.map((item, index) => {
          btnStatus.push({ isClicked: false });
          return (
            <div key={`${index}`} className="card links-card">
              <header className="links-card__header links-card__link1">
                {item.typedUrl}
              </header>
              <div className="links-card__body">
                <span className="links-card__link2">{item.shortenUrl}</span>
                <button
                  onClick={() => this.handleClicked(btnStatus, index)}
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
}

export default LinksCard;
