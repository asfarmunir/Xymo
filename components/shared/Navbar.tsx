import React from "react";
import Image from "next/image";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className=" w-[80%] py-5  flex items-center justify-between nav  ">
      <Image src="/images/logo.png" alt="Hero Image" width={120} height={120} />
      <div className="hidden md:flex gap-6">
        <a href="#" className="text-primary2 font-semibold">
          Home
        </a>
        <a href="#" className=" text-slate-100 font-thin">
          Projects
        </a>
        <a href="#" className=" text-slate-100 font-thin">
          Services
        </a>
        <a href="#" className=" text-slate-100 font-thin">
          Contact Us
        </a>
      </div>
      <button className=" px-3 py-1 bg-primary2 text-white">Book Now</button>
    </div>
  );
};

export default Navbar;
