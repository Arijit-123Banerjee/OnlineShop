import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div class="grid sm:grid-cols-2 items-center gap-16 my-6 mx-auto max-w-4xl max-md:pl-6 bg-white text-[#333] font-[sans-serif]">
        <div>
          <h1 class="text-3xl font-extrabold">Contact Us</h1>
          <p className="text-sm text-gray-400 mt-3 max-md:w-[90%]">
            Have a big idea or brand to develop and need help? Don't hesitate to
            reach out – we'd love to hear about your project and provide
            assistance.
          </p>
          <div class="mt-12">
            <h2 class="text-lg font-extrabold">Email</h2>
            <ul class="space-y-4 mt-6">
              <li class="flex items-center space-x-2 text-blue-500">
                <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <MdOutlineAlternateEmail className="text-blue-500" />
                </div>
                <strong>Basikfit_AB@gmail.com</strong>
              </li>
              <li class="flex items-center space-x-2 text-blue-500">
                <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-blue-500" />
                </div>
                <strong>+91-629672973</strong>
              </li>
            </ul>
          </div>
          <div class="mt-12">
            <h2 class="text-lg font-extrabold">Socials</h2>
            <ul class="flex mt-3 space-x-4 ">
              <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <FaSquareXTwitter className="text-blue-500" />
              </li>
              <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <FaWhatsapp className="text-blue-500" />
              </li>
              <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <FaFacebook className="text-blue-500" />
              </li>
            </ul>
          </div>
        </div>
        <form class="ml-auo space-y-4">
          <input
            type="text"
            placeholder="Name"
            class="w-full max-md:w-[90%] rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]"
          />
          <input
            type="email"
            placeholder="Email"
            class="w-full max-md:w-[90%] rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]"
          />
          <input
            type="text"
            placeholder="Subject"
            class="w-full max-md:w-[90%] rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]"
          />
          <textarea
            placeholder="Message"
            rows="6"
            class="w-full max-md:w-[90%] rounded-md px-4 bg-gray-100 text-sm pt-3 outline-[#007bff]"
          ></textarea>
          <button
            type="button"
            class="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full max-md:w-[90%]"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
