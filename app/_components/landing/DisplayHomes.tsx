/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Share2,
  BedDouble,
  Bath,
  Car,
  Maximize,
  Home,
} from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";

// Initialize Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// Mock Data matching the image
const locations = [
  {
    id: 1,
    name: "Hereford Hill",
    address: "11 Tillage Drive, Lochinvar NSW 2321",
    homesOnDisplay: 2,
    houseName: "Oasis 37",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    stats: { bed: 4, bath: 3, living: 2, garage: 2, sq: "17m" },
  },
  {
    id: 2,
    name: "Homeworld Box Hill",
    address: "4 Noah St, Box Hill NSW 2765",
    homesOnDisplay: 5,
    houseName: "Charisma 37",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop",
    stats: { bed: 5, bath: 2, living: 1, garage: 4, sq: "12.5m" },
  },
  {
    id: 3,
    name: "HomeWorld Leppington",
    address: "35 Berkshire Circuit, Leppington NSW 2179",
    homesOnDisplay: 4,
    houseName: "Rhapsody 22",
    image:
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2070&auto=format&fit=crop",
    stats: { bed: 4, bath: 2, living: 0, garage: 2, sq: "12.5m" },
  },
  {
    id: 4,
    name: "HomeWorld Oran Park",
    address: "22 Allambie Circuit, Oran Park NSW 2570",
    homesOnDisplay: 4,
    houseName: "Symphony 35",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
    stats: { bed: 4, bath: 2, living: 2, garage: 2, sq: "15m" },
  },
];

const DisplayHomes = () => {
  return (
    <section
      className={`w-full bg-[#333333] text-white py-24 ${inter.className}`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* --- HEADER SECTION --- */}
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 mb-16">
          <div className="flex flex-col xl:flex-row justify-between items-start gap-12">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${playfair.className} text-5xl md:text-6xl lg:text-7xl leading-tight max-w-2xl`}
            >
              We would love to welcome you to one of our display homes
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl text-gray-300 text-sm md:text-base leading-relaxed space-y-4"
            >
              <p>
                Open the door to NSW's most exciting and vibrant new house
                builder, Bella Green Homes.
              </p>
              <p>
                Step inside and experience Mojo's architecturally designed new
                homes at our display home villages near you across NSW. You'll
                find our home builders near you in Sydney, the Central Coast,
                Newcastle, Hunter Valley or the Illawarra and South Coast.
              </p>
              <p>
                Come and request a FREE quotation and site inspection. Discover
                how you get more experience, knowledge and inclusions in your
                new home when you build with NSW's award-winning, most exciting
                and vibrant new house builder.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- CONTROL BAR --- */}
        <div className="border-t border-white/20">
          <div className="max-w-[1500px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
            {/* Left Tab */}
            <div className="h-full flex items-center border-t-2 border-white/20 -mt-[1px]">
              <span className="font-medium text-sm">By Location</span>
            </div>

            {/* Center Button */}
            <div className="hidden md:block">
              <button className="bg-white text-[#D92323] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                View All Locations
              </button>
            </div>

            {/* Right Pagination */}
            <div className="flex items-center gap-4 text-xs font-medium tracking-widest">
              <span>01 / 12</span>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <ArrowLeft size={16} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="border-t border-white/20 overflow-hidden">
          {/* We use a grid that forces columns to be wide enough to replicate the horizontal scroll look if screen is small */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20 border-b border-white/20">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="group relative flex flex-col h-full bg-[#333333]"
              >
                {/* Top Info */}
                <div className="p-8 pb-4 min-h-[140px]">
                  <div className="flex justify-between items-start mb-4">
                    <h3
                      className={`${playfair.className} text-2xl leading-tight max-w-[60%]`}
                      dangerouslySetInnerHTML={{
                        __html: loc.name.replace(" ", "<br/>"),
                      }}
                    />
                    <button className="bg-(--primary) hidden group-hover:block text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-wide transition-all ">
                      View Display Location
                    </button>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-[200px]">
                    {loc.address}
                  </p>
                </div>

                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] bg-black group-hover:opacity-90 transition-opacity">
                  {/* Top Label */}
                  <div className="absolute top-0 left-0 w-full text-center py-2 bg-black/40 backdrop-blur-sm z-10">
                    <span className="text-[10px] font-bold tracking-widest uppercase">
                      {loc.homesOnDisplay} Homes On Display
                    </span>
                  </div>

                  {/* Main Image */}
                  <img
                    src={loc.image}
                    alt={loc.houseName}
                    className="w-full h-full object-cover"
                  />

                  {/* Floating Icons (Top Right) */}
                  <div className="absolute top-12 right-4 flex flex-col gap-2">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
                      <Heart size={14} />
                    </button>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
                      <Share2 size={14} />
                    </button>
                  </div>

                  {/* Bottom Overlay Info */}
                  <div className="absolute bottom-0 left-0 w-full p-4 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent">
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
                      <ArrowLeft size={16} />
                    </button>

                    <span className={`${playfair.className} text-2xl`}>
                      {loc.houseName}
                    </span>

                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Bottom Stats Footer */}
                <div className="mt-auto px-6 py-4 flex items-center justify-between text-gray-300 text-xs">
                  <div className="flex items-center gap-2">
                    <BedDouble size={18} strokeWidth={1.5} />
                    <span>{loc.stats.bed}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={18} strokeWidth={1.5} />
                    <span>{loc.stats.bath}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home size={18} strokeWidth={1.5} />
                    <span>{loc.stats.living}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car size={18} strokeWidth={1.5} />
                    <span>{loc.stats.garage}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize size={18} strokeWidth={1.5} />
                    <span>{loc.stats.sq}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayHomes;
