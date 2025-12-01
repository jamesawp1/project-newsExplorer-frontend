import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import { thirdPartyAPi } from "../../utils/ThirdPartyAPi";

function App() {
  const [news, setNews] = useState(null);

  const handleGetNews = (param) => {
    (async () => {
      await thirdPartyAPi.getNews(param).then((newData) => {
        setNews(newData.articles);
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
        <NewsCardList news={news} />
        <About />
        <Footer />
        <div className="div" />
      </div>
    </>
  );
}

export default App;
