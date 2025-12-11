"use client";

import { useEffect, useRef, useState } from "react";

export default function Description() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-18"
    >
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Heading */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight text-[#3D3D3D]">
              Home builders
              <br />
              get More Joy
              <br />
              with Bella <span className="text-(--primary)">Green</span> Homes
            </h2>
          </div>

          {/* Right Column - Description Paragraphs */}
          <div className="space-y-6 text-[#3D3D3D]">
            <p
              className={`text-base sm:text-lg leading-relaxed transition-all duration-1000 delay-200 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              At Bella Green Homes, we don&apos;t just build houses, we craft
              dream homes. Our innovative, architectural concepts become a
              canvas for your style.
            </p>

            <p
              className={`text-base sm:text-lg leading-relaxed transition-all duration-1000 delay-400 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              Our thoughtfully designed homes offer an unsurpassed flow,
              designed to elevate everyday moments and create a life brimming
              with fun, freedom, and lasting memories.
            </p>

            <p
              className={`text-base sm:text-lg leading-relaxed transition-all duration-1000 delay-600 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              But a Bella Green home is more than just bricks and mortar.
              We&apos;re selective about who we partner with, choosing
              passionate and dedicated individuals who share our commitment to
              exceptional customer service. This combination of innovative
              design, a talented team, and a focus on your journey ensures a
              building experience that exceeds expectations. It&apos;s about
              creating a home that gives you More Joy, not just a house you live
              in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
