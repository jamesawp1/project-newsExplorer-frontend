import { useState } from "react";

export default function SearchForm(props) {
  const { onNews } = props;
  const [keyword, setKeyword] = useState("");

  const handleChange = (evt) => {
    const { value } = evt.target;
    setKeyword(value);
  };

  const handleSubmit = () => {
    onNews(keyword);
  };
  return (
    <div className="search-form">
      <input
        className="search-form__input"
        placeholder="Inserir tema"
        onChange={handleChange}
      />
      <button className="search-form__button" onClick={handleSubmit}>
        Procurar
      </button>
    </div>
  );
}
