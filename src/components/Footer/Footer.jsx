import { footerData } from "./footerData.js";

const Footer = () => {
  const { brand, sections, socials } = footerData;
  return (
    <footer className=" footer">
      <div className="container center pad-horizontal footer__wrapper">
        <section className="footer__section footer__brand">
          <img className="" src={brand} />
        </section>
        {sections.map((section, index) => {
          return (
            <section key={index} className="footer__section">
              <h4 className="footer__title">{section.title}</h4>
              {section.links.map((link, index) => {
                return (
                  <ul key={index} className="footer__links">
                    <li>
                      <a href="#" className="footer__link">
                        {link}
                      </a>
                    </li>
                  </ul>
                );
              })}
            </section>
          );
        })}
        <section className="footer__section footer__socials">
          <ul>
            {socials.map((icon, index) => {
              return (
                <li key={index}>
                  <a href="#">
                    <img src={icon} />
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
