import React from 'react';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';
import { roboface } from '../assets';

const Register = () => {
  const prekaggle = import.meta.env.VITE_PRE_KAGGLE_LINK;
  const kaggle = import.meta.env.VITE_KAGGLE_LINK;

  return (
    <div>
      <Header />
      <Section crosses className="relative w-full h-screen mx-auto overflow-x-hidden">
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 left-[-15%] right-0 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(145,94,255,.15),rgba(255,255,255,0))]"></div>
        </div>

        {/* Kaggle Section */}
        <div className="sm:px-10 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff] border-2 border-white shadow-neon" />
            <div className="w-1 sm:h-80 h-[45rem] rounded-full bg-gradient-to-b from-[#915eff]" />
          </div>
          <div>
            <h1 className="font-black text-white lg:text-[80px] mt-3 mb-6 sm:text-center xs:text-[50px] text-4xl sm:text-5xl lg:leading-[98px]">
              Welcome to <span className="text-[#915eff]">Kaggle 2024</span>
            </h1>
            <p className="text-[#dfd9ff] lg:text-[25px] sm:text-[26px] text-[20px] lg:leading-[40px] mt-2 text-white-100 w-full">
                🌟 Get Ready for the Kaggle Challenge! 🌟 <br />
                ✨ Pre-Kaggle: Join us on December 7, 2024, for an exciting warm-up! 
                <br />
                ✨ Kaggle: The main event is coming soon! Stay tuned and join Pre-Kaggle to uncover! 
                <br />
                🔗 Pre-Kaggle: {" "}<a
                  href={prekaggle}
                  className="lg:text-[25px] sm:text-[26px] text-[20px] lg:leading-[40px] text-[#915bff] underline italic hover:text-[#2a31fa]"
                >
                  Join Here
                </a>
                 <br />
                🔗 Kaggle: {" "}  <a
                  href={kaggle}
                  className="lg:text-[25px] sm:text-[26px] text-[20px] lg:leading-[40px] text-[#915bff] underline italic hover:text-[#2a31fa]"
                >
                  Join here
                </a>
            </p>

            {/* Event Poster */}
            <div className="mt-20 flex flex-col items-center justify-center">
              <img
                src={roboface}
                alt="Event Poster"
                className="w-full max-w-[500px] rounded-lg sm:shadow-glow"
              />
            </div>
          </div>
        </div>
      </Section>

      <div className="h-40"></div> {/* Adding some space below image */}
      <Footer />
    </div>
  );
};

export default Register;
