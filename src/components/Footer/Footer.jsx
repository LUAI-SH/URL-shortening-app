import { footerData } from "./footerData.js";

const Footer = () => {
  const { brand, sections, socials  } = footerData;
  return (
    <footer className="footer">
      <div className="container">
      <section>
          <img src={brand} />
      </section>
        {sections.map((section, index) => {
          return (
            <section key={index} className="footer__section">
              <h4 className="footer__title">{section.title}</h4>
              {section.links.map((link, index) => {
                return (
                  <ul key={index} className="footer__links">
                    <li>
                      <a href="#" className="footer__link">{link}</a>
                    </li>
                  </ul>
                );
              })}
            </section>
          );
        })}
        <section className="footer__section">
          {socials.map((icon, index) => {
            return (
              <ul className="footer__socials">
                <li>
                  <a href="#">
                    <img src={icon} />
                  </a>
                </li>
              </ul>
            );
          })}
        </section>
      </div>
    </footer>
  );
};

export default Footer;
