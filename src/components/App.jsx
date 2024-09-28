import ButtonGradient from "./assets/svg/ButtonGradient";
import AboutUs from "./components/AboutUs";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <AboutUs /> 
        <Team />

        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
