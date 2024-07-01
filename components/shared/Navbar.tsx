import React from "react";
import Image from "next/image";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className=" w-full py-8 px-6  flex items-center justify-between nav ">
      <Image src="/images/logo.png" alt="Hero Image" width={120} height={120} />
      <div className="flex gap-6">
        <a href="#" className="text-primary2 font-semibold">
          Home
        </a>
        <a href="#" className=" text-white font-semibold">
          About
        </a>
        <a href="#" className="font-semibold text-white">
          Services
        </a>
        <a href="#" className="font-semibold text-white">
          Contact
        </a>
      </div>
      <button className=" px-3 py-1 bg-primary2 text-white">Book Now</button>
    </div>
  );
};

export default Navbar;
