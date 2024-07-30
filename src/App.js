import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
import Qualifications from "./Components/Qualifications/Qualifications";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualifications />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
