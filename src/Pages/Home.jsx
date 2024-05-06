import React from "react";
import bgStyleShade from "../assets/homepage-bg-background.jpg";
import shoe from "../assets/sports-shoe4.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Crousel from "../Components/Crousel";
import AirProX4 from "../Components/AirProX4";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center  ">
        <div className="relative flex justify-center items-center">
          <h1 className="text-white z-10 absolute top-20 text-[9rem] max-md:text-7xl font-bold drop-shadow-lg text-shadow-blue">
            AIRPRO X3
          </h1>
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${bgStyleShade})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <img src={shoe} alt="Shoe" className="z-10" />
        </div>
        <NavLink
          to={"/"}
          className="z-10 shadow-2xl shadow-gray-600 p-3  w-60 rounded-full self-center flex justify-center items-center gap-2 hover:bg-stone-700 duration-300 hover:text-white max-md:mb-10 mb-10 "
        >
          <span>
            <FaArrowRightLong />
          </span>
          SHOP COLLECTION
        </NavLink>
      </div>

      {/* Shoes Section Crousel */}
      <section className="h-screen flex items-center mt-32 flex-col  ">
        <div className="gap-3">
          <h1 className="text-8xl font-bold font-work-sans text-stone-700 max-md:text-4xl">
            UNBELIEVABLE
          </h1>
          <p className="text-4xl text-center font-bold text-stone-700 max-md:text-xl">
            SPEED. COMFORT.
          </p>
        </div>
        <Crousel />
      </section>

      <section className=" bg-gray-200 mt-24">
        <AirProX4 />
      </section>
    </>
  );
};

export default Home;
