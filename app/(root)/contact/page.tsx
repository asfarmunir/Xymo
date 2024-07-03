import { Testimonials } from "@/components/shared/Testimonials";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" w-full my-24">
      <div className="flex items-center justify-evenly w-full px-8 md:px-32">
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-5xl font-semibold text-white leading-snug mb-4 tracking-wider">
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
