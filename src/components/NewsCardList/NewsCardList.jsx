import NewsCard from "./NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

export default function NewsCardList(props) {
  const { news, isLoading, isSearched } = props;
  const notFoundMessage = [
    "Nada encontrado",
    "Desculpe, mas nada corresponde aos seus termos de pesquisa.",
  ];
  const requestErrorMessage = [
    "Erro de solicitação",
    "Desculpe, algo deu errado durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.",
  ];
  return (
    <>
      {!isLoading && isSearched && news.length > 0 && (
        <section className="news">
          <div className="news__wrapper">
            <h2 className="news__title">Procurar resultados</h2>
            <ul className="news__gallery">
              {news.slice(0, 3).map((item, index) => {
                return <NewsCard key={index} data={item} />;
              })}
            </ul>
            <button className="news__button">Mostrar mais</button>
          </div>
        </section>
      )}

      {!isLoading && isSearched && news.length === 0 && (
        <NotFound title={notFoundMessage[0]} desc={notFoundMessage[1]} />
      )}
      {!isLoading && !isSearched && news.length === 0 && (
        <NotFound
          title={requestErrorMessage[0]}
          desc={requestErrorMessage[1]}
        />
      )}

      {isLoading && <Preloader />}
    </>
  );
}
