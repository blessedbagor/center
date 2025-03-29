"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function CallHeroSection () {
  return (
    <div className="h-[15rem] w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-4xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Book a Discovery Call
        </h1>
      </div>
      <BackgroundBeams />
    </div>
  );
}
