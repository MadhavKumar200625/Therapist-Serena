"use client";

import Image from "next/image";

import React from "react";
import scrollFadeIn from "../hooks/scrollFadeIn";

const QuoteSection = () => {
  const [ref, visible] = scrollFadeIn();

  return (
    <div
      className={`px-4 py-12 max-w-6xl mx-auto fade-in  ${
        visible ? "visible" : ""
      }`}
      ref={ref}
    >
      <div className="flex items-center justify-center text-center">
  <div className="max-w-4xl">
    <h2 className="text-3xl md:text-5xl font-medium text-gray-800 mb-6">
      Healing begins when you give yourself permission to feel and be understood.
    </h2>
    <p className="text-base md:text-lg text-gray-600 font-thin">
      Whether you're navigating anxiety, facing relationship challenges, or carrying the weight of past experiences, therapy is a place to explore your story without judgment. It's a step toward clarity, confidence, and emotional balance—one conversation at a time.
    </p>
  </div>
</div>
    </div>
  );
};

export default QuoteSection;
