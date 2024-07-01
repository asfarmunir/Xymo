import Image from "next/image";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main className="oyo relative flex min-h-screen flex-col bg-primary items-center justify-between px-8 py-16 md:px-24">
      <Image
        src="/images/bg_design.svg"
        alt="Hero Image"
        width={1350}
        height={1350}
        className=" absolute -top-1 left-50 z-0 opacity-75"
      />
      <Navbar />
      <Hero />
      <div className="flex items-center flex-col lg:flex-row gap-6 justify-between w-full bg-primary2 px-10 md:px-12 py-9">
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
      <div className=" w-full relative my-32">
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
          width={1650}
          height={1650}
        />
      </div>
      <div className="w-full mt-24 bg-primary relative flex flex-col items-center justify-center overflow-y-hidden ">
        <Image
          src="/images/starts.svg"
          alt="Hero Image"
          className=" w-full absolute -top-64 right-50 z-0 opacity-100"
          width={2050}
          height={2050}
        />
        <h3 className=" text-2xl md:text-4xl text-center text-white ">
          Problems That Most Of The Businesses Face
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 mt-12">
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
    </main>
  );
}
