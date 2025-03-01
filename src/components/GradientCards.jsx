import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { git } from "../assets";
import Header from "./Header";

const positions = [
  { x: "-40%", y: "10%", scale: 0.9, zIndex: 1, rotateY: 15 },
  { x: "0%", y: "0%", scale: 1.1, zIndex: 3, rotateY: 0 },
  { x: "40%", y: "10%", scale: 0.9, zIndex: 1, rotateY: -15 },
];

const GradientCard = ({ gradient, index, currentIndex, content },style={ fontFamily: "'Sigmar One', cursive" }) => {
  const positionIndex = (index - currentIndex + 3) % 3;

  return (
    <motion.div
      className="absolute h-[550px] w-[700px] rounded-[20px] overflow-hidden shadow-xl"
      animate={positions[positionIndex]}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 rounded-[20px] blur-[16px]" style={{ background: gradient }}></div>
      <div className="absolute inset-0 rounded-[20px]" style={{ background: gradient }}></div>

      <div className="absolute inset-[6px] rounded-[16px] bg-[rgba(0,0,0,0.75)] p-8 z-10 flex flex-col text-white">
        {content}
      </div>
    </motion.div>
  );
};

const GradientCards = () => {
  const gradients = [
    "linear-gradient(45deg, #ffbc00, #ff0058)", // YouTube
    "linear-gradient(45deg, #03a9f4, #ff0058)", // GitHub
    "linear-gradient(45deg, #4dff03, #00d0ff)", // Medium
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    stopAutoRotate();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    stopAutoRotate();
  };

  const startAutoRotate = () => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
      }, 5000);
    }
  };

  const stopAutoRotate = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsPaused(true);
  };

  useEffect(() => {
    startAutoRotate();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen bg-[#1d031f] relative">
      <Header />
      <div className="flex items-center justify-center relative h-[600px] mt-20">
        <button className="absolute left-10 text-white bg-black p-2 rounded-full shadow-lg z-10" onClick={prevSlide}>
          <ChevronLeft size={36} />
        </button>

        <div className="relative flex items-center justify-center w-[700px] h-[550px]">
          {gradients.map((gradient, index) => (
            <GradientCard
              key={index}
              gradient={gradient}
              index={index}
              currentIndex={currentIndex}
              content={
                index === 0 ? ( // YouTube Card
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <h2 style={{ fontFamily: "'Sigmar One', cursive" }}  className="text-5xl font-bold">YouTube</h2>
                      <img
                        src="https://www.freeiconspng.com/uploads/hd-youtube-logo-png-transparent-background-20.png"
                        alt="YouTube Logo"
                        className="w-16 h-16"
                      />
                    </div>
                    <div className="w-full mt-4 flex justify-center">
                      <iframe
                        width="90%"
                        height="400"
                        className="rounded-[16px] shadow-lg"
                        src="https://www.youtube.com/embed/djRXu4rc6MQ?enablejsapi=1"
                        title="YouTube Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onPlay={() => stopAutoRotate()}
                        onPause={() => setIsPaused(false)}
                      ></iframe>
                    </div>
                  </div>
                ) : index === 1 ? ( // GitHub Card
                  <div className="w-full flex flex-col items-center">
                    <div className="w-full flex justify-between items-center">
                      <h2 style={{ fontFamily: "'Sigmar One', cursive" }} className="text-5xl font-bold">GitHub</h2>
                      <img
                        src={git}
                        alt="GitHub Logo"
                        className="w-16 h-16"
                      />
                    </div>
                    <img
                      src="https://ichef.bbci.co.uk/news/1024/branded_bbc/14202/production/_108243428_gettyimages-871148930.jpg"
                      alt="GitHub Image"
                      className="w-5/6 h-[300px] object-cover rounded-lg mt-4 shadow-lg"
                    />
                    <p className="mt-4 text-center text-lg">Explore our projects and contributions on GitHub.</p>
                    <a
                      href="https://github.com/aicvs-cummins/AI-ML-Roadmap"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                      Visit Our GitHub
                    </a>
                  </div>
                ) : ( // Medium Card
                  <div className="w-full flex flex-col items-center">
                    <div className="w-full flex justify-between items-center">
                      <h2 style={{ fontFamily: "'Sigmar One', cursive" }} className="text-5xl font-bold">Medium</h2>
                      <img
                        src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png"
                        alt="Medium Logo"
                        className="w-16 h-16"
                      />
                    </div>
                    <img
                      src="https://th.bing.com/th/id/OIP.vpk0QN6gR2_ruPRYO5kKoAHaE8?rs=1&pid=ImgDetMain"
                      alt="Medium Image"
                      className="w-5/6 h-[300px] object-cover rounded-lg mt-4 shadow-lg"
                    />
                    <p className="mt-4 text-center text-lg">Read our latest tech blogs and articles on Medium.</p>
                    <a
                      href="https://medium.com/@aicvs.cummins"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                      Read Our Blogs
                    </a>
                  </div>
                )
              }
            />
          ))}
        </div>

        <button className="absolute right-10 text-white bg-black p-2 rounded-full shadow-lg z-10" onClick={nextSlide}>
          <ChevronRight size={36} />
        </button>
      </div>
    
    </div>
  );
};

export default GradientCards;
