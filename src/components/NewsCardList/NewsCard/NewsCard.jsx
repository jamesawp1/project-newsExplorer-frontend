import saveIcon from "../../../images/save-icon.png";

export default function NewsCard(props) {
  const { data } = props;

  const date = new Date(data.publishedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <li className="news__card">
      <button className="news__card-button" aria-describedby="signinTooltip">
        <img
          className="news__card-button_icon"
          alt="Imagem do artigo."
          src={saveIcon}
        />
      </button>
      <div className="news__card-msg" role="signinTooltip">
        <p className="news__card-msg_txt">Sign in to save articles</p>
      </div>
      <img className="news__card-image" src={data.urlToImage} />
      <div className="news__card-wrapper_text">
        <p className="news__card-text_data">{date}</p>
        <h3 className="news__card-text_title">{data.title}</h3>
        <p className="news__card-text_paragraph">{data.description}</p>
        <p className="news__card-text_source">{data.source.name}</p>
      </div>
    </li>
  );
}
