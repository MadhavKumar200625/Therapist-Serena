"use client"
import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
   <section className="relative h-[90vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center px-6 text-center select-none">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">
            Compassionate Care for a Healthier Mind
          </h1>
          <h2 className="text-xl md:text-2xl mb-6">
            Dr. Serena Blake, PsyD — Personalized therapy in Los Angeles & online
          </h2>
          <Link
            href="contact"
            className="inline-block bg-white text-black px-6 py-3 rounded-full text-xl font-medium hover:bg-gray-200 transition "
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero