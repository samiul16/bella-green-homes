"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, History, ArrowUpRight } from "lucide-react";

const BrandMetaSection = () => {
  return (
    <section className="w-full bg-[#FAF9F6] py-24 border-t border-[#E5E5E5]">
      <div className="max-w-8xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* --- Left Column: Big Statement --- */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 block"
            >
              Our Footprint
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#2d2d2d] leading-[1.05]"
            >
              Defining the <br />
              <span className="text-[#12a807]">Sydney</span> Skyline.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed"
            >
              Headquartered in the heart of the Sydney Metropolitan area, we
              bring local expertise and premium architectural standards to every
              suburb we touch.
            </motion.p>
          </div>

          {/* --- Right Column: Stats/Info Cards --- */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 ">
            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-10 border border-[#E5E5E5] flex flex-col justify-between aspect-square group"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-[#FAF9F6] group-hover:bg-[#12a807]/10 transition-colors duration-500">
                  <MapPin className="w-6 h-6 text-[#1a1a1a] group-hover:text-[#12a807] transition-colors" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-black transition-all" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Location
                </p>
                <h4 className="font-serif text-3xl text-black">
                  Sydney <br />
                  Metropolitan
                </h4>
              </div>
            </motion.div>

            {/* Year Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: 0.1 }}
              className="bg-[#1a1a1a] p-10 flex flex-col justify-between aspect-square group"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white/10 group-hover:bg-[#12a807] transition-colors duration-500">
                  <History className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Established
                </p>
                <h4 className="font-serif text-5xl text-white">2021</h4>
                <p className="text-gray-400 text-xs mt-2 uppercase tracking-tighter">
                  Building Excellence Since Day One
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- Bottom Scrolling Marquee (Optional Visual Element) --- */}
        <div className="mt-24 pt-12 border-t border-[#E5E5E5] overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee group">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center space-x-12 px-6">
                <span className="text-4xl md:text-5xl font-serif text-gray-500">
                  Sydney Metro
                </span>
                <span className="w-3 h-3 rounded-full bg-[#12a807]"></span>
                <span className="text-4xl md:text-5xl font-serif text-gray-500">
                  Est. 2021
                </span>
                <span className="w-3 h-3 rounded-full bg-[#12a807]"></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BrandMetaSection;
