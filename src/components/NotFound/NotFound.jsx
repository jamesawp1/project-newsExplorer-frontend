import notFoundImg from "../../images/not-found.png";

export default function NotFound() {
  return (
    <div className="notFound">
      <img className="notFound__image" src={notFoundImg} />
      <h4 className="notFound__title">Nada encontrado</h4>
      <p className="notFound__description">
        Desculpe, mas nada corresponde aos seus termos de pesquisa.
      </p>
    </div>
  );
}
