"use client";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const features = [
  {
    title: "Poor Data Management",
    description:
      "Airports, Shopping centers, car parks (and various other facilities) are constantly bottlenecked by poor data management and even poorer decision-making due to these hurdles.",
  },
  {
    title: "Complexities in Data",
    description:
      "Data is complex, but the goal is to make it easier with tools. Unfortunately, 99% of data management tools make data more complex than it already is, which defeats the purpose of the system itself",
  },
  {
    title: "Uncoordinated systems",
    description:
      "A lot of current systems, typically at airports and car parks, operate in an isolated and uncoordinated environment, giving ZERO value to decision-making ",
  },
  {
    title: "Rising Staff Costs",
    description:
      "Businesses waste thousands of dollars in staff training programs and allocation, which could be reduced in half with the right system like Xymo.",
  },
];

const Page = () => {
  return (
    <div className=" w-full  my-24">
      <div className="flex flex-col lg:flex-row gap-8 items-center px-8 lg:px-24 mx-8 md:mx-36 justify-between rounded-3xl mb-12 bg-gradient-to-br from-primary2/90 to-primary-50/10  py-8 ">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-white text-3xl text-center lg:text-start md:text-6xl font-semibold max-w-lg mb-8">
            We Transform How You View{" "}
            <span className="text-primary2-50 ">Data</span> Forever
          </h1>
          <p className="text-white font-thin text-center lg:text-start max-w-md mb-7">
            Xymo was founded by people who love software and are obsessed with
            using data to make decisions easier.
          </p>
          <div className="flex items-center w-full lg:w-fit justify-center gap-4 flex-col md:flex-row">
            <button className="bg-primary2 text-white   px-8 py-3">
              Explore Success Stories
            </button>
            <button className=" border-2 border-white text-white   px-16 py-3">
              Get in Touch
            </button>
          </div>
        </div>
        <div>
          <Image src="/images/about1.svg" alt="hero" width={530} height={530} />
        </div>
      </div>
      <Image
        src={"/images/milkyway.svg"}
        width={1600}
        height={1300}
        alt="milkyway"
      />
      <div className="flex flex-col md:flex-row  items-center px-8 md:px-24 justify-around gap-12 w-full my-24">
        <div className="flex flex-col items-center md:items-start justify-start gap-3">
          <h1
            className=" text-3xl  md:text-5xl font-semibold text-center tracking-wide
           md:text-start leading-relaxed text-white max-w-lg mb-2"
          >
            Data-Driven platform by ambition-driven people.{" "}
          </h1>
          <p className="text-white font-thin text-center md:text-start max-w-lg mb-4">
            We understood the power of data long before anyone else. Thus, Xymo
            is a product of a decade-long focus on data that makes
            decision-making easier.
          </p>
          <p className="text-white font-thin text-center md:text-start max-w-lg mb-4">
            Made by people who are obsessed with how powerful data is in every
            industry/application around us, we put a 120% focus on creating a
            single platform that integrates with existing systems, and turns
            unused data into your most powerful asset.
          </p>
          <button className="bg-primary2 text-white   px-12 py-3">
            Learn more about Xymo
          </button>
        </div>
        <div>
          <Image src={"images/about2.svg"} width={700} height={700} alt="ok" />
        </div>
      </div>
      <Image
        src={"/images/milkyway.svg"}
        width={1600}
        height={1600}
        className=" mb-12"
        alt="milkyway"
      />
      <div className="flex flex-col md:flex-row gap-8 items-center px-8 md:px-24 justify-around w-full my-24">
        <div className="flex flex-col items-center md:items-start justify-start gap-3">
          <h1 className=" text-4xl md:text-5xl font-normal text-center md:text-start leading-snug text-white max-w-lg mb-2">
            Xymo Data Into Consistent, Actionable Insights.
          </h1>
          <p className="text-white font-thin text-center md:text-start max-w-lg mb-4">
            Our software integrates with your existing systems. From there, Xymo
            centralises all your devices, systems, and people, unifying data
            across every end point for a centralised, bird’s eye view.
          </p>
          <button className="bg-primary2 text-white   px-12 py-3">
            Learn more about Xymo
          </button>
        </div>
        <div>
          <Image
            src={"images/testimonialCard.svg"}
            width={500}
            height={500}
            alt="ok"
          />
        </div>
      </div>
      <Image
        src={"/images/milkyway.svg"}
        width={1600}
        height={1600}
        className=" mb-12"
        alt="milkyway"
      />
      <div className="oyo2 flex flex-col px-8 md:px-32 items-center justify-center p-8">
        <h2 className="text-4xl md:text-5xl max-w-4xl text-center font-semibold text-white mb-8">
          OIs your business{" "}
          <span className=" text-cyan-300 capitalize">confronting</span> These
          Challenges
        </h2>
        <p className=" text-white font-thin mb-16 max-w-xl text-center ">
          In the age of data, businesses understand how important data-driven
          insights are. Using Xymo, our partners empower their businesses by
          making better decisions.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-6 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" p-6 pt-12 pb-24 rounded-2xl bg-gradient-to-br from-primary2-100 to-primary2-100/60 "
            >
              <div className=" inline-flex items-center mb-4">
                <h2 className="text-3xl font-semibold text-white mt-1">
                  {feature.title}
                </h2>
              </div>
              <p className="text-white font-thin max-w-md text-base   ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 mt-16">
          <button className="bg-primary2 text-white  w-64  px-12 py-3">
            Learn more
          </button>
          <button className=" text-white border-2 border-white   w-64  px-12 py-3">
            Start Free Trial
          </button>
        </div>
      </div>
      <Image
        src={"/images/milkyway.svg"}
        width={1600}
        height={1300}
        alt="milkyway"
      />
      <div className=" w-full flex flex-col items-center justify-center bg-gradient-to-r from-primary-50 to-primary-100/70 px-8 mt-12 py-24">
        <h2 className=" text-2xl  font-semibold md:text-5xl max-w-4xl text-white leading-loose text-center">
          It’s simple. We <span className=" text-primary2-50">connect</span> the{" "}
          <span className=" text-primary2-50">unconnected.</span>
        </h2>
        <p className="font-thin text-white text-center max-w-xl mt-6  ">
          Join Xymo in redefining how you see, perceive, and use data to
          streamline your business operations, gain a bird' s-eye view, and make
          growth-oriented decisions.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-evenly w-full md:w-[75%] mt-8 md:mt-12">
          <div>
            <Image src="/images/comp.png" alt="icon" width={450} height={450} />
          </div>
          <div className="flex flex-col lg:pl-12 items-center lg:items-start justify-start w-full gap-12 lg:w-[50%]">
            <div className="flex items-center justify-center gap-4">
              <FaCheck className="h-7 w-7 bg-primary2-50 te  rounded-full mr-3 p-1.5" />

              <div>
                <p className=" text-white text-sm md:text-lg font-thin">
                  A holistic view of your business{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <FaCheck className="h-7 w-7 bg-primary2-50 te  rounded-full mr-3 p-1.5" />

              <div>
                <p className=" text-white text-sm md:text-lg font-thin">
                  Integrates with your existing system{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <FaCheck className="h-7 w-7 bg-primary2-50 te  rounded-full mr-3 p-1.5" />

              <div>
                <p className=" text-white text-sm md:text-lg font-thin">
                  Centralise data from infinite endpoints{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <FaCheck className="h-7 w-7 bg-primary2-50 te  rounded-full mr-3 p-1.5" />

              <div>
                <p className=" text-white text-sm md:text-lg font-thin">
                  Scale as your operations grow{" "}
                </p>
              </div>
            </div>
            <button className="bg-primary2 text-white   px-12 py-3">
              Schedule a Demonstration Here
            </button>
          </div>
        </div>
      </div>
      <Image
        src={"/images/milkyway.svg"}
        width={1600}
        height={1300}
        alt="milkyway"
      />
      <div className="flex flex-col md:flex-row gap-8 items-center px-8 md:px-24 justify-around w-full my-24">
        <div className="flex flex-col items-center md:items-start justify-start gap-3">
          <h1 className=" text-4xl  md:text-5xl font-semibold text-center md:text-start leading-snug text-white max-w-lg mb-2">
            The Platform Of The{" "}
            <span className=" text-primary2-50">Future</span>{" "}
          </h1>
          <p className="text-white font-thin text-center md:text-start max-w-lg mb-4">
            Learn how countless businesses are using Xymo to make better
            decisions, and schedule a free demonstration today to learn how Xymo
            works with your business.
          </p>
          <button className="bg-primary2 text-white   px-12 py-3">
            Schedule A Free Demonstration
          </button>
        </div>
        <div>
          <Image src={"images/about3.svg"} width={500} height={500} alt="ok" />
        </div>
      </div>
      <Image
        src={"/images/milkyway.svg"}
        width={1600}
        height={1600}
        className=" mb-12"
        alt="milkyway"
      />
      <div
        className=" w-[80%] mx-auto mt-6 min-h-96 p-4 py-8 rounded-3xl flex items-center flex-col justify-center"
        style={{
          backgroundImage: "url('/images/bg2.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h2 className=" text-white font-semibold text-5xl mb-4">
          Got Any Questions?
        </h2>
        <p className="text-white font-thin text-xl mb-12">
          We are here to help. Contact us today.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <button className="  border-2 bg-white text-primary2-50 font-bold border-white   w-72 px-8 py-3">
            Book a Demonstration Today
          </button>
          <button className=" border-2 bg-white text-primary2-50 border-white  font-bold  w-72  px-12 py-3">
            Chat With Us
          </button>
        </div>
      </div>
      <Image
        src={"/images/milkyway.svg"}
        width={1600}
        height={1300}
        alt="milkyway"
      />
    </div>
  );
};

export default Page;
