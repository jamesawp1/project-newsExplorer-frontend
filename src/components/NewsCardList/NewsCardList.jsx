import NewsCard from "./NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";

export default function NewsCardList(props) {
  const { news, isLoading, isSearched } = props;

  return (
    <>
      {news && !isLoading && isSearched && (
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

      {<Preloader />}
    </>
  );
}
