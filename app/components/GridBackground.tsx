"use client";

import React from "react";
import CountUp from "react-countup";
import { AnimatedTooltipPreview } from "./HeroTestimonial";
import { Spotlight } from "./ui/Spotlight";

export function GridBackgroundDemo() {
  return (
    <div className=" relative pb-20 pt-2 overflow-hidden">
      <div>
        <Spotlight
          fill="white"
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        />
        <Spotlight
          fill="orange"
          className=" w-screen top-10 left-full h-[80dvh]"
        />
        <Spotlight
          fill="orange"
          className="w-[50vw] top-28 left-80 h-[80dvh]"
        />
      </div>

      <div className="h-[50rem] w-full dark:bg-foodconnect-950 bg-foodconnect-50 dark:bg-grid-foodconnect-900/[0.2] bg-grid-foodconnect-200/[0.2] relative flex items-center flex-col justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-foodconnect-950 bg-foodconnect-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {/* Main Heading */}
        <h1 className="text-6xl sm:text-8xl font-extrabold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-foodconnect-200 to-foodconnect-700 py-4">
          FoodConnect
        </h1>

        {/* Subtitle */}
        <p className="text-2xl sm:text-4xl text-center relative z-20 text-foodconnect-800 dark:text-foodconnect-200 py-2">
          Bridging the Gap Between Donors and Receivers
        </p>

        {/* Additional Content - Highlight Section */}
        <div className="text-center relative z-20 text-foodconnect-900 dark:text-foodconnect-50 max-w-2xl mx-auto mt-6">
          <p className="text-lg sm:text-xl font-medium">
            Empowering individuals and communities to make a difference by
            reducing food waste and ensuring everyone has access to meals.
            Donate or receive surplus food with just a few clicks.
          </p>
        </div>

        {/* Benefits Section in Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-foodconnect-800 dark:text-foodconnect-200">
          <div className="flex flex-col items-center p-2 border rounded-lg shadow-lg border-foodconnect-200 dark:border-foodconnect-900  bg-foodconnect-50  dark:bg-foodconnect-950">
            <span className="text-4xl font-bold">
              <CountUp start={0} end={500} duration={2.5} />+
            </span>
            <p className="text-lg mt-2">Donations made daily</p>
          </div>
          <div className="flex flex-col items-center p-2 border rounded-lg border-foodconnect-200 dark:border-foodconnect-900 shadow-lg bg-foodconnect-50  dark:bg-foodconnect-950">
            <span className="text-4xl font-bold">
              <CountUp start={0} end={1200} duration={2.5} />+
            </span>
            <p className="text-lg mt-2">Happy receivers</p>
          </div>
          <div className="flex flex-col items-center p-2 border rounded-lg border-foodconnect-200 dark:border-foodconnect-900 shadow-lg bg-foodconnect-50  dark:bg-foodconnect-950">
            <span className="text-4xl font-bold">
              <CountUp start={0} end={99} duration={2.5} />%
            </span>
            <p className="text-lg mt-2">Food waste reduction</p>
          </div>
        </div>
        <div className="relative z-20 mt-5 rounded-lg flex w-full justify-center items-center  ">
          <p>Popular Donors</p>
          <div>
            <AnimatedTooltipPreview />
          </div>
        </div>
        {/* CTA Button */}
        <button
          className="px-6 py-3 backdrop-blur-sm border mx-auto text-center rounded-full relative mt-2 
  bg-foodconnect-400/10 dark:bg-foodconnect-700/10 
  border-foodconnect-500/20 dark:border-foodconnect-900/20 
  text-foodconnect-950 dark:text-foodconnect-50 font-semibold text-lg"
        >
          <span>Join now →</span>
          <div
            className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto 
    from-transparent via-foodconnect-500 dark:via-foodconnect-300 to-transparent"
          />
        </button>
      </div>
    </div>
  );
}
