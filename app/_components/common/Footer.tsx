"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

// --- Data Constants ---
const SERVICES = [
  "Single Storey Homes",
  "Double Storey Homes",
  "Duplex Designs",
  "Townhouses",
  "Custom Build Homes",
  "Granny Flats",
  "NDIS Group Homes",
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#FAF9F6] border-t border-[#E5E5E5] pt-16 pb-8 font-sans">
      <div className="max-w-8xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* --- Brand Column --- */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-4xl text-[#1a1a1a] mb-4">
              Bella <span className="text-[#12a807]">Green</span> Homes
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Crafting premium architectural living spaces across the Sydney
              Metropolitan area since 2021.
            </p>
            <div className="mt-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Established <span className="text-black">2021</span>
              </span>
            </div>
          </div>

          {/* --- Services Column --- */}
          <div className="lg:col-span-1">
            <h3 className="text-md font-bold uppercase tracking-widest text-[#1a1a1a] mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#12a807] text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Location Column --- */}
          <div className="lg:col-span-1">
            <h3 className="text-md font-bold uppercase tracking-widest text-[#1a1a1a] mb-6">
              Coverage
            </h3>
            <div className="flex items-start gap-3 text-gray-500 text-sm leading-relaxed">
              <MapPin size={18} className="text-[#12a807] shrink-0 mt-0.5" />
              <p>
                Sydney Metropolitan Area
                <br />
                New South Wales, Australia
              </p>
            </div>
          </div>

          {/* --- Contact Column --- */}
          <div className="lg:col-span-1">
            <h3 className="text-md font-bold uppercase tracking-widest text-[#1a1a1a] mb-6">
              Inquiries
            </h3>
            <div className="space-y-4">
              <a
                href="tel:1200996656"
                className="flex items-center gap-3 text-gray-500 hover:text-black transition-colors text-sm"
              >
                <Phone size={16} className="text-[#12a807]" />
                0408 61 70 91
              </a>
              <a
                href="mailto:info@bellagreenhomes.com.au"
                className="flex items-center gap-3 text-gray-500 hover:text-black transition-colors text-sm"
              >
                <Mail size={16} className="text-[#12a807]" />
                Contact Our Team
              </a>
              <button className="mt-4 w-full py-3 border border-black text-md font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                Request a Consultation
              </button>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-8 border-t border-[#E5E5E5] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Bella Green Homes Pty Ltd.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
