"use client";

import Image from "next/image";

import React from "react";
import scrollFadeIn from "../hooks/scrollFadeIn";

const Services = () => {
  const [ref, visible] = scrollFadeIn();

  return (
    <div
      className={`px-4 py-12 max-w-6xl mx-auto fade-in  ${
        visible ? "visible" : ""
      }`}
      ref={ref}
    >
      <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-semibold text-gray-800 mb-12">Services & Specialties</h2>
    <div className="grid md:grid-cols-3 gap-12">
      
      <div className="flex flex-col items-center text-center">
        <div className="w-64 h-64 rounded-full overflow-hidden mb-6">
          <img src="/anxiety.png" alt="Anxiety & Stress" className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Anxiety & Stress Management</h3>
        <p className="text-gray-600 text-sm md:text-lg mt-2">
          Learn practical tools to calm your mind, manage daily stressors, and regain a sense of emotional balance and focus.
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="w-64 h-64 rounded-full overflow-hidden mb-6">
          <img src="/relationship_counseling.jpeg" alt="Relationship Counseling" className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Relationship Counseling</h3>
        <p className="text-gray-600 text-sm md:text-lg mt-2">
          Strengthen communication, rebuild trust, and foster deeper connection in romantic, family, or peer relationships.
        </p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="w-64 h-64 rounded-full overflow-hidden mb-6">
          <img src="/trauma_recovery.jpg" alt="Trauma Recovery" className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Trauma Recovery</h3>
        <p className="text-gray-600 text-sm md:text-lg mt-2">
          Heal from past experiences in a supportive space using evidence-based approaches tailored to your needs.
        </p>
      </div>

    </div>
  </div>
    </div>
  );
};

export default Services;
