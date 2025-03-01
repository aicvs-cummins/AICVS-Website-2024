import ButtonGradient from "./assets/svg/ButtonGradient";
import AboutUs from "./components/AboutUs";

import Footer from "./components/Footer";
import Blog from "./components/GradientCards";
import Header from "./components/Header";
import Hero from "./components/Hero";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <AboutUs /> 
        <Blog />    
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
