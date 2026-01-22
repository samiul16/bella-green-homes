"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Target, Award, Users, MapPin, Quote } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import the Map component with SSR disabled
const ContactMap = dynamic(() => import("../_components/ui/ContactMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-100 flex items-center justify-center text-gray-400">
      Loading Map...
    </div>
  ),
});

const AboutPage = () => {
  return (
    <main className="bg-[#FAF9F6] pt-32 pb-24 font-sans overflow-hidden">
      {/* --- Hero Section --- */}
      <section className="max-w-8xl mx-auto px-6 md:px-16 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#12a807] font-bold text-xs uppercase tracking-[0.3em] mb-6 block">
              Established 2021
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#2d2d2d] leading-[1.1] mb-8">
              Building <br /> Excellence in <br />{" "}
              <span className="text-[#12a807]">Sydney.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square w-full bg-gray-200 rounded-sm overflow-hidden shadow-2xl"
          >
            <Image
              src="/landing/5.avif" // Use one of your existing images
              alt="Architectural Achievement"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* --- The Director Section --- */}
      <section className="bg-[#1a1a1a] py-24 px-6 md:px-16 text-white overflow-hidden">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <Quote className="text-[#12a807] w-12 h-12 opacity-50" />
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                &quot;Our mission is to bridge the gap between architectural
                luxury and functional living for every Sydney family.&quot;
              </h2>
              <div className="pt-4">
                <p className="text-xl font-medium">Sarker Mohammad</p>
                <p className="text-[#12a807] text-sm uppercase tracking-widest mt-1">
                  Founder & Principal Director
                </p>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-xl">
                Under the leadership of Sarker Mohammad, Bella Green Homes was
                founded in 2021 with a singular vision: to redefine the
                construction landscape of the Sydney Metropolitan area. By
                focusing on transparency and design-led construction, we have
                quickly become a cornerstone of the local building community.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 border border-white/10 rounded-sm"></div>
              <div className="bg-white/5 p-12 backdrop-blur-sm">
                <h3 className="text-[#12a807] font-bold text-xs uppercase tracking-[0.2em] mb-6">
                  Our Core Commitment
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Since our inception in 2021, we have remained dedicated to the
                  Sydney market. Our plan is simple: to continue delivering the
                  highest standard of residential and specialized construction
                  without compromise.
                </p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="text-3xl font-serif">4+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500">
                    Years of Local <br /> Expertise
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Values Grid (Bento Style) --- */}
      <section className="max-w-8xl mx-auto px-6 md:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-10 border border-[#E5E5E5] flex flex-col justify-between aspect-square md:aspect-auto md:h-80"
          >
            <Building2 className="text-[#12a807] w-8 h-8" />
            <div>
              <h3 className="font-serif text-2xl text-[#2d2d2d] mb-2">
                Sydney Metro
              </h3>
              <p className="text-gray-500 text-sm">
                Dedicated exclusively to the Sydney Metropolitan area, ensuring
                deep local knowledge.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#12a807] p-10 flex flex-col justify-between aspect-square md:aspect-auto md:h-80 text-white"
          >
            <Target className="text-white w-8 h-8" />
            <div>
              <h3 className="font-serif text-2xl mb-2">Est. 2021</h3>
              <p className="text-white/80 text-sm">
                Founded in a new era of construction, we embrace modern
                technology and sustainable practices.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-10 border border-[#E5E5E5] flex flex-col justify-between aspect-square md:aspect-auto md:h-80"
          >
            <Award className="text-[#12a807] w-8 h-8" />
            <div>
              <h3 className="font-serif text-2xl text-[#2d2d2d] mb-2">
                Quality First
              </h3>
              <p className="text-gray-500 text-sm">
                Every project is personally overseen by our director to ensure
                the Bella Green standard.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Location & Map Section --- */}
      <section className="max-w-8xl mx-auto px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12a807]/10 text-[#12a807] rounded-full text-[10px] font-bold uppercase tracking-widest">
              <MapPin size={12} /> Local Headquarters
            </div>
            <h2 className="font-serif text-4xl text-[#2d2d2d]">
              Where we build.
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Based in Claymore, we provide comprehensive building services
              across the entire <strong>Sydney Metropolitan region</strong>. Our
              local presence allows us to manage projects with the speed and
              attention they deserve.
            </p>
            <div className="pt-4">
              <p className="text-sm font-bold text-[#2d2d2d]">
                Claymore Office
              </p>
              <p className="text-sm text-gray-500">
                38 Arkley Ave, Claymore NSW 2559
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 h-[500px] w-full border border-[#E5E5E5] p-2 bg-white shadow-sm relative z-0">
            <ContactMap />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
