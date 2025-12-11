"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Share2,
  BedDouble,
  Bath,
  Car,
  Maximize,
  Home,
  MapPin,
} from "lucide-react";

// --- Types ---
interface Stats {
  bed: number;
  bath: number;
  living: number;
  garage: number;
  sq: string;
}

interface Location {
  id: number;
  name: string;
  address: string;
  homesOnDisplay: number;
  houseName: string;
  image: string;
  stats: Stats;
}

// --- Mock Data ---
const locations: Location[] = [
  {
    id: 1,
    name: "Hereford Hill",
    address: "11 Tillage Drive, Lochinvar NSW 2321",
    homesOnDisplay: 2,
    houseName: "Oasis 37",
    image: "/landing/bella-bed.jpg",
    stats: { bed: 4, bath: 3, living: 2, garage: 2, sq: "17m" },
  },
  {
    id: 2,
    name: "Homeworld Box Hill",
    address: "4 Noah St, Box Hill NSW 2765",
    homesOnDisplay: 5,
    houseName: "Charisma 37",
    image: "/landing/2.avif",
    stats: { bed: 5, bath: 2, living: 1, garage: 4, sq: "12.5m" },
  },
  {
    id: 3,
    name: "HomeWorld Leppington",
    address: "35 Berkshire Circuit, Leppington NSW 2179",
    homesOnDisplay: 4,
    houseName: "Rhapsody 22",
    image: "/landing/5.avif",
    stats: { bed: 4, bath: 2, living: 0, garage: 2, sq: "12.5m" },
  },
];

// --- Components ---

/**
 * Individual Property Card Component
 * Handles the "Tilt" and "Zoom" parallax effects independently.
 */
