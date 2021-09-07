import React, { useState } from "react";
import brand from "../../assets/images/logo.svg";
import menu from "../../assets/images/icon-menu.svg";

export default function NavBar() {
  const [menuIsShown, setMenuIsShown] = useState(false);

  function handleClicked(e) {
    e.preventDefault();
    setMenuIsShown(!menuIsShown);
  }

  return (
    <nav className="nav">
      <div className="container nav__wrapper pad-horizontal center">
        <section className="nav__brand">
          <img src={brand} alt="Shortly brand" />
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
          <button onClick={handleClicked}>
            <img src={menu} alt="Menu icon"/>
          </button>
        </section>
      </div>
    </nav>
  );
}
