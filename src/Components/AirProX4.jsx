import React from "react";
import airProX3IMG from "../assets/four.png";
import { NavLink } from "react-router-dom";

const AirProX4 = () => {
  return (
    <div className="flex items-center justify-center max-md:flex-col min-h-screen mb-20 overflow-hidden">
      <img src={airProX3IMG} />
      <div className="font-work-sans text-gray-800 space-y-4">
        <h2 className="text-3xl font-bold"> Limited Stock Available!</h2>
        <h1 className="text-7xl font-bold">AirPro X2</h1>
        <p className="w-96">
          Consectetur adipiscing elit elit tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo.​ Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
        <p className="space-x-2">
          <span className="line-through text-green-600">$33.00</span>
          <span className="textgre text-xl font-bold text-green-500">
            $25.00
          </span>
        </p>
        <NavLink
          to={"/"}
          className="z-10 shadow-2xl shadow-gray-600 p-3  w-60 rounded-full self-center flex justify-center items-center gap-2 hover:bg-stone-700 duration-300 hover:text-white "
        >
          <span></span>
          SHOP COLLECTION
        </NavLink>
      </div>
    </div>
  );
};

export default AirProX4;
