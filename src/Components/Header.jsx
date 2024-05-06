import React, { useState } from "react";
import LOGO from "../assets/logo.png";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { useContext } from "react";
import { shoesContext } from "../Context/ShoeContext";

const Header = () => {
  const { cartCount } = useContext(shoesContext);
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <nav className="bg-white border-gray-200 py-2.5 max-md: pl-4 ">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <NavLink to={"/"} className="flex items-center">
            <img src={LOGO} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
          </NavLink>
          <div className="flex items-center lg:order-2 gap-3">
            <h1 className="font-bold text-blue-500 ">$0.00</h1>

            <NavLink
              to={"/cart"}
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white "
            >
              <PiShoppingCartDuotone className="text-blue-500 size-6" />
              <div className="absolute top-0 -end-0 bg-blue-500 rounded-full w-6 h-6 text-[10px] text-white flex items-center justify-center">
                {cartCount}
              </div>
            </NavLink>

            <button className="hidden max-md:block" onClick={handleOpenMenu}>
              <Hamburger size={25} />
            </button>
          </div>

          {/* {MENU LIST --------------------------} */}

          <div
            className={`${
              openMenu ? "block" : "hidden"
            } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li className="w-full p-4 max-md:shadow-lg rounded-md mt-4 cursor-pointer  max-md:hover:bg-gray-400 duration-300">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "text-black" : "text-blue-500"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="w-full p-4 max-md:shadow-lg rounded-md mt-4 cursor-pointer  max-md:hover:bg-gray-400 duration-300">
                <NavLink
                  to={"/shop"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black"
                      : "text-blue-500 hover:text-cyan-700"
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li className="w-full p-4 max-md:shadow-lg rounded-md mt-4 cursor-pointer  max-md:hover:bg-gray-400 duration-300">
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black"
                      : "text-blue-500 hover:text-cyan-700"
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="w-full p-4 max-md:shadow-lg rounded-md mt-4 cursor-pointer  max-md:hover:bg-gray-400 duration-300">
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-black"
                      : "text-blue-500 hover:text-cyan-700"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
