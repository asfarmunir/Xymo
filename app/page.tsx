import Image from "next/image";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import { Testimonials } from "@/components/shared/Testimonials";

export default function Home() {
  return (
    <main className="oyo relative flex min-h-screen flex-col bg-primary items-center justify-between pt-16">
      <Image
        src="/images/bg_design.svg"
        alt="Hero Image"
        width={1350}
        height={1350}
        className=" absolute top-52 md:-top-1 left-50 z-0 opacity-75"
      />
      <Navbar />
      <Hero />
      <Image
        src="/images/milkyway.svg"
        alt="Hero Image"
        width={1550}
        className="mb-8 opacity-55"
        height={1550}
      />
      <div className="flex items-center flex-col lg:flex-row gap-6 justify-between w-full bg-primary2 px-16 md:px-36 py-9">
        <div className="flex flex-col items-start justify-center p-0 lg:p-8">
          <h2 className=" text-2xl md:text-4xl lg:text-5xl text-white  font-semibold tracking-wide">
            Unlock the full <br /> potential of YOUR data
          </h2>
          <ul
            className="
            text-white
            font-thin
            tracking-wide
            mt-6
            max-w-xl
            text-start
            flex flex-col
            text-xs md:text-sm lg:text-base
            gap-4

          "
          >
            <li>
              According to a study, 60% of businesses have immense data trapped
              in silos, which cuts about 25% of their revenue.
            </li>
            <li>
              Enter Xymo, an intuitive platform that centralises how you
              interact with data, people, infrastructure, and systems.
            </li>
            <li>
              Available on both cloud and mobile, Xymo hosts an intuitive,
              easy-to-use, and integrative set of customisable features that fit
              into any business, and unlock the power of data-driven insights,
              instantly.
            </li>
          </ul>
          <button className=" bg-white text-sm md:text-base text-primary2 px-4 md:px-9 py-2 md:py-4 mt-8 font-semibold">
            Schdeule A Demonstration Here
          </button>
        </div>
        <div className="flex items-center justify-center w-[50%] py-6">
          <Image src={"/images/vid.png"} alt="vid" width={450} height={450} />
        </div>
      </div>
      <div className=" w-full relative my-32 flex items-center justify-center px-8">
        <Image
          src="/images/starts.svg"
          alt="Hero Image"
          className=" w-full absolute -top-64 right-50 z-0 opacity-100"
          width={2050}
          height={2050}
        />
        <Image
          src="/images/features.png"
          alt="Hero Image"
          width={1250}
          height={1250}
        />
      </div>
      <div className="w-full mt-24 bg-primary relative flex flex-col items-center justify-center overflow-y-hidden px-8 ">
        <Image
          src="/images/starts.svg"
          alt="Hero Image"
          className=" w-full absolute -top-64 right-50 z-0 opacity-100"
          width={2050}
          height={2050}
        />
        <h3 className=" text-2xl md:text-4xl px-4 text-center text-white ">
          Problems That Most Of The Businesses Face
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 my-12 ">
          <div
            className=" gradient_card w-96 px-8 py-12 flex flex-col gap-3 rounded-3xl  "
            style={{
              backgroundColor: "#26094B",
            }}
          >
            <Image src="/images/icon1.svg" alt="icon" width={40} height={40} />
            <h2 className=" text-2xl font-bold text-white"> Data Management</h2>
            <p className=" text-white pb-4">
              Businesses are constantly bottlenecked by not only being able to
              manage data properly but to utilise this increasing amount with
              efficiency
            </p>
          </div>
          <div
            className=" gradient_card w-96 px-8 py-12 flex flex-col gap-3 rounded-3xl  "
            style={{
              backgroundColor: "#26094B",
            }}
          >
            <Image src="/images/icon2.svg" alt="icon" width={40} height={40} />
            <h2 className=" text-2xl font-bold text-white">
              {" "}
              Clunky Interfaces
            </h2>
            <p className=" text-white pb-4">
              Most data management systems come with a clunky interface and
              outdated designs that are very hard to use.
            </p>
          </div>
          <div
            className=" gradient_card w-96 px-8 py-12 flex flex-col gap-3 rounded-3xl  "
            style={{
              backgroundColor: "#26094B",
            }}
          >
            <Image src="/images/icon3.svg" alt="icon" width={40} height={40} />
            <h2 className=" text-2xl font-bold text-white"> Utilising Data</h2>
            <p className=" text-white pb-4">
              Often businesses have a lot of data, but no solid way into
              actually use this data to make decisions and get insights
            </p>
          </div>
          <div
            className=" gradient_card w-96 px-8 py-12 flex flex-col gap-3 rounded-3xl  "
            style={{
              backgroundColor: "#26094B",
            }}
          >
            <Image src="/images/icon4.svg" alt="icon" width={40} height={40} />
            <h2 className=" text-2xl font-bold text-white">
              {" "}
              Sluggish Decision Making
            </h2>
            <p className=" text-white pb-4">
              Current systems operate in an isolated and uncoordinated
              environment, giving ZERO value to decision-making
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col items-center justify-center bg-gradient-to-r from-primary-50 to-primary-100 px-8 mt-12 py-24">
        <h2 className=" text-2xl  font-semibold md:text-5xl text-white text-center">
          Why Businesses Choose <span className=" text-cyan-300">Xymo</span>
        </h2>
        <p className="font-thin text-white text-center max-w-xl mt-6  ">
          Xymo integrates with your already existing systems to unlock hidden
          insights. You don’t need to install a whole new system across your
          business.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-around w-full mt-8 md:mt-12">
          <div>
            <Image src="/images/comp.png" alt="icon" width={500} height={500} />
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-6 md:w-[50%]">
            <div className="flex items-start justify-center gap-4">
              <h2 className="py-2 md:py-3 bg-gradient-to-br from-primary2-50/80 to-primary2-50 rounded-t-xl rounded-br-xl text-white text-2xl md:text-4xl font-bold px-4 md:px-5">
                1
              </h2>
              <div>
                <h2 className="text-3xl font-semibold text-white  mb-1">
                  Ease of use
                </h2>
                <p className=" text-white text-sm md:text-lg font-thin">
                  Harness customer data with Xymo - Understand wants, needs, and
                  expectations, and make data-driven decisions with Xymo.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-center gap-4">
              <h2 className="py-2 md:py-3 bg-gradient-to-br from-primary2-50/80 to-primary2-50 rounded-t-xl rounded-br-xl text-white text-2xl md:text-4xl font-bold px-4 md:px-5">
                2
              </h2>
              <div>
                <h2 className="text-3xl font-semibold text-white  mb-1">
                  Improve Customer Interactions
                </h2>
                <p className=" text-white text-sm md:text-lg font-thin">
                  Harness customer data with Xymo - Understand wants, needs, and
                  expectations, and make data-driven decisions with Xymo.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-center gap-4">
              <h2 className="py-2 md:py-3 bg-gradient-to-br from-primary2-50/80 to-primary2-50 rounded-t-xl rounded-br-xl text-white text-2xl md:text-4xl font-bold px-4 md:px-5">
                3
              </h2>
              <div>
                <h2 className="text-3xl font-semibold text-white  mb-1">
                  State-of-the-art Security{" "}
                </h2>
                <p className=" text-white text-sm md:text-lg font-thin">
                  Harness customer data with Xymo - Understand wants, needs, and
                  expectations, and make data-driven decisions with Xymo.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-center gap-4">
              <h2 className="py-2 md:py-3 bg-gradient-to-br from-primary2-50/80 to-primary2-50 rounded-t-xl rounded-br-xl text-white text-2xl md:text-4xl font-bold px-4 md:px-5">
                4
              </h2>
              <div>
                <h2 className="text-3xl font-semibold text-white  mb-1">
                  Plug and Play
                </h2>
                <p className=" text-white text-sm md:text-lg font-thin">
                  Harness customer data with Xymo - Understand wants, needs, and
                  expectations, and make data-driven decisions with Xymo.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-center gap-4">
              <h2 className="py-2 md:py-3 bg-gradient-to-br from-primary2-50/80 to-primary2-50 rounded-t-xl rounded-br-xl text-white text-2xl md:text-4xl font-bold px-4 md:px-5">
                5
              </h2>
              <div>
                <h2 className="text-3xl font-semibold text-white  mb-1">
                  Create Actions On Any Data Source
                </h2>
                <p className=" text-white text-sm md:text-lg font-thin">
                  Harness customer data with Xymo - Understand wants, needs, and
                  expectations, and make data-driven decisions with Xymo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <div className=" w-full flex flex-col items-center justify-center py-12 pb-24">
        <h2 className=" text-white text-5xl text-center font-semibold mb-7">
          Turn Data into insights
        </h2>
        <p className=" font-thin text-white">
          Get ready to unlock hidden insights in your dat
        </p>
        <button className=" bg-primary2 font-semibold text-lg px-8 py-3 mt-5 text-white">
          Book a Demonstration Today
        </button>
      </div>
      <div className="w-full flex flex-col md:flex-row px-8 items-start justify-evenly gap-8 bg-black py-24">
        <Image src="/images/logo.png" alt="icon" width={180} height={180} />
        <div className="flex flex-col items-start justify-center  gap-6">
          <p className=" text-white font-thin max-w-sm">
            Xymo centralises how you interact with devices, systems, and people
            - Save time, reduce risk, and cut costs for your business.
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
          <h2 className=" text-2xl font-semibold text-white mt-2 mb-6 ">
            About
          </h2>
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
    </main>
  );
}