const LocationCard = ({ data, index }: { data: Location; index: number }) => {
  // Mouse position logic for tilt/parallax effect
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movements
  const xSpring = useSpring(x, { stiffness: 900, damping: 25 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 25 });

  const transform = useMotionTemplate`perspective(1000px) rotateX(${ySpring}deg) rotateY(${xSpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (small values for subtle effect)
    const xPct = (mouseX / width - 0.5) * 4; // -2 to 2 degrees
    const yPct = (mouseY / height - 0.5) * -4; // Invert Y axis

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col h-full bg-[#333333] border-r border-white/10 last:border-r-0 hover:z-10"
    >
      {/* --- Top Info Section --- */}
      <div className="p-8 pb-6 min-h-[160px] flex flex-col justify-between relative z-20">
        <div className="space-y-3">
          <div className="flex justify-between items-start gap-4">
            <h3
              className="font-['Playfair_Display'] text-2xl md:text-2xl leading-tight text-white/80 group-hover:text-gray-100 transition-colors font-semibold"
              dangerouslySetInnerHTML={{
                __html: data.name.replace(" ", "<br/>"),
              }}
            />
            {/* Animated Button Reveal */}
            <div className="">
              <motion.button
                initial={{ y: "100%", opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#12a807] text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out"
              >
                View Display
              </motion.button>
            </div>
          </div>
          <div className="flex items-start gap-2 text-gray-300/80 group-hover:text-gray-300 transition-colors">
            <MapPin size={14} className="mt-1 shrink-0" />
            <p className="text-xs leading-relaxed max-w-[400px] font-['Inter']">
              {data.address}
            </p>
          </div>
        </div>
      </div>

      {/* --- Image Section with Parallax Zoom --- */}
      <div className="relative w-full aspect-square overflow-hidden">
        {/* Floating Tag */}
        <div className="absolute top-4 left-0 w-full z-20 flex justify-center pointer-events-none">
          <div className="bg-black/60 backdrop-blur-2xl px-3 py-1 rounded-full border border-white/10">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/80">
              {data.homesOnDisplay} Homes On Display
            </span>
          </div>
        </div>

        {/* The Animated Image */}
        <motion.div style={{ transform }} className="w-full h-full relative">
          <motion.img
            src={data.image}
            alt={data.houseName}
            className="w-full h-full object-cover absolute inset-0"
            // Start slightly larger to allow parallax movement without edges showing
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} // Bezier for "Smooth" luxury feel
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
        </motion.div>

        {/* Floating Action Icons (Top Right) */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-3 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-75">
          <button className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 cursor-pointer shadow-xs">
            <Heart size={16} />
          </button>
          <button className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 cursor-pointer shadow-xs">
            <Share2 size={16} />
          </button>
        </div>

        {/* Bottom Interactive Area */}
        <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex items-center justify-between">
          <button className="w-10 h-10 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 backdrop-blur-sm -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 cursor-pointer shadow-xs">
            <ArrowLeft size={18} />
          </button>

          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
              Featured Home
            </span>
            <span className="font-['Playfair_Display'] text-3xl text-white drop-shadow-lg transform transition-transform duration-500 group-hover:-translate-y-1">
              {data.houseName}
            </span>
          </div>

          <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#12a807] hover:text-white transition-all duration-300 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 shadow-xs cursor-pointer">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* --- Stats Footer --- */}
      <div className="mt-auto px-6 py-5 border-t border-white/10 flex items-center justify-between text-gray-300 text-xs font-['Inter'] bg-[#333333] relative z-20">
        <StatItem
          icon={<BedDouble size={16} />}
          value={data.stats.bed}
          label="Beds"
        />
        <StatItem
          icon={<Bath size={16} />}
          value={data.stats.bath}
          label="Baths"
        />
        <StatItem
          icon={<Home size={16} />}
          value={data.stats.living}
          label="Living"
        />
        <StatItem
          icon={<Car size={16} />}
          value={data.stats.garage}
          label="Cars"
        />
        <StatItem
          icon={<Maximize size={16} />}
          value={data.stats.sq}
          label="Width"
        />
      </div>
    </motion.div>
  );
};

const StatItem = ({
  icon,
  value,
}: // label,
{
  icon: React.ReactNode;
  value: number | string;
  label: string;
}) => (
  <div className="flex flex-col items-center gap-1 group/stat cursor-default">
    <div className="text-gray-400 group-hover/stat:text-white transition-colors duration-300">
      {icon}
    </div>
    <span className="font-medium">{value}</span>
  </div>
);

/**
 * Main Section Component
 */
const DisplayHomes = () => {
  // Parallax Text Effect for Header
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacityText = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#333333] text-white py-24 md:py-32 overflow-hidden relative"
    >
      <div className="max-w-8xl mx-auto px-6 md:px-16 relative z-10">
        {/* --- HEADER SECTION --- */}
        <div className=" mb-20">
          <div className="flex flex-col xl:flex-row justify-between items-start gap-16">
            {/* Headline */}
            <motion.div
              style={{ y: yText, opacity: opacityText }}
              className="max-w-3xl"
            >
              <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl leading-[0.95] tracking-tight">
                We would love to <br />
                <span className="text-white/50 italic mr-4">welcome you</span>
                to one <br />
                of our display homes
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-md  space-y-6"
            >
              <div className="w-12 h-px bg-[#12a807] mb-6" />
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-['Inter'] font-light">
                Open the door to NSW&apos;s most exciting and vibrant new house
                builder, Bella Green Homes. Step inside and experience
                architecturally designed luxury.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed font-['Inter'] font-medium">
                Come and request a FREE quotation and site inspection. Discover
                how you get more experience, knowledge and inclusions in your
                new home when you build with NSW’s award-winning, most exciting
                and vibrant new house builder.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- CONTROL BAR --- */}
        <motion.div
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="border-t border-white/20 mb-0"
        >
          <div className="max-w-8xl mx-auto h-24 flex items-center justify-between">
            {/* Left Tab */}
            <div className="h-full flex items-center relative">
              <span className="absolute top-0 left-0 w-full h-px bg-white transform -translate-y-px" />
              <span className="font-['Inter'] font-medium text-sm tracking-widest uppercase">
                Select Location
              </span>
            </div>

            {/* Center Button */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <button className="group cursor-pointer relative overflow-hidden bg-white text-black px-10 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:text-white transition-colors duration-300 shadow">
                <span className="relative z-10">View All Locations</span>
                <div className="absolute inset-0 bg-[#12a807] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
              </button>
            </div>

            {/* Right Pagination */}
            <div className="flex items-center gap-6 text-xs font-medium tracking-widest font-['Inter']">
              <span className="text-white/50">
                01 <span className="text-white mx-1">/</span> 04
              </span>
              <div className="flex gap-3">
                <button className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 cursor-pointer">
                  <ArrowLeft size={16} />
                </button>
                <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#12a807] hover:text-white hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- CARDS GRID --- */}
        <div className="border-t border-white/10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10">
            {locations.map((loc, index) => (
              <LocationCard key={loc.id} data={loc} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayHomes;
