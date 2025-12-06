import Navigation from "../Header/Navigation/Navigation";
import SearchForm from "../Main/SearchForm/SearchForm";

export default function Header() {
  return (
    <header className="header">
      <Navigation />
      <div className="header__wrapper">
        <h2 className="header__subtitle">O quê está acontecendo no mundo?</h2>
        <p className="header__paragraph">
          Encontre as últimas notícias sobre qualquer tema e salve elas em sua
          conta pessoal
        </p>
        <SearchForm /*onNews={onNews}*/ />
      </div>
    </header>
  );
}
