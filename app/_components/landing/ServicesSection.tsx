"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Layers,
  Copy,
  Building2,
  Wand2,
  UserCheck,
  Users,
  ArrowRight,
  Plus,
} from "lucide-react";
import Image from "next/image";

// --- Configuration & Data ---
const services = [
  {
    id: 1,
    title: "Single Storey Homes",
    description:
      "Designed for effortless flow and modern living, our single-storey designs maximize space and natural light.",
    image: "/landing/service-1.avif", // Replace with your images
    icon: Home,
    tag: "Popular",
  },
  {
    id: 2,
    title: "Double Storey Homes",
    description:
      "Elevated living for growing families. Striking street appeal combined with intelligent upstairs-downstairs zoning.",
    image: "/landing/service-2.avif",
    icon: Layers,
    tag: "Spacious",
  },
  {
    id: 3,
    title: "Duplex Designs",
    description:
      "Maximize your land's potential with high-yield duplex solutions that don't compromise on luxury or style.",
    image: "/landing/service-3.avif",
    icon: Copy,
    tag: "Investment",
  },
  {
    id: 4,
    title: "Townhouses",
    description:
      "Sophisticated multi-dwelling developments designed for urban environments and modern community lifestyles.",
    image: "/landing/service-4.avif",
    icon: Building2,
    tag: "Urban",
  },
  {
    id: 5,
    title: "Custom Build Homes",
    description:
      "Your vision, our expertise. We work with you to design and construct a truly unique home tailored to your life.",
    image: "/landing/service-5.avif",
    icon: Wand2,
    tag: "Bespoke",
  },
  {
    id: 6,
    title: "Granny Flats",
    description:
      "Self-contained secondary dwellings perfect for extended family, guest accommodation, or rental income.",
    image: "/landing/service-6.avif",
    icon: UserCheck,
    tag: "Versatile",
  },
  {
    id: 7,
    title: "NDIS Group Homes",
    description:
      "Specialized, high-quality Specialist Disability Accommodation (SDA) designed for safety, comfort, and independence.",
    image: "/landing/service-7.avif",
    icon: Users,
    tag: "Specialized",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-[#FAF9F6] text-[#1a1a1a] py-24 font-sans">
      {/* --- Header Content --- */}
      <div className="max-w-8xl mx-auto px-6 md:px-16 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-5xl md:text-7xl lg:text-7xl leading-[1.1] text-[#2d2d2d]"
            >
              Building for <br />
              every lifestyle.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl lg:ml-auto"
          >
            <p>
              From affordable first homes to high-yield investment properties
              and custom-designed luxury residences, Bella Green Homes brings
              unparalleled craftsmanship to every project across New South
              Wales.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- Services Grid --- */}
      <div className="max-w-8xl mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E5E5E5]">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="group relative border-r border-b border-[#aeacac] bg-white overflow-hidden cursor-pointer"
          >
            <div className="p-8 md:p-12 flex flex-col h-full min-h-[450px] transition-colors duration-500 group-hover:bg-[#F2F0EB]">
              {/* --- Icon & Tag --- */}
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-[#FAF9F6] rounded-xl group-hover:bg-white transition-colors duration-500">
                  <service.icon className="w-12 h-12 text-[#1a1a1a] stroke-[1.25]" />
                </div>
                {/* <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                  {service.tag}
                </span> */}
              </div>

              {/* --- Content Area --- */}
              <div className="relative flex-grow">
                {/* Normal State */}
                <div className="transition-all duration-500">
                  <h3 className="font-serif text-5xl text-black mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Hover State: Revealed Image/CTA */}
                <div className="absolute inset-0 opacity-0 translate-y-8 transition-all duration-500">
                  <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest group/btn">
                    Explore Service
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/btn:translate-x-2"
                    />
                  </button>
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs font-medium text-gray-400">
                  0{index + 1}
                </span>
                <Plus
                  size={16}
                  className="text-gray-300 group-hover:rotate-90 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        ))}

        {/* --- Final CTA Card --- */}
        <div className="group relative border-r border-b border-[#E5E5E5] bg-[#1a1a1a] flex items-center justify-center p-12 text-center overflow-hidden">
          <motion.div whileHover={{ scale: 1.05 }} className="relative z-10">
            <h3 className="font-serif text-3xl text-white mb-6">
              Have a specific <br /> vision in mind?
            </h3>
            <button className="bg-white text-black px-8 py-4 rounded-full text-sm font-bold hover:bg-[#12a807] hover:text-white transition-all duration-300">
              Contact Our Architects
            </button>
          </motion.div>
          {/* Subtle background pattern/texture could go here */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
