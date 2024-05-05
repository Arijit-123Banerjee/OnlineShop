import React from "react";
import { useContext } from "react";
import { shoesContext } from "../Context/ShoeContext";

const Shop = () => {
  const { dataitem } = useContext(shoesContext);
  return (
    <div className="h-screen">
      <div className="flex justify-between pl-20 pr-20">
        <button>filter</button>
        <button>sort</button>
      </div>
      <div>
        <ul className="flex m-20 justify-center items-center max-sm:flex-col max-md:flex-col ">
          {dataitem.map((item) => {
            return (
              <li className="flex flex-col justify-center items-center bg-gray-100 m-3 rounded-xl">
                <img
                  src={item.image}
                  className="hover:scale-110 cursor-pointer duration-500"
                />
                <div className="font-work-sans">
                  <h1 className="font-bold ">{item.name}</h1>
                  <h2 className="text-center font-bold text-green-500">
                    {item.price}
                  </h2>
                </div>
                <button className="border-2 border-gray-200 rounded-b-xl w-full p-2 hover:bg-gray-300 duration-200">
                  Add to Cart
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Shop;
