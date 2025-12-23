export default function Login(props) {
  const { onSubmit } = props;
  return (
    <form className="popup__form" onSubmit={onSubmit}>
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
  );
}
