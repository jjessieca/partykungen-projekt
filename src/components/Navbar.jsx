import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-yellow-300 text-black p-4 flex justify-between items-center">
      <img src={Logo} alt="Logo" className="w-16" />
      <div className="text-2xl text-indigo-500 font-medium">Fight boredom</div>
    </nav>
  );
};

export default Navbar;