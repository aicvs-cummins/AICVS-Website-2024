import React from "react";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { yashita } from "../assets";

const Team = (props) => {
  // Split the benefits array into two halves
  const firstHalf = props.team.slice(0, 6);
  const secondHalf = props.team.slice(6, 12);

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md text-center lg:max-w-2xl font-semibold"
          title={props.name}
        />

        {/* First set of cards */}
        <div className="flex flex-wrap justify-center gap-10 mb-6">
          {firstHalf.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-w-full w-[12rem] md:w-[20rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
                backgroundColor: `purple`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[20rem] p-[1.5rem] pointer-events-none">
                <h5 className="h5 text-lg mb-2">{item.title}</h5>
                <p className="body-2 block text-sm mb-3 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  {/* Optional content */}
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className={`absolute inset-0 transition-opacity hover:opacity-0`}>
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={2000}
                      height={260}
                      alt={item.title}
                      className="min-w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Team;
