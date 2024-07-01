"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex  flex-col w-full min-h-screen   items-center justify-center">
      <div className="flex flex-col items-center justify-center pt-48 mb-72 ">
        <h2 className=" text-6xl font-semibold leading-tight tracking-wide text-center mb-4 text-white">
          At Xymo, We Turn <br /> Your Data Into <br /> Decisions.{" "}
        </h2>
        <p className=" text-slate-300 font-light tracking-wide mb-8 max-w-xl text-center">
          Centralise your data, and the way you interact with devices, systems,
          and people - Save time, reduce risk, and cut costs for your business.
        </p>
        <button className="bg-pink-600 px-8 py-3.5 text-white mt-3 ">
          Book a demonstration today
        </button>
      </div>
      <div className="w-full flex flex-col items-center justify-center h-96 bg-opacity-30  bg-black ">
        <h2 className=" text-white ">Valued by Global Enterprises</h2>
      </div>
    </div>
  );
};

export default Hero;
