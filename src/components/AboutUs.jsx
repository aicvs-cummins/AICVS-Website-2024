import React from 'react';
import { smallSphere, waveSphere } from '../assets';
import Section from "./Section";

const AboutUs = () => {
    return (
        <Section 
        className="pt-[12rem] -mt-[5.25rem] py-10 px-5 text-white relative z-10"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
        >
            <div className="container animate-slidein300 lg:ml-[3rem] max-w-4xl bg-n-800 p-8 rounded-lg shadow-lg mb-5">
                <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] rounded-full 2xl:h-80 2xl:w-80 z-0 lg:h-52 lg:w-52  absolute 2xl:top-[20%] right-3 transform 2xl:-translate-x-1/4 xl:-translate-x-1/2 h-0 w-0">
                    <div className="hidden 2xl:h-[300px] 2xl:w-[300px] xl:block xl:h-[200px] xl:w-[200px]  relative 2xl:left-0 2xl:top-0 left-[12%] top-[30%]">
                        <img
                            src={smallSphere}
                        />
                    </div>
                </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center lg:text-left">About Us</h2>
                
                <div className="mb-8">
                    <p className="lg:text-3xl text-lg mb-5 font-light text-justify">
                        Welcome to the <strong>Artificial Intelligence and Computer Vision Society, AICVS</strong>! 
                        As Artificial Intelligence is revolutionizing the tech landscape, we aim to provide a platform 
                        for students to explore this exciting field. Our society is dedicated to imparting knowledge and 
                        expertise in AI and Computer Vision, making these valuable skills accessible to all.
                    </p>
                </div>
            </div>
                
                {/* AICVS Vision */}
            <div className="container lg:mr-[3rem] max-w-4xl bg-n-800 p-8 rounded-lg shadow-lg">
                <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] rounded-full 2xl:h-80 2xl:w-80 lg:h-52 lg:w-52 z-0 absolute 2xl:top-[65%] left-3 transform xl:translate-x-1/4 h-0 w-0">
                    <div className="hidden 2xl:h-[300px] 2xl:w-[300px] xl:block xl:h-[200px] xl:w-[200px]  relative 2xl:left-0 2xl:top-0 left-[12%] top-[30%]">
                        <img
                            src={waveSphere}
                            height={600}
                            width={600}
                        />
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center lg:text-right">AICVS Vision</h2>
                    <p className="text-lg lg:text-3xl text-justify">
                    At AICVS, our vision is to foster a vibrant learning community where students explore, innovate, and excel in the fields of Artificial Intelligence (AI) and Machine Learning (ML). We aim to bridge the gap between theoretical knowledge and real-world applications by providing hands-on experiences, mentorship, and collaborative opportunities.
                    </p>
                </div>

            </div>
        </Section>
    );
};

export default AboutUs;
