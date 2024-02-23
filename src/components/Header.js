import React from "react";
// import img from "../Utils/assets/images/netflixLogo.png"

const Header = () => {
  return (
    <div>
      <img className="absolute w-52 left-8 top-4 bg-gradient-to-b from-gray-900 hidden"
          src={require("../Utils/assets/images/netflixLogo.png")}
          alt="logo"
        />
    </div>
  );
};

export default Header;
