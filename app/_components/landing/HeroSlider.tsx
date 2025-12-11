"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  PanInfo,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import { ChevronLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { MediaType, SlideData } from "../../_types/type";
import ResponsiveVideo from "../ui/ResponsiveVideo";

interface HeroSliderProps {
  slides: SlideData[];
  autoPlayInterval?: number;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  autoPlayInterval = 6000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  // Use ReturnType<typeof setInterval> to be environment agnostic (Node vs Browser) and avoid NodeJS namespace error
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Parallax Text Effect relative to scroll
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + newDirection;
        if (nextIndex < 0) nextIndex = slides.length - 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        return nextIndex;
      });
    },
    [slides.length]
  );

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isDragging) {
        paginate(1);
      }
    }, autoPlayInterval);
  }, [autoPlayInterval, isDragging, paginate]);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);
    const threshold = 50;
    if (info.offset.x < -threshold) {
      paginate(1);
    } else if (info.offset.x > threshold) {
      paginate(-1);
    }
    startAutoPlay();
  };

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1, // Start slightly zoomed in for parallax feel
      zIndex: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 400, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 6, ease: "linear" as const }, // Slow scale effect while active
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.8, ease: "easeOut" as const },
    },
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black text-white group"
      // onMouseEnter={stopAutoPlay}
      // onMouseLeave={startAutoPlay}
    >
      {/* Slider Content */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2} // Adds resistance
          onDragStart={() => {
            setIsDragging(true);
            stopAutoPlay();
          }}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-pan-y"
        >
          {/* Media Layer */}
          <div className="absolute inset-0 w-full h-full">
            {currentSlide.type === MediaType.VIDEO ? (
              <ResponsiveVideo
                src={currentSlide.src}
                posterImage={currentSlide.posterImage}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={currentSlide.src}
                alt={currentSlide.title || "Hero slide"}
                fill
                priority={currentIndex === 0}
                quality={90}
                sizes="100vw"
                className="object-cover"
              />
            )}

            {/* Scrim / Overlay for text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-95" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Persistent UI Elements (Text & Controls) */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-16 lg:px-24 max-w-8xl mx-auto">
        {/* Main Text Content */}
        <motion.div
          style={{ y: yText }}
          className="w-full max-w-4xl z-10 mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentIndex}`}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              variants={textVariants}
              className="space-y-6"
            >
              <p className="text-lg md:text-2xl text-gray-100 font-sans tracking-wide leading-relaxed text-shadow-2xs">
                {currentSlide.subtitle}
              </p>

              <h1 className="text-6xl md:text-8xl lg:text-8xl 3xl:text-9xl! font-serif leading-[0.9] text-gray-100">
                {currentSlide.title}
              </h1>

              <div className="pt-8 pointer-events-auto inline-block">
                <button className="group relative px-8 py-3 rounded-full border border-white/40 bg-white/5 backdrop-blur-2xl text-white overflow-hidden transition-all duration-300 hover:border-white hover:bg-white hover:text-black cursor-pointer">
                  <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide uppercase text-sm">
                    {currentSlide.ctaText}
                  </span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Bottom Bar: Pagination & Navigation */}
        <div className="w-full flex justify-between items-end border-t border-white/20 pt-6 z-1">
          {/* Pagination Counter */}
          <div className="text-sm font-medium tracking-widest font-sans">
            <span className="text-white">0{currentIndex + 1}</span>
            <span className="text-white/50 mx-2">/</span>
            <span className="text-white/50">0{slides.length}</span>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 pointer-events-auto">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white transition-all hover:bg-white hover:text-black hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center border border-white text-black transition-all hover:bg-gray-200 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Next Slide"
            >
              <ArrowRight size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
