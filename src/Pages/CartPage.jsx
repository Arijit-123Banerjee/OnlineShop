import React, { useContext, useEffect, useState } from "react";
import { shoesContext } from "../Context/ShoeContext";
import { Link, useParams } from "react-router-dom";
import EMPTYCART from "../assets/EmptyCart.jpg";
import { motion } from "framer-motion";

const CartPage = () => {
  const {
    cartItems,
    setCartItems,
    setCartCount,
    calculateCartSum,
    setCalculateSum,
  } = useContext(shoesContext);
  const [selectedValue, setSelectedValue] = useState("01");

  const calculateSum = () => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += Math.abs(Number(item.price));
    });

    if (selectedValue === "02") {
      sum *= 2;
    } else if (selectedValue === "03") {
      sum *= 3;
    }

    setCalculateSum(sum);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleRemoveItem = (id) => {
    const filteredCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredCartItems);
    setCartCount((previous) => previous - 1);
  };

  useEffect(() => {
    calculateSum();
  }, [cartItems, selectedValue]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {cartItems.length < 1 ? (
          <div className="h-screen w-full flex flex-col justify-center items-center">
            <p className="text-2xl tracking-widest">No item Added</p>
            <img
              src={EMPTYCART}
              alt="emptyCartIMG"
              className="size-80 max-md:size-60"
            />
          </div>
        ) : (
          <div className="container mx-auto mt-10">
            <div className="sm:flex shadow-md my-10">
              <div className="w-full sm:w-3/4 bg-white px-10 py-10">
                <div className="flex justify-between border-b pb-8">
                  <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                  <h2 className="font-semibold text-2xl">
                    {cartItems.length} Item
                  </h2>
                </div>

                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50"
                  >
                    <div className="md:w-4/12 2xl:w-1/4 w-full">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full object-center object-cover md:block hidden"
                      />
                    </div>
                    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                      <div className="flex items-center justify-between w-full">
                        <p className="text-base font-black leading-none text-gray-800">
                          {item.name}
                        </p>
                        <select
                          value={selectedValue}
                          onChange={handleChange}
                          aria-label="Select quantity"
                          className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                        >
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                        </select>
                      </div>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Height: {item.height}
                      </p>
                      <p className="text-xs leading-3 text-gray-600 py-4">
                        Color: {item.color}
                      </p>

                      <div className="flex items-center justify-between pt-5">
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                        >
                          Remove
                        </button>
                        <p className="text-base font-black leading-none text-gray-800">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                <a
                  href="#"
                  className="flex font-semibold text-indigo-600 text-sm mt-10"
                >
                  <svg
                    className="fill-current mr-2 text-indigo-600 w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  <Link to={"/shop"}> Continue Shopping</Link>
                </a>
              </div>

              {/* Summary Section */}
              <div className="w-full sm:w-1/4 md:w-1/2 px-8 py-10" id="summary">
                <h1 className="font-semibold text-2xl border-b pb-8">
                  Order Summary
                </h1>
                <div className="border-t mt-8">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span className="text-green-500 font-bold">{`$${calculateCartSum}`}</span>
                  </div>
                  <Link to={"/checkout"}>
                    <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default CartPage;
