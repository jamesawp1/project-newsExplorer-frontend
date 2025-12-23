import closeButton from "../../images/close-button.svg";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

export default function Popup(props) {
  const { onClose, popup } = props;
  const popupActive = popup;

  const [registerForm, setRegisterForm] = useState(false);

  const handleFormRegister = () => {
    setRegisterForm((prev) => !prev);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className={`popup ${popupActive ? "popup-active" : ""}`}>
      <div className="popup__container">
        <button className="popup__close-button" onClick={onClose}>
          <img src={closeButton} className="popup__close-button-img" />
        </button>
        <h3 className="popup__title">
          {registerForm ? "Inscrever-se" : "Entrar"}
        </h3>
        {!registerForm && <Login onSubmit={handleSubmit} />}
        {registerForm && <Register onSubmit={handleSubmit} />}
        <div className="popup__subtitle">
          <span className="popup__subtitle_span">ou</span>{" "}
          <button
            className="popup__subtitle_button"
            onClick={() => {
              handleFormRegister();
            }}
          >
            {!registerForm ? "Inscreva-se" : "Entre"}
          </button>
        </div>
      </div>
    </div>
  );
}
