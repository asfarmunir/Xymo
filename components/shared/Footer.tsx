import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row px-8 items-start justify-evenly gap-8 bg-black py-24">
      <Image src="/images/logo.png" alt="icon" width={180} height={180} />
      <div className="flex flex-col items-start justify-center  gap-6">
        <p className=" text-white font-thin max-w-sm">
          Xymo centralises how you interact with devices, systems, and people -
          Save time, reduce risk, and cut costs for your business.
        </p>
        <div className="flex items-center justify-start gap-8">
          <Image src="/images/yt.svg" alt="icon" width={30} height={30} />
          <Image src="/images/x.svg" alt="icon" width={30} height={30} />
          <Image src="/images/fb.svg" alt="icon" width={13} height={13} />
          <Image src="/images/google.svg" alt="icon" width={26} height={26} />
        </div>
        <p className=" text-white font-thin mt-4">
          All rights reserved. Xymo 2021.
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className=" text-2xl font-semibold text-white mt-2 mb-6 ">About</h2>
        <p className=" text-white"> About Xymo </p>
      </div>
      <div className="flex flex-col">
        <h2 className=" text-2xl font-semibold text-white mt-2 mb-6 ">
          Support
        </h2>
        <p className=" text-white mb-4"> Help and Support </p>
        <p className=" text-white"> Xymo Details </p>
      </div>
    </div>
  );
};

export default Footer;
