import SearchForm from "./SearchForm/SearchForm";

export default function Main(props) {
  const { onNews } = props;
  return (
    <main className="main">
      <section className="converter">
        <h2 className="converter__title">
          O quê está
          <br /> acontecendo no mundo?
        </h2>
        <p className="converter__subtitle">
          Encontre as últimas notícias sobre qualquer tema e salve elas em sua
          conta pessoal
        </p>
        <SearchForm onNews={onNews} />
      </section>
    </main>
  );
}
