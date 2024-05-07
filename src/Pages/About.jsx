import React from "react";

const About = () => {
  return (
    <>
      <div>
        <section
          id="about"
          className="relative block px-6 py-10 md:py-20 md:px-10"
        >
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="text-black my-3 flex items-center justify-center font-medium uppercase tracking-wider">
              About Us
            </span>
            <h2 className="block w-full  sm:text-4xl">
              Elevate Your Style with Our Shoe Collection
            </h2>
            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
              Discover the perfect pair of shoes that matches your personality
              and lifestyle. Our curated collection offers comfort, style, and
              quality craftsmanship for every step of your journey.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
