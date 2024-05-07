import React, { useEffect, useState } from "react";
import { auth, provider } from "../Auth/config";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import RightIMG from "../assets/right.png";
const LoginPage = () => {
  const [value, setValue] = useState("");

  const handleLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      // localStorage.setItem("email", data.user.email);
    });
  };

  // useEffect(() => {
  //   setValue(localStorage.getItem("email"));
  // }, []); // Add an empty dependency array to useEffect to run only once

  return (
    <>
      {value ? (
        <div class="flex justify-center items-center h-screen">
          <div class="flex justify-center items-center w-full max-w-md h-full">
            <div class=" w-[80%] h-[40vh] p-4 text-center max-md:h-screen max-md:w-full bg-green-800 rounded-lg shadow sm:p-5 flex justify-center flex-col items-center space-y-3 inset-0 ">
              <div className="w-16 h-16">
                <img src={RightIMG} alt="" />
              </div>
              <p class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Logged in Successfull
              </p>
              <Link to={"/"}>
                <button
                  data-modal-toggle="successModal"
                  type="button"
                  class="py-2 px-3 text-sm font-medium text-center text-black rounded-lg bg-primary-600 hover:bg-primary-700 bg-white"
                >
                  Go to HomePage
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
          <h1 className="text-4xl font-medium">Login</h1>

          <div className="my-5">
            <button
              onClick={handleLogin}
              className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                className="w-6 h-6"
                alt=""
              />
              <span>Login with Google</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
