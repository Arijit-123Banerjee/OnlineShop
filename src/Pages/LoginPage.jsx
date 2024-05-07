import React, { useState, useEffect } from "react";
import { auth, provider } from "../Auth/config";
import { signInWithRedirect, getRedirectResult } from "firebase/auth";
import { Link } from "react-router-dom";
import RightIMG from "../assets/right.png";

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result.user) {
          setUserEmail(result.user.email);
        }
      } catch (error) {
        console.error("Error handling redirect:", error);
      }
    };

    handleRedirectResult();
  }, []);

  const handleLogin = () => {
    signInWithRedirect(auth, provider)
      .then(() => {
        // No need to handle anything here as the redirect result will be handled by useEffect
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };

  return (
    <>
      {userEmail ? (
        <div className="flex justify-center items-center h-screen">
          <div className="flex justify-center items-center w-full max-w-md h-full">
            <div className="w-[80%] h-[40vh] p-4 text-center max-md:h-screen max-md:w-full bg-green-800 rounded-lg shadow sm:p-5 flex justify-center flex-col items-center space-y-3 inset-0">
              <div className="w-16 h-16">
                <img src={RightIMG} alt="" />
              </div>
              <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                Logged in Successfully
              </p>
              <Link to={"/"}>
                <button
                  data-modal-toggle="successModal"
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-center text-black rounded-lg bg-primary-600 hover:bg-primary-700 bg-white"
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
