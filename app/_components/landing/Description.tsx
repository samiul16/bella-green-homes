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
      className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-18 bg-[#FAF9F6]"
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
              Sydney&apos;s choice
              <br />
              for More Joy
              <br />
              since <span className="text-(--primary)">2021</span>
            </h2>
            <div className="mt-6 flex items-center gap-2">
              <span className="h-[1px] w-12 bg-[#12a807]"></span>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Bella Green Homes
              </p>
            </div>
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
              Established in <strong>2021</strong>, Bella Green Homes has
              rapidly become a trusted name across the{" "}
              <strong>Sydney Metropolitan</strong> area. We don&apos;t just
              build houses; we craft bespoke architectural canvases that reflect
              the unique lifestyle and aspirations of modern Sydney residents.
            </p>

            <p
              className={`text-base sm:text-lg leading-relaxed transition-all duration-1000 delay-400 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              From the bustling urban suburbs to the serene coastal pockets of
              the metro region, our thoughtfully designed homes offer an
              unsurpassed flow. Every layout is engineered to elevate everyday
              moments and create a life brimming with freedom and lasting
              memories.
            </p>

            <p
              className={`text-base sm:text-lg leading-relaxed transition-all duration-1000 delay-600 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              Since our founding, we&apos;ve been selective about our
              partnerships, choosing only the most passionate trades and
              consultants who share our commitment to the Sydney community. This
              combination of local expertise, innovative design, and a focus on
              your journey ensures a building experience that exceeds
              expectations. It&apos;s about creating a home that gives you{" "}
              <strong>More Joy</strong>, built by a team that calls Sydney home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
