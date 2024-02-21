import React, { useState, useRef } from "react";
import Header from "./Header";
import validateCredentials from "../Utils/validateCredentials.js";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const userName = useRef(null);
  const userEmail = useRef(null);
  const userPassword = useRef(null);
  let validationRes;

  const submitButton = (e) => {
    e.preventDefault();

    const validationRes = validateCredentials(
      userEmail.current.value,
      userPassword.current.value
    );
    setErrorMsg(validationRes)
  };

  const toggleEvent = (e) => {
    e.preventDefault();
    setIsSignup(!isSignup);
  };
  return (
    <div className="relative">
      <Header />

      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="login-bg"
        />
      </div>

      <div className="absolute w-[30%] inset-0 m-auto top-40 ">
        <form
          action=""
          className="bg-black px-20 py-12 flex flex-col gap-7 rounded-md bg-opacity-85"
        >
          <div className="font-bold text-[#fff] text-3xl mb-4">
            {!isSignup ? "Sign Up" : "Sign In"}
          </div>

          {!isSignup && (
            <input
              ref={userName}
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 rounded-sm bg-gray-800 border border-white-500 text-white"
            />
          )}
          <input
            ref={userEmail}
            type="text"
            placeholder="Enter your Email"
            className="px-4 py-3 rounded-sm bg-gray-800 border border-white-500 text-white"
          />
          <input
            ref={userPassword}
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-sm bg-gray-800 border border-white-500 text-white"
          />

          {errorMsg && <p className="text-red-700 font-bold">{errorMsg}</p>}
          <button
            className="px-4 py-3 bg-[rgb(193,17,25)] text-white font-medium rounded-md"
            onClick={submitButton}
          >
            {!isSignup ? "Sign Up" : "Sign In"}
          </button>

          <p className="text-white cursor-pointer" onClick={toggleEvent}>
            {!isSignup
              ? "Already registered? Sign In now"
              : "New to Netflix? Sign up now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
