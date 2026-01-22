"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight, LucideIcon } from "lucide-react";
import type { Variants } from "framer-motion";

// 1. Define Interface for Contact Data
interface ContactItem {
  id: number;
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  action: string;
}

// 2. Data Configuration
const contactInfo: ContactItem[] = [
  {
    id: 1,
    icon: Phone,
    label: "Call Us Directly",
    value: "0408 61 70 91",
    href: "tel:0408617091",
    action: "Call now",
  },
  {
    id: 2,
    icon: Mail,
    label: "Email Support",
    value: "sarker.a.moh@gmail.com",
    href: "mailto:sarker.a.moh@gmail.com",
    action: "Send email",
  },
  {
    id: 3,
    icon: MapPin,
    label: "Visit Our Studio",
    value: "38 Arkley Ave Claymore",
    href: "https://maps.google.com",
    action: "Get directions",
  },
];

// 3. Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const ContactSection = () => {
  return (
    <section className="relative w-full  py-16  overflow-hidden">
      {/* Decorative Background Blob (Optional subtle flare) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cream/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="mx-auto px-6 relative z-10">
        {/* Header Area */}
        <div className="max-w-8xl mb-16 lg:px-18 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-7xl font-serif font-semibold text-[#3D3D3D] tracking-tight mb-4"
            >
              Let&apos;s build your{" "}
              <span className="text-(--primary)">dream.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-500 font-medium"
            >
              Get in touch with our architects and interior designers today.
            </motion.p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="border-t border-slate-300 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-8xl lg:px-18 grid grid-cols-1 md:grid-cols-3"
          >
            {contactInfo.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                target={item.icon === MapPin ? "_blank" : undefined}
                rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                className="group relative bg-white p-4 border-r border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-red/30 transition-all duration-300 flex flex-col justify-between h-full min-h-[280px]"
              >
                {/* Top Row: Icon & Arrow */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-cream/30 flex items-center justify-center text-(--primary) group-hover:bg-brand-dark group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>

                  {/* Arrow Icon Animation */}
                  <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center bg-white group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                    {item.label}
                  </span>
                  <p className="text-xl lg:text-2xl font-bold text-brand-dark group-hover:text-(--primary) transition-colors leading-tight">
                    {item.value}
                  </p>
                </div>

                {/* Bottom Action Text */}
                <div className="mt-8 pt-6 border-t border-slate-100 group-hover:border-slate-200 transition-colors">
                  <span className="text-brand-red font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    {item.action}
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
