import React, { Component } from "react";

class LinksCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonsStatus: [],
      links: [
        { a: "fgvfdg", b: "dfdsfdf" },
        { a: "fgvfdg", b: "dfdsfdf" },
      ],
    };
  }

  handleClicked = async (foo, index) => {
    foo[index].value = true;
    await this.setState({ buttonsStatus: foo });
    console.log(this.state);
    //navigator.clipboard.writeText(shortenLink);
    // setInterval(() => this.setState({ buttonsStatus: false }), 5000);
  };

  render() {
    console.log(`prps`, this.props)
    let btnStatus = [];
    const { links, buttonsStatus } = this.state;
    return (
      <div className="container center">
        {links.map((item, index) => {
          btnStatus.push({ index, value: false });
          return (
            <div key={`${index}`} className="card links-card">
              <header className="links-card__header links-card__link1">
                {item.a}
              </header>
              <div className="links-card__body">
                <span className="links-card__link2">{item.b}</span>
                <button
                  onClick={() => this.handleClicked(btnStatus, index)}
                  className={`btn btn--cyan links-card__btn ${
                    buttonsStatus[index]?.value &&
                    "btn--violet btn--violet--animated"
                  }`}
                >
                  {buttonsStatus[index]?.value ? "Copied!" : "Copy"}
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
