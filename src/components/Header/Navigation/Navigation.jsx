export default function Navigation() {
  return (
    <div className="header__navigation">
      <h1 className="header__navigation_title">News Explorer</h1>
      <div className="header__navigation_wrapper">
        <button className="header__navigation_button">Início</button>
        <button
          className="header__navigation_button header__navigation_button-outline"
          disabled
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
