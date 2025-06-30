"use client";

import Image from "next/image";

import React from "react";
import scrollFadeIn from "../hooks/scrollFadeIn";

const About = () => {
  const [ref, visible] = scrollFadeIn();

  return (
    <div
      className={`px-4 py-12 max-w-6xl mx-auto fade-in  ${
        visible ? "visible" : ""
      }`}
      ref={ref}
    >
      <h2 className="text-3xl font-bold text-center md:text-left mb-8 md:hidden">
        About Dr. Serena Blake
      </h2>

      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 ">
        <div className="md:w-1/2">
          <img
            src={"./serana.jpg"}
            alt="Dr. Serena Blake"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-center md:text-left mb-8 md:block hidden">
            About Dr. Serena Blake
          </h2>
          <div>
            <p className="text-gray-700 leading-relaxed mb-7">
              Dr. Serena Blake, PsyD, is a licensed clinical psychologist based
              in Los Angeles, CA, with over eight years of experience and more
              than 500 client sessions. She is known for her warm, empathetic
              approach and her ability to blend proven therapeutic techniques
              with personalized care.
            </p>
            <p className="text-gray-700 leading-relaxed mb-7">
              Specializing in anxiety and stress management, relationship
              counseling, and trauma recovery, Dr. Blake helps individuals
              navigate life’s challenges with clarity and confidence. She draws
              from cognitive-behavioral therapy (CBT), mindfulness practices,
              and other evidence-based modalities to support lasting emotional
              growth and healing.
            </p>
            <p className="text-gray-700 leading-relaxed mb-7">
              Whether you’re seeking support in-person at her comfortable
              Maplewood Drive office or virtually from the privacy of your home,
              Dr. Blake is committed to creating a safe, nonjudgmental space
              where you can feel heard, supported, and empowered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
