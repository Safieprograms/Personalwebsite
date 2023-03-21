
import Header from "./components/Header";
import Banner from "./components/Banner";
//import Description from "./components/Description";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
//import Services from "./components/Services";
//import Social from "./components/Social";
//import Cv from "./components/Cv";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



const App = () => {
  return (
    <div className="app">
      <Header />
        <main>
          <Banner />
          <Projects />
          <Resume />
          <Contact />
        </main>
      <Footer />
    </div>
  );
}

export default App;