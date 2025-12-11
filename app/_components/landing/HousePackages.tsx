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
import Image from "next/image";

// --- Configuration & Data ---
const packages = [
  {
    id: 1,
    address: "Lot 3029 Proposed Road, Catherine Hill Bay, Nsw 2281",
    price: "$1,757,600",
    image: "/landing/5.avif",
  },
  {
    id: 2,
    address: "Lot 120 Proposed Road, Heatherbrae, Nsw 2324",
    price: "$1,083,100",
    image: "landing/4.avif",
  },
];

// --- Sub-components ---
const SpecItem = ({
  icon: Icon,
  count,
}: {
  icon: React.ComponentType<{ className?: string }>;
  count: number;
}) => (
  <div className="flex items-center gap-2">
    <Icon className="w-5 h-5 text-gray-500 stroke-[1.5]" />
    <span className="text-lg font-medium text-gray-700">{count}</span>
  </div>
);

const HousePackages = () => {
  return (
    <section className="w-full bg-[#FAF9F6] text-[#1a1a1a] pt-24 font-sans">
      {/* --- Header Content --- */}
      <div className="max-w-8xl mx-auto px-6 md:px-16 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#2d2d2d]"
          >
            Discover our House <br />& Land packages
          </motion.h2>

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
              and a block of land all wrapped up in one great-looking bundle.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- Filter Bar --- */}
      <div className="border-t border-b border-[#E5E5E5] bg-[#FAF9F6] sticky top-0 z-30">
        <div className="max-w-8xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
          <div className="flex h-full">
            <button className="relative h-full px-2 mr-6 text-sm font-medium text-black flex items-center cursor-pointer">
              House and Land Packages
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-black"></span>
            </button>
            <button className="h-full px-2 text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center cursor-pointer">
              Estates
            </button>
          </div>

          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <button className="bg-[#12a807] hover:bg-[#12a807]/80 text-white px-8 py-3 rounded-full text-sm font-semibold shadow transition-all duration-300 cursor-pointer">
              View All Packages
            </button>
          </div>

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

      {/* --- Cards Grid --- */}
      <div className="max-w-8xl px-4 md:px-16 mx-auto grid grid-cols-1 md:grid-cols-2 border-b border-[#E5E5E5]">
        {packages.map((item, index) => (
          <div
            key={item.id}
            className={`group relative p-6 md:p-14 flex flex-col cursor-pointer transition-colors duration-500
              ${index === 0 ? "md:border-r border-[#E5E5E5]" : ""}
              bg-white/80 hover:bg-[#F2F0EB]`}
          >
            {/* 
              STABILITY FIX: 
              We use a defined height container for the text area. 
              Instead of moving elements with `position: absolute` which causes reflow (jumping),
              we cross-fade between the "Normal State" content and the "Hover State" content.
            */}
            <div className="relative min-h-[160px] md:min-h-[200px] mb-8 flex flex-col justify-start">
              {/* --- Normal State: Title & Price (Fades OUT on hover) --- */}
              <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none">
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#2d2d2d] mb-4 leading-tight">
                  {item.address}
                </h3>
                <p className="text-xl font-bold text-[#1a1a1a]">{item.price}</p>
              </div>

              {/* --- Hover State: Specs (Fades IN on hover) --- */}
              <div className="absolute inset-0 flex items-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <div className="w-full">
                  <div className="flex flex-wrap items-center justify-between py-6 border-b border-gray-300 text-gray-700">
                    <SpecItem icon={BedDouble} count={4} />
                    <SpecItem icon={Bath} count={2} />
                    <SpecItem icon={Home} count={1} />
                    <SpecItem icon={Armchair} count={2} />
                    <SpecItem icon={Car} count={2} />
                    <div className="flex items-center gap-2 pl-4 border-l border-gray-300">
                      <Ruler className="w-5 h-5 text-gray-400 stroke-[1.5]" />
                      <span className="text-lg font-medium">1200m²</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Image Container --- */}
            <div className="relative w-full aspect-4/3 overflow-hidden rounded-lg bg-gray-100 shadow-xs transition-transform duration-700 ease-out will-change-transform group-hover:scale-110">
              {/* 
                SMOOTH SCALE FIX:
                1. 'will-change-transform' hints the browser to promote to a new layer.
                2. 'group-hover:scale-105' is subtle. 
                3. We strictly apply overflow-hidden on the parent.
              */}
              <div className="relative w-full h-full transition-transform duration-700 ease-out will-change-transform group-hover:scale-110">
                <Image
                  src={item.image}
                  alt="House Design"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover shadow"
                  priority={index === 0}
                />
              </div>

              {/* Dark Overlay (Fades In) */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* 
                OVERLAY TITLE FIX:
                This is a DUPLICATE of the title. It lives inside the image container.
                It is invisible by default. On hover, it slides up and fades in.
                This creates the illusion the top title moved here, without layout shifts.
              */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 leading-tight drop-shadow-md">
                  {item.address}
                </h3>
              </div>

              {/* Compare Button */}
              <div className="absolute bottom-0 right-0 z-30">
                <button className="bg-white hover:bg-black/80 text-black hover:text-white px-5 py-3 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all duration-300 cursor-pointer rounded-tl-lg">
                  Compare <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HousePackages;
