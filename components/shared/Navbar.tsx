import React from "react";
import Image from "next/image";
import "./Navbar.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className=" w-[80%] py-5  flex items-center justify-between nav  ">
      <Image src="/images/logo.png" alt="Hero Image" width={120} height={120} />
      <div className="hidden md:flex gap-6">
        <Link href="#" className="text-primary2 font-semibold">
          Home
        </Link>
        <Link href="/features" className=" text-slate-100 font-thin">
          Features
        </Link>
        <Link href="#" className=" text-slate-100 font-thin">
          Services
        </Link>
        <Link href="/contact" className=" text-slate-100 font-thin">
          Contact Us
        </Link>
      </div>
      <button className=" px-3 py-1 bg-primary2 text-white">Book Now</button>
    </div>
  );
};

export default Navbar;
