import React, { Component } from "react";
import brand from "../../assets/images/logo.svg";
import menu from "../../assets/images/icon-menu.svg";

class NavBar extends Component {
  state = {
    menuIsShown: false,
  };

  handleClicked = (event) => {
    let { menuIsShown } = this.state;
    menuIsShown = !menuIsShown;
    this.setState({ menuIsShown });
  };

  render() {
    let { menuIsShown } = this.state;
    console.log("menuIsShown :>> ", menuIsShown);
    return (
      <nav className="nav">
        <div className="container nav__wrapper pad-horizontal">
          <section className="nav__brand">
            <img src={brand} />
          </section>
          <section className={`nav__content ${menuIsShown ? "" : "hidden"} `}>
            <section className="nav__items">
              <ul className="nav__links">
                <li>
                  <a className="nav__link">Features</a>
                </li>
                <li>
                  <a className="nav__link">Pricing</a>
                </li>
                <li>
                  <a className="nav__link">Resources</a>
                </li>
              </ul>
            </section>
            <section className="nav__actions">
              <ul className="nav__links">
                <li>
                  <a className="nav__link">Login</a>
                </li>
                <li>
                  <a className="btn btn--cyan btn--rounded nav__link white">
                    Sign Up
                  </a>
                </li>
              </ul>
            </section>
          </section>
          <section className="nav__menu">
            <button onClick={this.handleClicked}>
              <img src={menu} />
            </button>
          </section>
        </div>
      </nav>
    );
  }
}

export default NavBar;
