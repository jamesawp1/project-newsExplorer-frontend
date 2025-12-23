import closeButton from "../../images/close-button.svg";

export default function Popup(props) {
  const { onClose } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="popup">
      <div className="popup__container">
        <button className="popup__close-button">
          <img src={closeButton} className="popup__close-button-img" />
        </button>
        <h3 className="popup__title">Entrar</h3>
        <form className="popup__form" onSubmit={handleSubmit}>
          <label className="popup__label">
            E-mail
            <input className="popup__input" placeholder="Insira o e-mail" />
          </label>
          <label className="popup__label">
            Senha
            <input className="popup__input" placeholder="Insira a senha" />
          </label>
          <button className="popup__button">Entrar</button>
        </form>
        <p className="popup__subtitle">
          <span className="popup__subtitle_span">ou</span> Inscreva-se
        </p>
      </div>
    </div>
  );
}
