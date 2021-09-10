import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

import brand from "../../assets/images/logo.svg";

export default function NavBar() {
  const [menuIsShown, setMenuIsShown] = useState(false);

  function handleClicked(e) {
    e.preventDefault();
    setMenuIsShown(!menuIsShown);
  }
  let { matches: isMatched } = window.matchMedia("(max-width: 768px)");

  return (
    <nav className="nav">
      <div className="container nav__wrapper pad-horizontal center">
        <section className="nav__brand">
          <img src={brand} alt="Shortly brand" />
        </section>
        <motion.section
          className={`nav__content ${menuIsShown ? "" : "hidden"} `}
          animate={
            isMatched &&
            (menuIsShown
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0.1,
                  y: -40,
                })
          }
          transition={{ duration: 0.2, type: "tween" }}
        >
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
        </motion.section>
        <section className="nav__menu">
          <button onClick={handleClicked}>
            <Hamburger toggled={menuIsShown} toggle={setMenuIsShown} />
          </button>
        </section>
      </div>
    </nav>
  );
}
