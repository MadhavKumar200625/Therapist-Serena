"use client";

import Image from "next/image";

import React from "react";
import scrollFadeIn from "../hooks/scrollFadeIn";

const Footer = () => {
  const [ref, visible] = scrollFadeIn();

  return (
    <div
      className={`px-4 pt-12 flex flex-col items-center fade-in bg-[#f2f0e8] ${
        visible ? "visible" : ""
      }`}
      ref={ref}
    >
      <footer className="text-center text-gray-700 px-6 py-12">
  <div className="space-y-4 max-w-4xl mx-auto">
    <div className="text-lg md:text-3xl font-semibold">Dr. Serena Blake, PsyD (Clinical Psychologist)</div>

    <div className="text-sm md:text-xl">
      <p>Email: <a href="mailto:jennifer@drjenniferhahm.com" className="underline">serena@blakepsychology.com</a></p>
      <p>Phone: (323) 555-0192</p>
    </div>

    <div className="text-sm md:text-xl">1287 Maplewood Drive, Los Angeles, CA 90026</div>

    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-xl">
      <a href="/" className="hover:underline">Home</a>
      <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
      <a href="/good-faith-estimate" className="hover:underline">Good Faith Estimate</a>
      <a href="/client-portal" className="hover:underline">Client Portal</a>
    </div>

    <div className="text-sm md:text-2xl text-gray-500 mt-20 md:mb-0 mb-20">
      © 2025 Dr. Serena Blake, Psychological Services, PLLC. All rights reserved.
    </div>
  </div>
</footer>
    </div>
  );
};

export default Footer;
