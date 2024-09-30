import React from "react";

import { Button } from "./ui/MovingBorders";
import { Steps } from "@/data";

const MovingWorks = () => {
  return (
    <div className=" w-full px-32">
      <h1 className="text-3xl font-bold text-foodconnect-200">
        How{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-foodconnect-200  to-foodconnect-700">
          FoodConnect works
        </span>
      </h1>

      <div className="w-full mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
        {Steps.map((step) => (
          <Button
            key={step.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",

              borderRadius: `calc(1.75rem* 0.96)`,

            }}
            className=" relative z-20 text-foodconnect-900 dark:text-foodconnect-50 max-w-2xl mx-auto lg:p-4 border-foodconnect-200 dark:border-foodconnect-900 p-2 rounded-lg text-center   flex flex-col items-center justify-between shadow-md lg:border "
          >
            <div className=" bg-gradient-to-br from-foodconnect-400 to-foodconnect-700 text-white lg:p-3 p-2 lg:text-2xl text-center  rounded-full">
              <step.icon />
            </div>

            <div className="p-0 text-dark my-3">
              <h3 className="lg:text-xl text-sm font-semibold mb-2">
                {step.title}
              </h3>
              <p className="lg:mb-0 text-xs lg:text-sm">{step.description}</p>
            </div>
            <button
              className="px-4 py-2 backdrop-blur-sm border mx-auto text-center rounded-full relative mt-2 
  bg-foodconnect-400/10 dark:bg-foodconnect-500/10 
  border-foodconnect-500/50 dark:border-foodconnect-900/50 
  text-foodconnect-950 dark:text-foodconnect-50 font-semibold text-lg"
            >
              <span>{step.cta.text} →</span>
              <div
                className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto 
    from-transparent via-foodconnect-500 dark:via-foodconnect-300 to-transparent"
              />
            </button>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MovingWorks;
