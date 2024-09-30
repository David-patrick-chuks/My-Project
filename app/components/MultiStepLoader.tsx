"use client";
import React, { useState } from "react";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";

const loadingStates = [
  {
    text: "Matching food donors with receivers...",
  },
  {
    text: "Verifying donation availability...",
  },
  {
    text: "Preparing food for pickup...",
  },
  {
    text: "Connecting with nearby receivers...",
  },
  {
    text: "Promoting zero food waste...",
  },
  {
    text: "Impacting lives with every donation...",
  },
  {
    text: "Ensuring fresh meals reach those in need...",
  },
  {
    text: "Welcome to FoodConnect!",
  },
];

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />


      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
