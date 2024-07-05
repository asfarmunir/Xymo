"use client";

import React from "react";
import Image from "next/image";
import "./Navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

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
    <>
      <div className=" w-[80%] py-5 flex  items-center justify-between nav  ">
        <Image
          src="/images/logo.png"
          alt="Hero Image"
          width={120}
          height={120}
        />
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
        <div className=" block md:hidden z-50">
          <Sheet>
            <SheetTrigger>
              <GiHamburgerMenu className=" text-3xl text-white" />
            </SheetTrigger>
            <SheetContent className=" z-50 bg-primary border-none  flex flex-col items-center justify-start py-16">
              <SheetHeader className=" flex flex-col items-center justify-center border-b w-full pb-8 border-slate-500">
                <Image
                  src="/images/logo.png"
                  alt="Hero Image"
                  width={120}
                  height={120}
                />
              </SheetHeader>
              <div className="flex flex-col  items-center justify-center mt-12 gap-6">
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
              </div>{" "}
              <SheetFooter className="mt-16">
                <Button className="bg-primary2 w-full text-white">
                  Book Now
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <button className=" hidden md:block px-3 py-1 bg-primary2 text-white">
          Book Now
        </button>
      </div>
    </>
  );
};

export default Navbar;
