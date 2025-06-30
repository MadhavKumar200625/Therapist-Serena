"use client"
import Hero from "@/components/Hero";
import About from "@/components/About";
import QuoteSection from "@/components/QuoteSection"
import Services from "@/components/Services"
import FeesSection from "@/components/FeesSection"
import FaqSection from "@/components/FaqSection"


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <div className="mt-10 bg-gray-400 h-0.5  m-14"></div>
      <div className="bg-[#f2f0e8] ">
        <QuoteSection></QuoteSection>

        <div className="mt-10 bg-gray-400 h-0.5  m-14"></div>
        <Services></Services>

        <FeesSection></FeesSection>

        <FaqSection></FaqSection>
      </div>
    </div>
  );
}
