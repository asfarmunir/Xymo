import { Testimonials } from "@/components/shared/Testimonials";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" w-full my-24">
      <div className="flex items-center flex-col lg:flex-row justify-evenly w-full px-8 gap-8 md:px-32">
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-5xl font-semibold text-white text-center lg:text-start leading-snug mb-4 tracking-wider">
            <span className="text-cyan-300">D</span>ata.{" "}
            <span className="text-cyan-300">D</span>ecide. <br />
            <span className="text-cyan-300">T</span>ransform.
          </h2>
          <p className=" text-white font-thin  max-w-md mb-4">
            Imagine converting your existing data into an insight powerhouse.
            Book a call, and let’s turn that imagination into a reality.
          </p>
          <p className=" text-white font-thin  max-w-md mb-4">
            Schedule an exclusive demonstration with our experts. We’ll analyze
            your existing system and demonstrate how Xymo integrates with it to
            generate actionable insights and drive growth.
          </p>
        </div>
        <div className="flex overflow-hidden relative items-start flex-col justify-center px-8 py-12 lg:px-16 md:py-16 bg-gradient-to-bl rounded-[60px] from-primary-200/50 to-primary-200">
          <h2 className="text-4xl  mb-6 font-semibold text-white">Book Now!</h2>
          <Image
            src="/images/ellips.svg"
            alt="Contact Us"
            width={220}
            height={220}
            className="absolute -z-40 top-0 right-0"
          />
          <Image
            src="/images/ellips2.svg"
            alt="Contact Us"
            width={520}
            height={520}
            className="absolute bottom-0 left-0"
          />
          <form action="">
            <div className="w-full">
              <label htmlFor="name" className=" text-lg text-white">
                First Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John"
                required
                className="w-full p-3 px-6 mb-4 mt-2 bg-primary2-50/70  text-white placeholder:text-white"
              />
            </div>
            <div className="w-full">
              <label htmlFor="name2" className=" text-lg text-white">
                Last Name
              </label>
              <input
                type="text"
                id="name2"
                placeholder="Lock"
                required
                className="w-full p-3 px-6 mb-4 mt-2 bg-primary2-50/70  text-white placeholder:text-white"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className=" text-lg text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@gmail.com"
                required
                className="w-full p-3 px-6 mb-4 mt-2 bg-primary2-50/70  text-white placeholder:text-white"
              />
            </div>
            <div className="w-full">
              <label htmlFor="pno" className=" text-lg text-white">
                Phone Number
              </label>
              <input
                type="number"
                id="pno"
                placeholder="0320944734"
                required
                className="w-full p-3 px-6 mb-4 mt-2 bg-primary2-50/70  text-white placeholder:text-white"
              />
            </div>
            <button
              type="submit"
              className=" border-2 mt-3 border-white text-white w-full py-3 font-semibold"
            >
              Book My Exclusive Demo
            </button>
          </form>
        </div>
      </div>
      <Image
        src="/images/milkyway.svg"
        alt="Contact Us"
        width={1600}
        height={1600}
        className="w-full mb-8"
      />
      <div className="flex flex-wrap items-center justify-center gap-8 py-8  px-4 bg-primary2-50/80">
        <Image src="/images/c1.svg" alt="Contact Us" width={150} height={150} />
        <Image src="/images/c2.png" alt="Contact Us" width={150} height={150} />
        <Image src="/images/c3.png" alt="Contact Us" width={150} height={150} />
        <Image src="/images/c4.png" alt="Contact Us" width={150} height={150} />
        <Image src="/images/c5.png" alt="Contact Us" width={150} height={150} />
        <Image src="/images/c6.png" alt="Contact Us" width={150} height={150} />
        <Image src="/images/c7.png" alt="Contact Us" width={150} height={150} />
      </div>
      <Testimonials />
      <Image
        src="/images/milkyway.svg"
        alt="Contact Us"
        width={1600}
        height={1600}
        className="w-full"
      />
    </div>
  );
};

export default page;
