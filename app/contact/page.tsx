/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import the Map component with SSR disabled
const ContactMap = dynamic(() => import("../_components/ui/ContactMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-100 flex items-center justify-center text-gray-400">
      Loading Map...
    </div>
  ),
});

const InfoCard = ({ icon: Icon, label, value, href, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white border border-[#E5E5E5] p-8 flex flex-col justify-between hover:border-[#12a807] transition-all duration-500 group"
  >
    <div className="flex justify-between items-start mb-12">
      <div className="p-4 bg-[#FAF9F6] group-hover:bg-[#12a807]/10 transition-colors">
        <Icon className="w-6 h-6 text-[#1a1a1a] group-hover:text-[#12a807]" />
      </div>
      {href && (
        <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-[#12a807]" />
      )}
    </div>
    <div>
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="text-2xl font-serif text-black hover:text-[#12a807] transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-2xl font-serif text-black">{value}</p>
      )}
    </div>
  </motion.div>
);

const ContactPage = () => {
  return (
    <main className="bg-[#FAF9F6] pt-32 pb-24 font-sans">
      <div className="max-w-8xl mx-auto px-6 md:px-16">
        {/* --- Header --- */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#12a807] font-bold text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            Direct Channels
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl text-[#2d2d2d]"
          >
            Get in touch.
          </motion.h1>
        </div>

        {/* --- Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20">
          <InfoCard
            icon={User}
            label="Principal Director"
            value="Sarker Mohammad"
            delay={0.1}
          />
          <InfoCard
            icon={Phone}
            label="Direct Line"
            value="0408 61 70 91"
            href="tel:0408617091"
            delay={0.2}
          />
          <InfoCard
            icon={Mail}
            label="Email Inquiry"
            value="sarker.a.moh@gmail.com"
            href="mailto:sarker.a.moh@gmail.com"
            delay={0.3}
          />
          <InfoCard
            icon={MapPin}
            label="Claymore Office"
            value="38 Arkley Ave, NSW"
            delay={0.4}
          />
        </div>

        {/* --- Map --- */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
              <h3 className="font-serif text-3xl text-[#2d2d2d]">
                Our Location
              </h3>
              <p className="text-gray-500 mt-2">
                38 Arkley Ave, Claymore, New South Wales 2559
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#12a807]">
              <Clock size={14} /> Available by Appointment
            </div>
          </div>

          <div className="h-[500px] w-full border border-[#E5E5E5] bg-white p-2 shadow-sm relative z-0">
            <ContactMap />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 py-12 border-t border-[#E5E5E5] text-center"
        >
          <p className="text-gray-400 text-sm tracking-[0.2em] uppercase font-medium">
            Serving the entire Sydney Metropolitan Area since 2021
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactPage;
