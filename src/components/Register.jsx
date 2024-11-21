import React from 'react';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';
import { dots, gradient, roboface } from '../assets';

const Register = () => {
  return (
      <div>
      <Header />
      <Section crosses className="relative w-full h-screen mx-auto">
      <div class="relative h-full w-full"><div class="absolute bottom-0 left-[-15%] right-0 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(145,94,255,.15),rgba(255,255,255,0))]"></div></div>
        {/* Kaggle Section */}
        <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff] border-2 border-white shadow-neon" />
            <div className="w-1 sm:h-80 rounded-full bg-gradient-to-b from-[#915eff]" />
          </div>
          <div>
            <h1 className="font-black text-white lg:text-[80px] mt-3 mb-6 sm:text-center xs:text-[50px] text-4xl sm:text-5xl lg:leading-[98px]">
              Welcome to <span className="text-[#915eff]">Kaggle 2024</span>
            </h1>
            <p className="text-[#dfd9ff] lg:text-[25px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
              Join us for a very exciting Kaggle event on Xth December, 2024.
            </p>
            <a
              href="https://www.google.com"
              className="lg:text-[25px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-[#915bff] underline italic hover:text-[#2a31fa]"
            >
              Register HERE.
            </a>
            <div className="mt-8 flex flex-col items-center justify-center">
              <img
                src={roboface} // Replace roboface with your imported image or URL
                alt="Event Poster"
                className="w-full max-w-[500px] rounded-lg shadow-lg"
              />
            </div>

          </div>
          
        </div>
        
        

        {/* <div class="relative h-full w-full"><div class="absolute bottom-0 left-[-15%] right-0 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,16,159,.15),rgba(255,16,159,0))]"></div></div> */}
        {/* Next Event Registration
        <div className="sm:px-16 px-6 absolute inset-0 top-[450px] max-w-7xl mx-auto flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#ff109f] border-2 border-white shadow-neon" />
            <div className="w-1 sm:h-80 rounded-full bg-gradient-to-b from-[#ff109f]" />
          </div>
          <div>
            <h1 className="font-black text-white lg:text-[80px] mt-3 mb-6 sm:text-center xs:text-[50px] text-4xl sm:text-5xl lg:leading-[98px]">
              Welcome to <span className="text-[#ff109f]">Kaggle 2024</span>
            </h1>
            <p className="text-[#dfd9ff] lg:text-[25px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
              Join us for a very exciting Kaggle event on Xth December, 2024.
            </p>
            <a
              href="https://www.google.com"
              className="lg:text-[25px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-[#ff109f] underline italic hover:text-[#2a31fa]"
            >
              Register HERE.
            </a>
          </div>
        </div> */}
      </Section>
      <Footer />
    </div>
  );
};

export default Register;
