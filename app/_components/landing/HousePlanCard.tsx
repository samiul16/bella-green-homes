"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ViewMode } from "../_types/type";
import { HOUSE_DATA } from "./HousePlanCardData";
import HouseCardUI from "./HousePlanCardUI";

function HousePlanCard() {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.FACADE);

  // Carousel State - Simple index tracking for demo purposes.
  // In a real infinite carousel, we'd use modulus math.
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const totalItems = HOUSE_DATA.length;

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    <div className="pt-10 pb-32 overflow-x-hidden font-sans">
      {/* Sticky Header / Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-b border-slate-200 transition-all duration-300">
        <div className="max-w-8xl mx-auto px-6 lg:px-18 h-20 flex items-center justify-between">
          {/* Left: View Mode Toggles */}
          <div className="flex gap-8 h-full relative">
            <button
              onClick={() => setViewMode(ViewMode.FACADE)}
              className={`relative h-full flex items-center text-lg font-medium transition-colors cursor-pointer ${
                viewMode === ViewMode.FACADE
                  ? "text-brand-dark border-b-2 border-b-(--primary)"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              By Facade
              {viewMode === ViewMode.FACADE && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-brand-red"
                />
              )}
            </button>
            <button
              onClick={() => setViewMode(ViewMode.FLOORPLAN)}
              className={`relative h-full flex items-center text-lg font-medium transition-colors cursor-pointer ${
                viewMode === ViewMode.FLOORPLAN
                  ? "text-brand-dark border-b-2 border-b-(--primary)"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              By Floorplan
              {viewMode === ViewMode.FLOORPLAN && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-brand-red"
                />
              )}
            </button>
          </div>

          {/* Center: Main CTA */}
          <div className="hidden md:block">
            <button className="bg-(--primary) hover:bg-(--primary)/80 text-slate-100 border border-gray-200 px-8 py-3 rounded-full text-brand-red font-semibold hover:border-brand-red shadow transition-all duration-300 cursor-pointer">
              View Home Designs
            </button>
          </div>

          {/* Right: Navigation Controls */}
          <div className="flex items-center gap-6">
            <span className="text-gray-500 font-medium text-lg tracking-wider">
              <span className="text-brand-dark font-bold">
                0{startIndex + 1}
              </span>{" "}
              / {totalItems < 10 ? `0${totalItems}` : totalItems}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 border border-transparent hover:border-gray-200 shadow hover:shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 border border-transparent hover:border-gray-200 shadow hover:shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <ArrowRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-8xl mx-auto px-2 lg:px-12 py-12">
        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <motion.div
            key={startIndex}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-0 gap-y-12"
            initial={{
              opacity: 0,
              x: direction > 0 ? 100 : -100,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: direction > 0 ? -100 : 100,
              scale: 0.95,
            }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing curve
            }}
          >
            {[0, 1, 2].map((offset) => {
              const itemIndex = (startIndex + offset) % totalItems;
              const house = HOUSE_DATA[itemIndex];
              return (
                <HouseCardUI
                  key={`${house.id}-${viewMode}`}
                  house={house}
                  viewMode={viewMode}
                />
              );
            })}
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default HousePlanCard;
