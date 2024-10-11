import React from "react";
import Section from "./Section";
import Header from "./Header";
import Footer from "./Footer";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import EventList from "./EventList";
import { LeftLine, RightLine } from "./design/Pricing";

const Events = () => {
  return (
    <div>
      <Header /> {/* Add the Header component */}<br /><br /><br /><br />
      <Section className="overflow-hidden" id="pricing">
        <div className="container relative z-2">
        <Heading
          className="md:max-w-md text-center lg:max-w-2xl font-semibold"
          title="Events"
        />

          <div className="relative">
            <EventList />
            <LeftLine />
            <RightLine />
          </div>
        </div>
      </Section>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default Events;