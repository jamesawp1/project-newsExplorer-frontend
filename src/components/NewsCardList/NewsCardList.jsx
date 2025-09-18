import NewsCard from "./NewsCard/NewsCard";

export default function NewsCardList() {
  return (
    <section className="news">
      <div className="news__wrapper">
        <h2 className="news__title">Procurar resultados</h2>
        <ul className="news__gallery">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </ul>
        <button className="news__button">Mostrar mais</button>
      </div>
    </section>
  );
}
