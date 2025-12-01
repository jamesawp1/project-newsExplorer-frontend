import NewsCard from "./NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import { useState } from "react";

export default function NewsCardList(props) {
  const { news, isLoading, isSearched } = props;
  const [newsCount, setNewsCount] = useState(3);

  const handleShowMore = () => {
    setNewsCount((prev) => prev + 3);
  };

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
              {news.slice(0, newsCount).map((item, index) => {
                return <NewsCard key={index} data={item} />;
              })}
            </ul>
            {newsCount < news.length && (
              <button className="news__button" onClick={handleShowMore}>
                Mostrar mais
              </button>
            )}
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
