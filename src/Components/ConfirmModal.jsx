import React, { useState } from "react";
import RightIMG from "../assets/right.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ConfirmModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ">
      <div className=" absolute inset-0 bg-black bg-opacity-80 "></div>
      <motion.div
        initial={{ y: -100 }}
        animate={{
          y: [0, -20, 0],
          transition: { duration: 4, repeat: Infinity },
        }}
      >
        <div className=" bg-green-900 rounded-lg p-8 z-50 flex max-md:h-screen max-md:w-full   flex-col justify-center items-center space-y-4 font-work-sans text-white">
          <div className="size-16 max-md:size-24  rounded-full">
            <img src={RightIMG} alt="" />
          </div>
          <h1 className="text-xl font-bold max-md:text-2xl">Order Placed</h1>
          <p className="text-center">
            Your Order will be delivered on 2.04.2050
          </p>
          <Link to={"/shop"}>
            <button className="bg-white p-3 rounded-full text-black">
              Continue Shopping
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmModal;
