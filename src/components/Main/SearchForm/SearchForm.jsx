import { useState } from "react";

export default function SearchForm(props) {
  const { onNews } = props;
  const [keyword, setKeyword] = useState("");

  const handleChange = (evt) => {
    const { value } = evt.target;
    setKeyword(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (keyword.length >= 2) {
      onNews(keyword);
    }
  };
  return (
    <form className="header__searchForm" onSubmit={handleSubmit}>
      <input
        className="header__searchForm_input"
        placeholder="Inserir tema"
        type="text"
        minLength="2"
        onChange={handleChange}
        required
      />
      <button className="header__searchForm_button" type="submit">
        Procurar
      </button>
    </form>
  );
}
