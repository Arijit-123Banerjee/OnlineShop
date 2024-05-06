import React, { useContext } from "react";
import { shoesContext } from "../Context/ShoeContext";
import PhonePayIMG from "../assets/PhonePe.png";
import Card from "../assets/Card.png";
import { Link } from "react-router-dom";
const Payment = () => {
  const { calculateCartSum } = useContext(shoesContext);
  const { cartItems } = useContext(shoesContext);

  return (
    <>
      <div class="font-[sans-serif] bg-white p-4">
        <div class="lg:max-w-7xl max-w-xl mx-auto">
          <div class="grid lg:grid-cols-3 gap-10">
            <div class="lg:col-span-2 max-lg:order-1">
              <form class="mt-16 max-w-lg">
                <h2 class="text-2xl font-extrabold text-[#333]">
                  Payment method
                </h2>
                <div className="w-96 mt-10 border border-gray-300 rounded-md p-4">
                  <label className="flex items-center space-x-4">
                    <input type="radio" name="paymentOption" value="phonepay" />
                    <img
                      src={PhonePayIMG}
                      alt="PhonePay"
                      className="w-6 h-6    "
                    />
                    <a href="phonepe://" target="_blank">
                      <span className="text-sm">PhonePe</span>
                    </a>
                  </label>
                  <label className="flex items-center space-x-4">
                    <input type="radio" name="paymentOption" value="card" />
                    <img src={Card} alt="Card" className="w-6 h-6" />
                    <span className="text-sm">Card</span>
                  </label>
                </div>

                <div class="flex flex-wrap gap-4 mt-8">
                  <Link to={"/checkout"}>
                    <button
                      type="button"
                      class="min-w-[150px] px-6 py-3.5 text-sm bg-gray-100 text-[#333] rounded-md hover:bg-gray-200"
                    >
                      Back
                    </button>
                  </Link>
                  <button
                    type="button"
                    class="min-w-[150px] px-6 py-3.5 text-sm bg-[#333] text-white rounded-md hover:bg-[#111]"
                  >
                    Confirm payment {`$ ${calculateCartSum}`}
                  </button>
                </div>
              </form>
            </div>
            <div class="bg-gray-100 px-6 py-8 rounded-md">
              <h2 class="text-5xl font-extrabold text-[#333]">{`$ ${calculateCartSum}`}</h2>
              <ul class="text-[#333] mt-10 space-y-6">
                {cartItems.map((item) => {
                  return (
                    <li class="flex flex-wrap gap-4 text-base">
                      {item.name}
                      <span class="ml-auto font-bold">{`$ ${item.price}`}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
