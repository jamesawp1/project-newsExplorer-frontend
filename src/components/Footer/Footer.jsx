import githubLogo from "../../images/github.png";
import linkedinLogo from "../../images/linkedin.png";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2025 James Jr.</p>
      <div className="footer__wrapper">
        <a href="#" className="footer__link">
          <p className="footer__home">Início</p>
        </a>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a href="https://github.com/jamesawp1" target="_blank" className="footer__link">
              <img src={githubLogo} alt="Logo do Github" className="footer__icon"/>
            </a>
          </li>
          <li className="footer__list-item">
            <a href="https://www.linkedin.com/in/james-roggia-damo" target="_blank" className="footer__link">
              <img src={linkedinLogo} alt="Logo do Linkedin" className="footer__icon"/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}