"use client";

import React from "react";
import Image from "next/image";
import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlink = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Features",
    link: "/features",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "About Us",
    link: "/about",
  },
];

const Navbar = () => {
  const path = usePathname();

  return (
    <div className=" w-[80%] py-5 sticky flex items-center justify-between nav  ">
      <Image src="/images/logo.png" alt="Hero Image" width={120} height={120} />
      <div className="hidden md:flex gap-6">
        {navlink.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className={`${
              path === item.link ? "text-primary2-50" : "text-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <button className=" px-3 py-1 bg-primary2 text-white">Book Now</button>
    </div>
  );
};

export default Navbar;
