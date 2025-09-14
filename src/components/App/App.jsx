import { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import About from '../About/About'
import NewsCardList from '../NewsCardList/NewsCardList'

function App() {
  const [news, setNews] = useState(null)

  return (
    <>
      <div className="page">
        <div className="page__wrapper">
          <Header />
          <Main />
        </div>
        <NewsCardList />
        <About />
        <Footer />
        <div className="div" />
      </div>
    </>
  )
}

export default App
