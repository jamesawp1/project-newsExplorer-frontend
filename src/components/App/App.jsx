import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import { thirdPartyAPi } from "../../utils/ThirdPartyAPi";

function App() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  const handleGetNews = (param) => {
    setIsLoading(true);
    (async () => {
      await thirdPartyAPi
        .getNews(param)
        .then((newData) => {
          setNews(newData.articles);
          setIsSearched(true);
          console.log(news);
        })
        .catch(() => {
          setIsSearched(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    })();
  };

  return (
    <>
      <div className="page">
        <div className="page__wrapper">
          <Header />
          <Main onNews={handleGetNews} />
        </div>
        <NewsCardList
          news={news}
          isLoading={isLoading}
          isSearched={isSearched}
        />
        <About />
        <Footer />
        <div className="div" />
      </div>
    </>
  );
}

export default App;
