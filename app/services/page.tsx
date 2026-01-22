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
} from "lucide-react";
import Image from "next/image";

// --- Data ---
const services = [
  {
    id: "single-storey",
    title: "Single Storey Homes",
    tagline: "Effortless Living on One Level",
    description:
      "Our single-storey designs are masterclasses in spatial flow. We focus on open-plan layouts that maximize natural light and create a seamless connection between indoor comfort and outdoor entertaining spaces.",
    features: [
      "Open-plan living",
      "Optimized floor plans",
      "Seamless indoor-outdoor flow",
    ],
    icon: Home,
    image: "/landing/5.avif",
  },
  {
    id: "double-storey",
    title: "Double Storey Homes",
    tagline: "Elevated Architectural Presence",
    description:
      "Designed for growing families in the Sydney Metro area, our double-storey homes offer intelligent zoning—separating social hubs from private retreats while providing striking street appeal.",
    features: [
      "Family-centric zoning",
      "Grand entry voids",
      "Multi-generational living options",
    ],
    icon: Layers,
    image: "/landing/2.avif",
  },
  {
    id: "duplex",
    title: "Duplex Designs",
    tagline: "Maximize Your Land's Potential",
    description:
      "A smart choice for Sydney landholders. We create dual-occupancy designs that look like a single luxury residence while providing two independent, high-value homes on one block.",
    features: [
      "Investment optimization",
      "Dual-living privacy",
      "Symmetrical & Asymmetrical designs",
    ],
    icon: Copy,
    image: "/landing/4.avif",
  },
  {
    id: "townhouses",
    title: "Townhouses",
    tagline: "Urban Multi-Dwelling Excellence",
    description:
      "Specializing in multi-unit developments, we help developers and landowners transform residential blocks into sophisticated urban communities without compromising on individual privacy.",
    features: [
      "Development feasibility",
      "Modern urban aesthetics",
      "Efficient site utilization",
    ],
    icon: Building2,
    image: "/landing/5.avif",
  },
  {
    id: "custom",
    title: "Custom Build Homes",
    tagline: "Your Vision, Architecturally Crafted",
    description:
      "Since 2021, our custom division has been turning unique visions into reality. We work with you from the first sketch to the final brick to ensure every corner of the home is 'you'.",
    features: [
      "One-on-one design sessions",
      "Premium material selection",
      "Bespoke architectural detailing",
    ],
    icon: Wand2,
    image: "/landing/2.avif",
  },
  {
    id: "granny-flats",
    title: "Granny Flats",
    tagline: "Versatile Secondary Dwellings",
    description:
      "Whether it's for extra rental income or housing family, our granny flats are designed with the same high standards as our full-scale homes, ensuring quality in a compact footprint.",
    features: [
      "High-yield potential",
      "Self-contained privacy",
      "Quick construction timelines",
    ],
    icon: UserCheck,
    image: "/landing/4.avif",
  },
  {
    id: "ndis",
    title: "NDIS Group Homes",
    tagline: "Specialist Disability Accommodation (SDA)",
    description:
      "We are proud to build NDIS-compliant homes across Sydney. These specialized spaces focus on safety, accessibility, and high physical support needs while maintaining a warm, 'home' feel.",
    features: [
      "SDA Compliance",
      "High Physical Support features",
      "Assistive technology integration",
    ],
    icon: Users,
    image: "/landing/5.avif",
  },
];

const ServicesPage = () => {
  return (
    <main className="bg-[#FAF9F6] pt-32 pb-24 font-sans overflow-hidden">
      {/* --- Header --- */}
      <section className="max-w-8xl mx-auto px-6 md:px-16 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-[#12a807] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
            Comprehensive Building Solutions
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#2d2d2d] leading-tight mb-8">
            Specialized Building <br /> Services in Sydney
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Established in <strong>2021</strong>, Bella Green Homes provides a
            full spectrum of construction services across the Sydney
            Metropolitan region. From residential masterpieces to specialized
            NDIS housing, we build with precision and purpose.
          </p>
        </motion.div>
      </section>

      {/* --- Services List --- */}
      <section className="max-w-8xl mx-auto px-6 md:px-16">
        <div className="space-y-32 md:space-y-48">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 md:gap-24 items-center`}
            >
              {/* Image Column */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </div>

              {/* Text Column */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-white shadow-sm rounded-full">
                    <service.icon className="w-6 h-6 text-[#12a807]" />
                  </div>
                  <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">
                    0{index + 1} / 07
                  </span>
                </div>

                <h2 className="font-serif text-4xl md:text-5xl text-[#2d2d2d]">
                  {service.title}
                </h2>
                <h4 className="text-[#12a807] font-bold text-sm uppercase tracking-widest">
                  {service.tagline}
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#12a807]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-8">
                  <button className="flex items-center gap-3 font-bold text-xs uppercase tracking-[0.2em] group">
                    Learn more about {service.title}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="mt-48 bg-[#1a1a1a] py-24 px-6 md:px-16 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl mb-8">
            Ready to build in Sydney?
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            Whether it&apos;s a duplex investment or your forever custom home,
            our team is ready to bring our Sydney expertise to your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#12a807] hover:bg-[#0f8a06] text-white px-10 py-5 rounded-full font-bold text-sm transition-all">
              Book a Consultation
            </button>
            <button className="border border-white/20 hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold text-sm transition-all">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
