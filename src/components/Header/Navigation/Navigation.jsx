import { useState } from "react";
import hamburguer from "../../../images/hamburguer.png";
import closeHamburguer from "../../../images/close-hamburguer.png";

export default function Navigation(props) {
  const { onClickOpen } = props;

  const [menuActivated, setMenuActivated] = useState(false);

  const menuOpenSelector = menuActivated
    ? "header__navigation_wrapper-open"
    : "header__navigation_wrapper";

  const hamburguerToggle = menuActivated ? closeHamburguer : hamburguer;
  const homeButtonToggle = menuActivated
    ? "header__navigation_button"
    : "header__navigation_button-home";
  const handleActiveButton = () => {
    if (!menuActivated) {
      setMenuActivated(true);
    } else {
      setMenuActivated(false);
    }
  };
  return (
    <div className="header__navigation">
      <h1 className="header__navigation_title">News Explorer</h1>
      <button
        className="header__navigation_hamburguer"
        onClick={handleActiveButton}
      >
        <img
          className="header__navigation_hamburguer-icon"
          src={hamburguerToggle}
        />
      </button>

      {menuActivated && <div className="overlay" />}

      <div className={menuOpenSelector}>
        <button className={homeButtonToggle}>Início</button>

        <button
          className="header__navigation_button header__navigation_button-outline"
          onClick={() => onClickOpen()}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
