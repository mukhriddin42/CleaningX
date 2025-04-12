import About from "./components/about/About"
import Articles from "./components/articles/Articles"
import Contactus from "./components/contactus/Contactus"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Sanitization from "./components/sanitization/Sanitization"
import Services from "./components/services/Services"

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Sanitization />
      <Articles />
      <Contactus />
      <Footer />
    </>
  )
}

export default App
