"use client";
import React, { useState, useEffect } from "react";
import {
  MapPin,
  Globe,
  Phone,
  User,
  Search,
  SlidersHorizontal,
  Plus,
  Menu,
  X,
} from "lucide-react";

// NavLink Component
const NavLink = ({
  text,
  linkClasses,
}: {
  text: string;
  linkClasses: string;
}) => (
  <a
    href="#"
    className={`group flex items-center gap-1 font-medium text-[15px] transition-colors duration-300 ${linkClasses}`}
  >
    {text}
    <Plus
      size={14}
      className="opacity-70 group-hover:rotate-90 transition-transform duration-300"
    />
  </a>
);

// 1. The Top Information Bar (Disappears on scroll)
const TopBar = () => {
  return (
    <div className="bg-[#FFF5E6] text-slate-800 text-sm py-2.5 px-6 hidden lg:flex justify-between items-center z-50 relative border-b border-[#ffeebb]">
      <div className="flex items-center space-x-8">
        <div className="flex items-center gap-2 cursor-pointer hover:text-(--primary) transition-colors">
          <MapPin size={16} />
          <span className="font-medium">Sydney</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-(--primary) transition-colors">
          <Globe size={16} />
          <span className="font-medium">English</span>
        </div>
      </div>

      <a
        href="#"
        className="font-semibold text-gray-600 hover:underline decoration-2 underline-offset-4 transition-all"
      >
        Build & price your new home
      </a>

      <div className="flex items-center space-x-8">
        <div className="flex items-center gap-2 font-medium">
          <Phone size={16} />
          <span>0408 61 70 91</span>
        </div>
        {/* <div className="flex items-center gap-2 cursor-pointer hover:text-(--primary) transition-colors font-medium">
          <User size={18} />
          <span>My Home</span>
        </div> */}
      </div>
    </div>
  );
};

// 2. Main Navigation (Sticky, changes style on scroll)
const Navigation = ({ isScrolled }: { isScrolled: boolean }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Styling based on scroll state
  const linkClasses = isScrolled
    ? "text-white text-shadow-2xs hover:text-[#12a807]"
    : "text-white hover:text-white/80";

  const logoClasses = isScrolled ? "text-white text-shadow-2xs" : "text-white";
  const pillBtnClasses = isScrolled
    ? "bg-white border border-[#12a807] text-[#12a807] hover:bg-[#12a807] hover:text-white"
    : "bg-white border border-[#12a807] text-[#12a807] hover:bg-[#12a807] hover:text-white";

  return (
    <>
      <nav
        className={`fixed w-full z-1000 transition-all duration-500 ease-in-out px-6 lg:px-12 top-0 py-2 ${
          isScrolled
            ? "translate-y-0 bg-black/25"
            : "lg:translate-y-[45px] translate-y-0"
        }`}
      >
        <div className="flex items-center justify-between max-w-[1920px] mx-auto">
          {/* Logo */}
          <div
            className={`text-(--primary) text-xl lg:text-2xl font-serif-logo font-bold tracking-wider uppercase transition-colors duration-300 ${logoClasses}`}
          >
            Bella Green
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* <NavLink text="House Designs" linkClasses={linkClasses} />
            <NavLink text="Display Homes" linkClasses={linkClasses} /> */}
            {/* <NavLink text="House & Land" linkClasses={linkClasses} /> */}
            {/* <NavLink text="Build With Us" linkClasses={linkClasses} /> */}
            {/* <a
              href="#"
              className={`font-medium text-[15px] transition-colors duration-300 ${linkClasses}`}
            >
              Offers
            </a> */}
            {/* <NavLink text="Inspo" linkClasses={linkClasses} /> */}
            <a
              href="#"
              className={`font-medium text-[20px] transition-colors duration-300 ${linkClasses}`}
            >
              About
            </a>
            <a
              href="#"
              className={`font-medium text-[20px] transition-colors duration-300 ${linkClasses}`}
            >
              Contact
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* <button
              className={`hidden cursor-pointer lg:flex items-center gap-2 px-5 py-2 shadow rounded-full font-bold text-sm transition-all duration-300 ${pillBtnClasses}`}
            >
              <span className="text-lg font-serif italic">$</span> Build & Price
            </button>
            <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-[#12a807] text-white hover:bg-[#12a807]/70 transition-colors shadow cursor-pointer">
              <SlidersHorizontal size={18} />
            </button>
            <button
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 cursor-pointer ${
                isScrolled
                  ? "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  : "bg-white text-[#12a807] hover:bg-gray-100"
              }`}
            >
              <Search size={18} />
            </button> */}
            <button
              className={`lg:hidden flex cursor-pointer items-center justify-center w-10 h-10 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[80%] bg-white shadow-2xl p-6 transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <div className="text-xl font-serif-logo font-bold tracking-widest uppercase text-slate-900">
              Bella Green
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-500 hover:text-red-600 cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-6 text-lg font-medium text-slate-800">
            {/* <a
              href="#"
              className="flex justify-between items-center border-b pb-2"
            >
              House Designs <Plus size={16} />
            </a>
            <a
              href="#"
              className="flex justify-between items-center border-b pb-2"
            >
              Display Homes <Plus size={16} />
            </a> */}
            <a
              href="#"
              className="flex justify-between items-center border-b pb-2"
            >
              Contact
            </a>
            <a href="#" className="flex justify-between items-center">
              About
            </a>
            {/* <button className="bg-[#12a807] hover:bg-[#12a807]/80 transition-all duration-300 text-white py-3 rounded-full w-full font-bold mt-4 cursor-pointer">
              Build & Price
            </button> */}
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
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden">
      <TopBar />
      <Navigation isScrolled={isScrolled} />
    </div>
  );
}
