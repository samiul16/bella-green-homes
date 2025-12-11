"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";
import Image from "next/image";

// Initialize Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
});
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

const HeroDesigns = () => {
  return (
    <section
      className={`relative w-full h-screen min-h-[700px] overflow-hidden ${inter.className}`}
    >
      {/* --- BACKGROUND IMAGE --- */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/landing/bella-bed.jpg"
          alt="Luxury Home Interior"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Dark Gradient Overlay (Subtle at top, heavy at bottom) */}
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/90" />
      </motion.div>

      {/* --- TOP RIGHT PLUS ICON --- */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="absolute top-8 right-8 bg-white rounded-full p-2 text-black hover:scale-110 transition-transform cursor-pointer z-20"
      >
        <Plus size={20} />
      </motion.button>

      {/* --- MAIN CONTENT --- */}
      <div className="absolute inset-0 flex flex-col justify-end pb-0 md:pb-0">
        {/* HEADLINE (Positioned mid-left) */}
        <div className="max-w-7xl w-full px-6 md:px-12 mb-16 md:mb-24 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`${playfair.className} text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight`}
          >
            New Home <br /> Designs plus <br />
            House & Land packages
          </motion.h1>
        </div>

        {/* --- BOTTOM BAR --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full border-t border-white/20 bg-black/10 backdrop-blur-md"
        >
          <div className="max-w-8xl mx-auto px-6 md:mx-20 py-8 md:py-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8">
            {/* Left: Description Text */}
            <p className="text-white/90 text-sm md:text-base max-w-2xl leading-relaxed font-light">
              Bella Green Home is where inspiration and innovation comes to
              life. Offering new home designs that are a breath of fresh air for
              NSW home builders across Sydney, the Central Coast, Newcastle,
              Hunter Valley, Mid North Coast and the Illawarra region.
            </p>

            {/* Right: Actions */}
            <div className="flex flex-col md:flex-row items-center gap-6 w-full xl:w-auto justify-between xl:justify-end">
              {/* Buttons Group */}
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 bg-white text-green-500 rounded-full font-semibold text-sm tracking-wide shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  View Home Designs
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3.5 bg-transparent border-2 border-white/20 text-white rounded-full font-medium text-sm tracking-wide hover:bg-white/10 transition-colors cursor-pointer"
                >
                  View House & Land
                </motion.button>
              </div>

              {/* Navigation Arrows */}
              <div className="items-center gap-3 flex md:flex">
                <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors cursor-pointer">
                  <ArrowLeft size={20} />
                </button>
                <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors cursor-pointer">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- FLOATING CHAT WIDGET --- */}
      {/* <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="fixed bottom-8 right-8 z-50"
      >
        <button className="w-16 h-16 bg-[#D92323] rounded-3xl rounded-tr-sm flex items-center justify-center text-white shadow-2xl hover:bg-red-700 transition-colors">
          <MessageCircle size={32} fill="white" />
        </button>
      </motion.div> */}
    </section>
  );
};

export default HeroDesigns;
