import image from "../../../images/image_05.png";

export default function NewsCard(props) {
  const { data } = props;

  return (
    <li className="news__card">
      <img className="news__card-image" src={data.urlToImage} />
      <div className="news__card-wrapper_text">
        <p className="news__card-text_data">{data.publishedAt}</p>
        <h3 className="news__card-text_title">{data.title}</h3>
        <p className="news__card-text_paragraph">{data.description}</p>
        <p className="news__card-text_source">{data.source.name}</p>
      </div>
    </li>
  );
}
