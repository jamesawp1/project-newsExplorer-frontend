import NewsCard from "./NewsCard/NewsCard";

export default function NewsCardList(props) {
  const { news } = props;

  return (
    <>
      {news && (
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
    </>
  );
}
