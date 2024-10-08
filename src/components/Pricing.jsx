import React from "react";
import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <div>
      <Header /> {/* Add the Header component */}<br /><br /><br /><br />
      <Section className="overflow-hidden" id="pricing">
        <div className="container relative z-2">
          <Heading tag="Get started with Brainwave" title="Events" />

          <div className="relative">
            <PricingList />
            <LeftLine />
            <RightLine />
          </div>
        </div>
      </Section>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default Pricing;