"use client";


import React from "react";
import scrollFadeIn from "../hooks/scrollFadeIn";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";


const FaqSection = () => {
  const [ref, visible] = scrollFadeIn();

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div
      className={`px-4 py-12 max-w-6xl mx-auto fade-in  ${
        visible ? "visible" : ""
      }`}
      ref={ref}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
        <ul className="space-y-6">
          {faqs.map((faq, index) => (
            <li key={index} className="border-b pb-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400">
                  {openIndex === index ? (
                    <ChevronUpIcon className="w-4 h-4 text-gray-600" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 text-gray-600" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FaqSection;

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission."
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom."
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required."
  }
];
