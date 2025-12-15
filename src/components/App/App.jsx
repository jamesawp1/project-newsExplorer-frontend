import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import About from "../About/About";
import { thirdPartyAPi } from "../../utils/ThirdPartyAPi";

function App() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [isCatchError, setIsCatchError] = useState(false);

  const handleGetNews = (param) => {
    setIsLoading(true);
    (async () => {
      await thirdPartyAPi
        .getNews(param)
        .then((newData) => {
          setNews(newData.articles);
          setIsSearched(true);
          setIsCatchError(false);
        })
        .catch(() => {
          setIsCatchError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    })();
  };

  return (
    <>
      <div className="page">
        <Header onNews={handleGetNews} />
        <Main
          news={news}
          isLoading={isLoading}
          isSearched={isSearched}
          isCatchError={isCatchError}
        />
        <About />
        <Footer />
        <div className="div" />
      </div>
    </>
  );
}

export default App;
