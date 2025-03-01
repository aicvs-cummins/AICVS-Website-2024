import { useRef } from "react";
import { robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";

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
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <h1 className="h1 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-cyan-500 to-pink-500 animate-[bg-scroll_3s_linear_infinite]">
  Artificial Intelligence and Computer Vision Society
        </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
         We are the Artificial Intelligence & Computer Vision Society of Cummins College of Engineering.Our Society aims to help students in shaping their career in AI/ML, through projects,competitions & internships.
          </p>
          <Button href="" white>
            Upcoming Events
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

               

            

              </div>
            </div>

            <Gradient />
          </div>
        

          <BackgroundCircles />
        </div>

       
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
