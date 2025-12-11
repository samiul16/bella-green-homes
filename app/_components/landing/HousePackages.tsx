"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Armchair,
  ArrowLeft,
  ArrowRight,
  Bath,
  BedDouble,
  Car,
  Home,
  Plus,
  Ruler,
} from "lucide-react";
import { Playfair_Display, Inter } from "next/font/google";

// Initialize Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const packages = [
  {
    id: 1,
    address: "Lot 3029 Proposed Road, Catherine Hill Bay, Nsw 2281",
    price: "$1,757,600",
    image: "/landing/australian-houses.jpg",
  },
  {
    id: 2,
    address: "Lot 120 Proposed Road, Heatherbrae, Nsw 2324",
    price: "$1,083,100",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
];

const HousePackages = () => {
  return (
    <section
      className={`w-full bg-[#FAF9F6] text-[#1a1a1a] pt-24 ${inter.className}`}
    >
      {/* --- TOP HEADER SECTION --- */}
      <div className="max-w-8xl mx-auto px-6 md:px-16 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${playfair.className} text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#2d2d2d]`}
          >
            Discover our House <br />& Land packages
          </motion.h2>

          {/* Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-sm md:text-base leading-relaxed space-y-6 max-w-xl lg:ml-auto"
          >
            <p>
              With our stunning selection of house & land packages, we make
              building your dream home easy. Home builders in Sydney, the
              Central Coast, Newcastle, Hunter Valley, Illawarra and Mid North
              Coast get a stylish, architecturally designed Bella Green Homes
              and a block of land all wrapped up in one great-looking bundle,
              full of value.
            </p>
            <p>
              We know location is important to house builders in NSW, Australia,
              so discover the lifestyle opportunities available at highly
              sought-after estates we have partnered with to bring your dream
              house and land package to life.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- CONTROL BAR --- */}
      <div className="border-t border-b border-[#E5E5E5] bg-[#FAF9F6] sticky top-0 z-10">
        <div className="max-w-8xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
          {/* Tabs */}
          <div className="flex h-full">
            <button className="relative h-full px-2 mr-6 text-sm font-medium text-black flex items-center cursor-pointer">
              House and Land Packages
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-(--primary)"></span>
            </button>
            <button className="h-full px-2 text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center cursor-pointer">
              Estates
            </button>
          </div>

          {/* Center Button */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <button className="bg-(--primary) hover:bg-(--primary)/80 text-slate-100 border border-gray-200 px-8 py-3 rounded-full text-brand-red font-semibold hover:border-brand-red shadow transition-all duration-300 cursor-pointer">
              View All Packages
            </button>
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-4 text-gray-400 text-xs tracking-widest font-medium">
            <span>01 / 09</span>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer shadow-xs">
                <ArrowLeft size={14} />
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer shadow-xs">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-8xl px-4 md:px-16 mx-auto grid grid-cols-1 md:grid-cols-2 border-b border-[#E5E5E5]">
        {packages.map((item, index) => (
          <div
            key={item.id}
            className={`group relative p-6 md:p-12 lg:p-16 flex flex-col cursor-pointer transition-all duration-500
        ${index === 0 ? "md:border-r border-[#E5E5E5]" : ""}
        bg-white/80 hover:bg-(--primary)/60
      `}
          >
            {/* ───── TITLE (moves inside image bottom on hover) ───── */}
            <h3
              className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl text-[#2d2d2d] mb-4 leading-tight
          transition-all duration-500
          group-hover:text-white
          group-hover:absolute group-hover:bottom-6 group-hover:left-6 group-hover:z-20
        `}
            >
              {item.address}
            </h3>

            {/* ───── PRICE (hide on hover) ───── */}
            <p className="text-xl font-bold text-[#1a1a1a] mb-10 transition-all duration-300 group-hover:opacity-0">
              {item.price}
            </p>

            {/* ───── SPECS (show on hover where title was) ───── */}
            <div
              className="opacity-0 group-hover:opacity-100 transition-all duration-500
          group-hover:mb-6
        "
            >
              <div className="flex items-center justify-between py-6 border-b border-gray-200 text-gray-700 mt-2">
                <SpecItem icon={BedDouble} count={2} />
                <SpecItem icon={Bath} count={2} />
                <SpecItem icon={Home} count={1} />
                <SpecItem icon={Armchair} count={4} />
                <SpecItem icon={Car} count={1} />

                <div className="flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-gray-400 stroke-[1.5]" />
                  <span className="text-lg font-medium">{1200}m</span>
                </div>
              </div>
            </div>

            {/* ───── IMAGE ───── */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={item.image}
                alt="House Design"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Compare Button */}
              <div className="absolute bottom-0 right-0 z-20">
                <div className="bg-white group-hover:bg-black text-black group-hover:text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-colors duration-300">
                  Compare <Plus size={14} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SpecItem = ({
  icon: Icon,
  count,
}: {
  icon: React.ComponentType<{ className?: string }>;
  count: number;
}) => (
  <div className="flex items-center gap-3">
    <Icon className="w-6 h-6 text-gray-600 stroke-[1.2]" />
    <span className="text-xl font-medium text-gray-800">{count}</span>
  </div>
);

export default HousePackages;
