"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ClipboardCheck,
  HeartHandshake,
  PencilRuler,
  Home,
  Plus,
} from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";

// Initialize Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

const features = [
  {
    icon: <Home size={32} strokeWidth={1} />,
    title: "One stop shop",
    desc: "We have it all covered thanks to our in house experts offering specialised services in Finance, Conveyancing and Interior Design. Our services give you access to a large range of home loans.",
  },
  {
    icon: <ClipboardCheck size={32} strokeWidth={1} />,
    title: "Free quote and site inspection",
    desc: "At Bella Green when we say FREE, we mean it! You get a FREE site inspection and a FREE quote*, so you know the cost of your new home BEFORE you pay us any money.",
  },
  {
    icon: <HeartHandshake size={32} strokeWidth={1} />,
    title: "Value for money",
    desc: "We're proud to offer standard inclusions that other builders call premium, so you can start building with more already included in your new Bella Green home. Commitment to quality and unbeatable value.",
  },
  {
    icon: <PencilRuler size={32} strokeWidth={1} />,
    title: "Personalise your home",
    desc: "Our range of architecturally designed homes allow you to personalise your plan to your lifestyle. Work with our team to ensure the design meets the specific needs of your family.",
  },
];

const bottomCards = [
  {
    title: "Love where you live?",
    desc: "Get more Bella for your money. Discover our knockdown rebuild process, the cost of a knockdown rebuild could be more affordable than you think!",
    image: "/landing/5.avif",
    hasCompare: false,
  },
  {
    title: "MyChoice Home Loans",
    desc: "New home builders, we are here to find you the right home loan while you relax and focus on the good stuff. As a leading house builder, we remove the stress of finding finance.",
    image: "/landing/4.avif",
    hasCompare: true,
  },
];

const WhyBellaGreen = () => {
  return (
    <section
      className={`w-full bg-[#FAF9F6] text-[#1a1a1a] ${inter.className}`}
    >
      {/* =======================
          TOP SECTION
      ======================== */}
      <div className="border-b border-[#E5E5E5] pt-24">
        <div className="max-w-8xl mx-auto px-6 md:px-16">
          {/* Header Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12"
          >
            {/* Left: Title & Button */}
            <div className="max-w-xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl text-[#2d2d2d] leading-tight mb-8`}
              >
                Why should you <br /> choose Bella Green Homes?
              </motion.h2>
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-2 border border-gray-400 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#12a807] hover:text-white hover:border-[#12a807] transition-colors cursor-pointer"
              >
                Contact
              </motion.button>
            </div>

            {/* Right: Description & Controls */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col justify-between h-full lg:max-w-md"
            >
              <p className="text-base text-gray-500 leading-relaxed mb-8">
                At Bella Green, we keep the Australian dream alive by helping
                people find their place in the world. We believe in changing the
                perception of the home building industry by cutting through the
                clutter and jargon to deliver a simpler way to own a home.
              </p>

              {/* Controls */}
              <div className="flex items-center justify-end gap-4 text-xs font-medium text-gray-400">
                <span>03 / 06</span>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-black transition-colors shadow-xs cursor-pointer"
                  >
                    <ArrowLeft size={14} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-black transition-colors cursor-pointer shadow-xs"
                  >
                    <ArrowRight size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid (Horizontal Scroll look) */}
        <div className="max-w-8xl mx-auto px-6 md:px-16 border-t border-[#E5E5E5]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-[#E5E5E5]">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
                className="p-8 border-r border-[#E5E5E5] min-h-[300px] flex flex-col gap-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.15 + 0.3,
                    ease: "backOut",
                  }}
                  className="w-12 h-12 flex items-center justify-center text-[#2d2d2d]"
                >
                  {item.icon}
                </motion.div>
                <h3 className={`${playfair.className} text-2xl text-[#2d2d2d]`}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* =======================
          BOTTOM SECTION
      ======================== */}
      <div className="border-b border-[#E5E5E5]">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
          {bottomCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.2,
                ease: "easeOut",
              }}
              className="group relative flex flex-col items-center text-center px-6 md:px-16 py-20 transition-all duration-300 hover:bg-(--primary)/60"
            >
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.2 + 0.3,
                  ease: "easeOut",
                }}
                className="max-w-lg mx-auto mb-12 z-10"
              >
                <h3
                  className={`${playfair.className} text-3xl md:text-4xl text-[#2d2d2d] mb-6 group-hover:text-white transition-colors duration-300`}
                >
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {card.desc}
                </p>
              </motion.div>

              {/* Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.2 + 0.4,
                  ease: "easeOut",
                }}
                className="relative w-full max-w-lg aspect-square md:aspect-4/3 overflow-hidden rounded-sm shadow-xs"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 shadow-xs"
                />

                {/* Compare Button (Only for specific cards if needed, visible on hover) */}
                {card.hasCompare && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.2 + 0.6,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute bottom-0 right-0 bg-white px-4 py-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-100 cursor-pointer transition-opacity opacity-100 z-10 rounded-tl-lg"
                  >
                    Compare <Plus size={12} />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBellaGreen;
