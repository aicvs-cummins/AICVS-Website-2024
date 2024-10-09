import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  // Split the pricing into two groups
  const firstGroup = pricing.slice(0, 3);
  const secondGroup = pricing.slice(3, 6);

  return (
    <div>
      {/* First pricing list (First 3 items) */}
      <div className="flex gap-[1rem] max-lg:flex-wrap">
        {firstGroup.map((item) => (
          <div
            key={item.id}
            className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          >
            <h4 className="h4 mb-4">{item.title}</h4>
            <ul>
              <div className="mt-4">
                <img
                  src={item.img}
                  width={24}
                  height={24}
                  alt="Pricing box image"
                  className="w-full h-auto"
                />
              </div>
            </ul>
          </div>
        ))}
      </div>

      {/* Second pricing list (Last 3 items) */}
      <div className="flex gap-[1rem] max-lg:flex-wrap">
        {secondGroup.map((item) => (
          <div
            key={item.id}
            className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          >
            <h4 className="h4 mb-4">{item.title}</h4>
            <ul>
              <div className="mt-4">
                <img
                  src={item.img}
                  width={24}
                  height={24}
                  alt="Pricing box image"
                  className="w-full h-auto"
                />
              </div>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingList;
