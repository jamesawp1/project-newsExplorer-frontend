import { useState } from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import About from "../About/About";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page">
        <div className="page__wrapper">
          <Header/>
          <Main/>
        </div>
        <About/>
        <Footer/>
      </div>
    </>
  )
}

export default App
