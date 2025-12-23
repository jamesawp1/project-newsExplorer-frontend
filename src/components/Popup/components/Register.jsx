export default function Register(props) {
  const { onSubmit } = props;
  return (
    <form className="popup__form popup__form-register" onSubmit={onSubmit}>
      <label className="popup__label">
        E-mail
        <input className="popup__input" placeholder="Insira o e-mail" />
      </label>
      <label className="popup__label">
        Senha
        <input className="popup__input" placeholder="Insira a senha" />
      </label>
      <label className="popup__label">
        Nome de Usuário
        <input
          className="popup__input"
          placeholder="Insira seu nome de usuário"
        />
      </label>
      <button className="popup__button">Inscrever-se</button>
    </form>
  );
}
