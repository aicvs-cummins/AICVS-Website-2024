import React from "react";

const ContactUs = () => {
  return (
    <section className="py-10 px-5  text-white relative z-10"> {/* Removed opacity */}
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center md:text-left">Contact Us</h2>

        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2">
          <div>
            <h3 className="text-xl md:text-1xl font-semibold mb-2">Address</h3>
            <p className="text-base md:text-sm">
              MKSSS’s Cummins College of Engineering for Women, <br />
              Karvenagar, Pune – 411052
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-1xl font-semibold mb-2">Contact Information</h3>
            <p className="text-base md:text-sm">
              <strong>Email:</strong> <a href="mailto:principal@cumminscollege.org" className="text-white underline">principal@cumminscollege.org</a>
            </p>
            <p className="text-base md:text-sm">
              <strong>College Contact No:</strong> 
              <a href="tel:+912025311000" className="text-white underline"> 020-25311000</a>, 
              <a href="tel:+912025477211" className="text-white underline"> 25477211</a>
            </p>
            <p className="text-base md:text-sm">
              <strong>Fax No:</strong> 25311499
            </p>
            <p className="text-base md:text-sm">
              <strong>College Email:</strong> 
              <a href="mailto:administrator@cumminscollege.in" className="text-white underline">administrator@cumminscollege.in</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-1xl font-semibold mb-2">Office Timings</h3>
            <p className="text-base md:text-sm">
              9:30 AM to 5:15 PM <br />
              2nd & 4th Saturday Holiday
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
