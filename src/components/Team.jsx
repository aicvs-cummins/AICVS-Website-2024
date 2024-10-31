import React, { useState } from "react";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Team = (props) => {
  const firstHalf = props.team.slice(0, 6);
  const secondHalf = props.team.slice(6, 12);

  const [hoveredId, setHoveredId] = useState(null);
  //creating an array for the heads as their cards should not fade
  const nonFadingIds = ["1", "0", "6"];
  function handleHover(id, index) {
    // Prevent hover effect for the first two cards
    if (id !== "0" || id !== "1" || id !== "6") {
      setHoveredId(id);
    }
  }

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md text-center lg:max-w-2xl font-semibold"
          title={props.name}
        />

        {/* First set of cards */}
        <div className="flex flex-wrap justify-center gap-10 mb-6">
          {firstHalf.map((item, index) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-w-full w-[12rem] md:w-[20rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
              onMouseEnter={() => handleHover(item.id, index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="relative z-2 flex flex-col min-h-[20rem] p-[1.5rem] pointer-events-none">
                <h5
                  className={`h5 text-lg mb-2 transition-opacity duration-300 ${
                    hoveredId === item.id && !nonFadingIds.includes(item.id) ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {item.title}
                </h5>
                <p
                  className={`body-2 block text-sm mb-3 text-n-3 transition-opacity duration-300 ${
                    hoveredId === item.id &&!nonFadingIds.includes(item.id) ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {item.text}
                </p>
                <div className="flex items-center mt-auto">
                  {/* Optional content */}
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div
                  className={`absolute inset-0 transition-opacity ${
                    hoveredId === item.id && !nonFadingIds.includes(item.id) ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={250}
                      height={220}
                      alt={item.title}
                      className="min-w-full h-full object-cover"
                    />
                  )}
                </div>

                {hoveredId === item.id && !nonFadingIds.includes(item.id) && (
                  <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 text-white transition-opacity duration-500">
                    <ul>
                      {item.members &&
                        item.members.map((name, idx) => (
                          <li key={idx} className="my-1">
                            {name}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
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
