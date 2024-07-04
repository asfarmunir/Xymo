"use client";

import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const features = [
  {
    title: "Activity",
    description:
      "Get a clear view of every captured event, with links to discover more details in a few clicks",
  },
  {
    title: "Alerts",
    description:
      "Receive personalised alerts that put you and your team ahead of any problem, crisis, or event.",
  },
  {
    title: "Actions",
    description:
      "Set the rules for any alert generated within Xymo. Set any identifiers or behaviours that trigger alerts in your system.",
  },
  {
    title: "Insights",
    description:
      "Extend your data set with powerful metadata (vehicle make, fuel type, sensor data etc), and receive insights that really matter",
  },
  {
    title: "Bespoke Reports",
    description:
      "We work in various industries and companies to create (and visualize) bespoke reports for their business",
  },
  {
    title: "Interactive Mobile App",
    description:
      "A staff centric mobile app that helps employees report and manage events in the Xymo ecosystem while they’re visiting the site",
  },
  {
    title: "Personalize with People",
    description:
      "Link specific identifiers with people, and create a personalised messaging, concierge services, and more.",
  },
  {
    title: "Assests Management",
    description:
      "Xymo offers an easy way to track and manage all unconnected entities within your organisation (e.g data cabinet, video projectors, and more)",
  },
  {
    title: "Custom Messaging",
    description:
      "Create custom messaging templates for your customers, and send them based on any action or trigger with Xymo",
  },
  {
    title: "Manual Events",
    description:
      "Send and trigger alerts for any offline event that needs to be kept track of. An abandoned car? A lost suitcase? Done.",
  },
  {
    title: "Viewer Dashboard",
    description:
      "A state-of-the-art visual dashboard that allows you to easily see all camera related events, with live updates and a scrollable history",
  },
  {
    title: "CloudBox",
    description:
      "Cloud infrastructure isn’t your thing? Our CloudBox feature allows you to integrate Xymo on premise, completely offline. Get increased security, personalise Xymo for your systems, and empower your business",
  },
];

const Page = () => {
  return (
    <div className=" w-full  my-24">
      <div className="flex flex-col lg:flex-row gap-8 items-center px-8 md:px-24 mx-8 md:mx-36 justify-between rounded-3xl mb-12 bg-gradient-to-br from-primary2/90 to-primary-50/10  py-8 ">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-white text-4xl md:text-6xl font-semibold max-w-md mb-8">
            Turn <span className="text-primary2-50 underline">Data</span> into
            Analytics - And Win.
          </h1>
          <p className="text-white font-thin max-w-md mb-7">
            Check out all of Xymo’s features here, a platform that Xymo
            integrates with your existing system, and turns YOUR data into
            insights.
          </p>
          <button className="bg-primary2 text-white   px-12 py-3">
            Book a Demonstration Today
          </button>
        </div>
        <div>
          <Image
            src="/images/feature1.svg"
            alt="hero"
            width={530}
            height={530}
          />
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
        <h2 className="text-4xl md:text-5xl text-center font-semibold text-white mb-8">
          One System. Unlimited Features
        </h2>
        <p className=" text-white font-thin mb-16 max-w-xl text-center ">
          In the age of data, businesses understand how important data-driven
          insights are. Using Xymo, our partners empower their businesses by
          making better decisions.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" p-6 pt-12 pb-24 rounded-2xl bg-gradient-to-br from-primary2-100 to-primary2-100/60 "
            >
              <div className=" inline-flex items-center mb-4">
                <FaCheck className="h-7 w-7 bg-white text-primary2-100 rounded-full mr-3 p-1.5" />
                <h2 className="text-2xl font-semibold text-white mt-1">
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
        <h2 className=" text-2xl  font-semibold md:text-5xl max-w-4xl text-white text-center">
          <span className=" text-cyan-300">Integrate</span> In Your System. Get
          Insights That Empower.
        </h2>
        <p className="font-thin text-white text-center max-w-xl mt-6  ">
          Xymo integrates with your already existing systems to unlock hidden
          insights. You don’t need to install a whole new system across your
          business.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-around w-full mt-8 md:mt-12">
          <div>
            <Image
              src="/images/feature2.svg"
              alt="icon"
              width={450}
              height={450}
            />
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-12 md:w-[50%]">
            <h2 className="text-3xl font-semibold text-white">
              Integrate Xymo, centralise your views, and win.
            </h2>
            <div className="flex items-center justify-center gap-4">
              <h2 className="py-1.5 px-4 bg-gradient-to-br from-primary2-50/80 to-primary2-50 rounded-t-xl rounded-br-xl text-white text-3xl  font-bold ">
                1
              </h2>
              <div>
                <p className=" text-white text-sm md:text-lg font-thin">
                  Plug and Play With minimum customisations
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <h2 className="py-1.5 px-4 bg-gradient-to-br from-primary2-50/80 to-primary2-50 rounded-t-xl rounded-br-xl text-white text-3xl  font-bold ">
                2
              </h2>
              <div>
                <p className=" text-white text-sm md:text-lg font-thin">
                  Create Actions On Any Data Source with Xymo’s robust rules
                  engine{" "}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <h2 className="py-1.5 px-4 bg-gradient-to-br from-primary2-50/80 to-primary2-50 rounded-t-xl rounded-br-xl text-white text-3xl  font-bold ">
                3
              </h2>
              <div>
                <p className=" text-white text-sm md:text-lg font-thin">
                  Centralise any number of systems into one with Xymo, and get a
                  bird’s eye view
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/images/milkyway.svg"}
        width={1600}
        height={1300}
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
