import React, { useState, useRef } from "react";
import Header from "./Header";
import validateCredentials from "../Utils/validateCredentials.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/config/firebase";

import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice.js";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const userName = useRef(null);
  const userEmail = useRef(null);
  const userPassword = useRef(null);


  // const userA = UseSelector((state) => {console.log(state)})
  const dispatch = useDispatch();

  const a = useSelector(state => console.log(state.a))


 

  const submitButton = (e) => {
    e.preventDefault();

    let validationRes = validateCredentials(
      userEmail.current.value,
      userPassword.current.value
    );
    setErrorMsg(validationRes);

    if (validationRes) {
      return null;
    }

    if (!isSignup) {
      createUserWithEmailAndPassword(
        auth,
        userEmail.current.value,
        userPassword.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          let extractedMessage = errorCode.split("/")[1].replace(/-/g, " ");
          setErrorMsg(extractedMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        userEmail.current.value,
        userPassword.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(addUser(user));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          let extractedMessage = errorCode.split("/")[1].replace(/-/g, " ");
          setErrorMsg(extractedMessage);
        });
    }
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
          className="hidden"
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

          {errorMsg && (
            <p className="text-[rgb(193,17,25)] font-bold">{errorMsg}</p>
          )}
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
