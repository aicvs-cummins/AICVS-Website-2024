import React from "react";
import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">

<div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <div className="flex flex-col text-center sm:text-left">
          <p className="caption text-n-4 lg:block">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
          <p className="text-sm text-n-4 mt-2">
            Artificial Intelligence and Computer Vision Society (AICVS), 
            <br />Cummins College of Engineering for Women, Karvenagar, Pune.
          </p>
          <p className="text-base md:text-sm">
                <a href="mailto:aicvs.cummins@cumminscollege.in" className="underline text-n-4"> aicvs.cummins@cumminscollege.org</a>
              </p>
        </div>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              rel="noopener noreferrer"
            >
              <img src={item.iconUrl} width={20} height={20} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>

      {/* Contact Information Section */}
      <section className="py-10 px-5 relative z-10">
        <div className="container mx-auto">
          {/* Contact Information - Left aligned */}
          <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-1 text-n-4">
            <div>
              <h3 className="text-xl md:text-1xl font-semibold mb-2">Contact Information</h3>
              <p className="text-base md:text-sm">
                <strong>Email:</strong> 
                <a href="mailto:principal@cumminscollege.org" className="underline text-n-4"> principal@cumminscollege.org</a>
              </p>
              <p className="text-base md:text-sm">
                <strong>College Contact No:</strong> 
                <a href="tel:+912025311000" className="underline text-n-4"> 020-25311000</a>, 
                <a href="tel:+912025477211" className="underline text-n-4"> 25477211</a>
              </p>
              <p className="text-base md:text-sm">
                <strong>Fax No:</strong> 25311499
              </p>
              <p className="text-base md:text-sm">
                <strong>College Email:</strong> 
                <a href="mailto:administrator@cumminscollege.in" className="underline text-n-4"> administrator@cumminscollege.in</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Information */}
      
    </Section>
  );
};

export default Footer;


