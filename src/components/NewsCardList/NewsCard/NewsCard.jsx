import image from "../../../images/image_05.png";

export default function NewsCard() {
  return (
    <li className="news__card">
      <img className="news__card-image" src={image} />
      <div className="news__card-wrapper_text">
        <p className="news__card-text_data">19 de outubro de 2020</p>
        <h3 className="news__card-text_title">
          Fotos nostálgicas de turistas no parques nacionais dos EUA
        </h3>
        <p className="news__card-text_paragraph">
          Uri Løvevild Golman e Helle Løvevild Golman são exploradores da
          National Geographic e fotógrafos de conservação que acabaram de
          concluir um projeto e livro que consideram uma... Uri Løvevild Golman
          e Helle Løvevild Golman são exploradores da National Geographic e
          fotógrafos de conservação que acabaram de concluir um projeto e livro
          que consideram uma...
        </p>
        <p className="news__card-text_source">national geographic</p>
      </div>
    </li>
  );
}
