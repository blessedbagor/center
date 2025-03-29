"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function GuidelinesHeroSection () {
  return (
    <div className="h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Basic Guidelines
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-xl mx-auto my-2 text-md md:text-md text-center relative z-10">
        Join iGift as a Center to earn more, serve as a local pickup point, and be the go-to provider for iGift customers in your area.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
