import authorImage from "../../images/author_james.jpg"

export default function About() {
  return (
    <section className="about">
      <img src={authorImage} className="about__image"/>
      <div className="about__wrapper">
        <h2 className="about__title">Sobre o autor</h2>
        <p className="about__paragraph">Olá! Sou James, aspirante a desenvolvedor full-stack. Prazer em conhecê-lo(a)!
          Tenho conhecimentos tanto em front-end: JavaScript e React, quanto em back-end: Node e Express.
          E também, é claro, nas ferramentas auxiliares de um bom contrutor de código como: NPM, GIT, Jest, Figma, SQL, MongoDB etc.
        </p>
        <p className="about__paragraph">Neste projeto, cujo intuito, por qualquer critério, é permitir o usuário reunir notícias num só lugar, me norteei pela NewsAPI.
          Em maior medida, o conhecimento aqui aplicado foi assimilado no curso de Engenharia de Software da Tripleten.
          Não obstante, o desenvolvimento se deu por base nas boas práticas de programação utizadas pelo mercado, também lá aprendidas.
          Ademais, caso queira entrar em contato, as informações estão no rodapé da página. Obrigado!
        </p>
      </div>
    </section>
  );
}