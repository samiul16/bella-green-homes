"use client";
import React, { useState, useEffect } from "react";
import { MapPin, Globe, Phone, Search, Plus, Menu, X } from "lucide-react";
import Link from "next/link";

// 1. The Top Information Bar
const TopBar = () => {
  return (
    <div className="bg-[#FFF5E6] text-slate-800 text-sm py-2.5 px-6 hidden lg:flex justify-between items-center relative border-b border-[#ffeebb] z-40">
      <div className="flex items-center space-x-8">
        <div className="flex items-center gap-2 cursor-pointer hover:text-green-700 transition-colors">
          <MapPin size={16} />
          <span className="font-medium">Sydney</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-green-700 transition-colors">
          <Globe size={16} />
          <span className="font-medium">English</span>
        </div>
      </div>

      <div className="flex items-center space-x-8">
        <div className="flex items-center gap-2 font-medium">
          <Phone size={16} />
          <span>0408 61 70 91</span>
        </div>
      </div>
    </div>
  );
};

// 2. Main Navigation Component
const Navigation = ({ isScrolled }: { isScrolled: boolean }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const linkClasses = isScrolled
    ? "text-white hover:text-green-400"
    : "text-white hover:text-white/80";

  return (
    <>
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 ease-in-out px-6 lg:px-12 py-3 ${
          isScrolled
            ? "top-0 bg-black/40 backdrop-blur-md shadow-lg"
            : "lg:top-[45px] top-0 bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between max-w-[1920px] mx-auto">
          {/* Logo - Fixed Redirection */}
          <Link
            href="/"
            className="text-white text-xl lg:text-2xl font-serif font-bold tracking-wider uppercase transition-opacity hover:opacity-80"
          >
            Bella Green
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {["Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`font-medium text-[18px] transition-colors duration-300 ${linkClasses}`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              className="p-2 text-white transition-transform active:scale-90"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer - Fixed Z-index and Logic */}
      <div
        className={`fixed inset-0 z-[1001] transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute right-0 top-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-6 border-b">
            <span className="text-xl font-bold tracking-widest uppercase text-slate-900">
              Bella Green
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-500 hover:text-red-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col p-6 space-y-6">
            {["Services", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex justify-between items-center text-lg font-semibold text-slate-800 hover:text-green-600 border-b border-slate-100 pb-2 transition-colors"
              >
                {item}
                <Plus size={16} className="opacity-50" />
              </Link>
            ))}

            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <Phone size={16} />
                <span>0408 61 70 91</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <MapPin size={16} />
                <span>Sydney, Australia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      <TopBar />
      <Navigation isScrolled={isScrolled} />
    </div>
  );
}
