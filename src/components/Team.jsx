import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  // Split the benefits array into two halves
  const firstHalf = benefits.slice(0, 6);
  const secondHalf = benefits.slice(6, 12);

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="AICVS TEAM"
        />

        {/* First set of cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {firstHalf.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-w-xs w-[12rem] md:w-[20rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[20rem] p-[1.5rem] pointer-events-none">
                <h5 className="h5 text-lg mb-2">{item.title}</h5>
                <p className="body-2 text-sm mb-3 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  {/* Optional content */}
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={250}
                      height={220}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>

        {/* Heading for the previous year team leads */}
        <Heading
          className="md:max-w-md lg:max-w-2xl mt-8"
          title="Previous Year Team Leads"
        />

        {/* Second set of cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {secondHalf.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-w-xs w-[12rem] md:w-[20rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[20rem] p-[1.5rem] pointer-events-none">
                <h5 className="h5 text-lg mb-2">{item.title}</h5>
                <p className="body-2 text-sm mb-3 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  {/* Optional content */}
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={250}
                      height={220}
                      alt={item.title}
                      className="w-full h-full object-cover"
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

export default Benefits;
