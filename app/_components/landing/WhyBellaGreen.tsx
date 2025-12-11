"use client";

import React from "react";
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
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    hasCompare: false,
  },
  {
    title: "MyChoice Home Loans",
    desc: "New home builders, we are here to find you the right home loan while you relax and focus on the good stuff. As a leading house builder, we remove the stress of finding finance.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
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
      <div className="border-b border-[#E5E5E5] pt-24 pb-12">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
            {/* Left: Title & Button */}
            <div className="max-w-md">
              <h2
                className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl text-[#2d2d2d] leading-tight mb-8`}
              >
                Why should you <br /> choose Bella Green Homes?
              </h2>
              <button className="px-8 py-2 border border-gray-400 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#1B4D3E] hover:text-white hover:border-[#1B4D3E] transition-colors">
                Contact
              </button>
            </div>

            {/* Right: Description & Controls */}
            <div className="flex flex-col justify-between h-full lg:max-w-md">
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                At Bella Green, we keep the Australian dream alive by helping
                people find their place in the world. We believe in changing the
                perception of the home building industry by cutting through the
                clutter and jargon to deliver a simpler way to own a home.
              </p>

              {/* Controls */}
              <div className="flex items-center justify-end gap-4 text-xs font-medium text-gray-400">
                <span>03 / 06</span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-black transition-colors">
                    <ArrowLeft size={14} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-black transition-colors">
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid (Horizontal Scroll look) */}
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 border-t border-[#E5E5E5]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-[#E5E5E5]">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="p-8 border-r border-[#E5E5E5] min-h-[300px] flex flex-col gap-6"
              >
                <div className="w-12 h-12 flex items-center justify-center text-[#2d2d2d]">
                  {item.icon}
                </div>
                <h3 className={`${playfair.className} text-2xl text-[#2d2d2d]`}>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
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
            <div
              key={idx}
              className="group relative flex flex-col items-center text-center px-6 md:px-16 py-20 transition-colors duration-500 hover:bg-(--primary)/40"
            >
              {/* Text Content */}
              <div className="max-w-lg mx-auto mb-12 z-10">
                <h3
                  className={`${playfair.className} text-3xl md:text-4xl text-[#2d2d2d] mb-6 group-hover:text-white transition-colors duration-500`}
                >
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                  {card.desc}
                </p>
              </div>

              {/* Image Container */}
              <div className="relative w-full max-w-md aspect-square md:aspect-[4/3] overflow-hidden rounded-sm shadow-sm">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                {/* Compare Button (Only for specific cards if needed, visible on hover) */}
                {card.hasCompare && (
                  <div className="absolute bottom-0 right-0 bg-white px-4 py-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-100 cursor-pointer transition-opacity opacity-100">
                    Compare <Plus size={12} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBellaGreen;
