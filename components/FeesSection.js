"use client";

import Image from "next/image";

import React from "react";
import scrollFadeIn from "../hooks/scrollFadeIn";

const FeesSection = () => {
  const [ref, visible] = scrollFadeIn();

  return (
    <div
      className={`px-4 py-12 mx-auto fade-in bg-[#93b0b0] mt-10 mb-20 ${
        visible ? "visible" : ""
      }`}
      ref={ref}
    >
      <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-semibold text-gray-800 mb-8">Rates & Insurance</h2>

    <div className="mb-6">
      <h3 className="text-2xl font-medium text-gray-700 mb-2">Session Fees</h3>
      <p className="text-gray-600">Individual Therapy – <strong>$200</strong> per session</p>
      <p className="text-gray-600">Couples Therapy – <strong>$240</strong> per session</p>
      <p className="text-gray-600">Psychodiagnostic Evaluation – <strong>$225</strong></p>
    </div>

    <div className="mb-6">
      <h3 className="text-xl font-medium text-gray-700 mb-2">Payment Options</h3>
      <p className="text-gray-600">
        I accept both private pay and insurance. I am in-network with <strong>BCBS</strong> and <strong>Aetna</strong>.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-medium text-gray-700 mb-2">Out-of-Network Support</h3>
      <p className="text-gray-600">
        For clients with out-of-network insurance plans, I’ve partnered with Mentaya to help you check eligibility for reimbursement of my services.
      </p>
    </div>
  </div>
    </div>
  );
};

export default FeesSection;
