import { useRef } from "react";
import { curve, heroBackground, team } from "../assets";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 mx-auto text-center lg:mt-[3rem] mb-0">
          <h1 className="animate-pulse mt-3 lg:mt-0 mb-6 lg:text-8xl md:text-6xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-500 drop-shadow-neon">
           Artificial Intelligence and Computer Vision Society
              <img src={curve} className="md:inline-block hidden top-0 mt-0 left-0 max-w-52 xl:-mt-2" width={624} height={28} alt="Curve" />
          </h1>
          <p className="animate-slidein [--slidein-delay:100ms] opacity-0 lg:text-2xl text-base max-w-6xl mx-auto my-10 lg:mb-8">
         We are the Artificial Intelligence & Computer Vision Society of Cummins College of Engineering. Our Society aims to help students in shaping their career in AI/ML, through projects,competitions & internships.
          </p>
          
        </div>

        <div className="animate-bounce_slow relative mt-[30%] max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-10 p-1 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[0rem] bg-n-10 rounded-t-[0.9rem]"/>
              <div className="aspect-[33/22] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490] min-h-[200px]">
                <img
                  src={team}
                  className="w-full rounded-[0.9rem] object-contain"
                  width={1440}
                  height={1800}
                  alt="hero"
                />
              </div>
              </div>
            </div>
            
            <div className="absolute -top-[54%] left-1/2 w-[100%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
              <img 
                src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>
        

          <BackgroundCircles />
        </div>

       
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
