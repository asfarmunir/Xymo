"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Testimonials() {
  const [index, setIndex] = React.useState(0);
  return (
    <div
      className="flex flex-col items-center justify-center w-full  px-8 py-24 bg-black
    "
    >
      <h2 className="text-3xl text-center  md:text-4xl mb-16 font-semibold text-white">
        Our Champions Speaks
      </h2>
      <Carousel className=" w-72 md:w-96 lg:w-full  lg:max-w-4xl ">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="    flex items-center justify-center flex-col">
                <Image
                  src="/images/person.png"
                  alt="ok"
                  width={140}
                  className=" mb-3"
                  height={140}
                />
                <h3 className="text-xl text-white font-semibold mb-2">
                  Mick G . <span className=" font-thin ">Canada</span>
                </h3>
                <p className="text-white font-thin text-lg mb-4">23 Jan 2023</p>
                <p className="text-white text-sm md:text-xl max-w-sm md:max-w-lg text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero vitae aut ab rerum placeat dolorem, fugit sapiente
                  sint! Ipsam fuga sint, officia id tenetur assumenda nesciunt
                  reprehenderit! Cupiditate, facere ullam?
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className=" mt-12 flex items-center gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <p
            key={index}
            className="bg-pink-300/80 p-1.5 px-1.5 rounded-full"
          ></p>
        ))}
      </div>
    </div>
  );
}
