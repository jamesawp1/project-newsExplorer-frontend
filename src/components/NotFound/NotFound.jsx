import notFoundImg from "../../images/not-found.png";

export default function NotFound(props) {
  const { title, desc } = props;

  return (
    <div className="notFound">
      <img className="notFound__image" src={notFoundImg} />
      <h4 className="notFound__title">{title}</h4>
      <p className="notFound__description">{desc}</p>
    </div>
  );
}
