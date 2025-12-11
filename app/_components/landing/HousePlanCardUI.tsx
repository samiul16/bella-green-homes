import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Heart,
  Home,
  BedDouble,
  Bath,
  Armchair,
  Car,
  Ruler,
} from "lucide-react";
import { House, ViewMode } from "../../_types/type";
import ResponsiveVideo from "../ui/ResponsiveVideo";

interface HouseCardProps {
  house: House;
  viewMode: ViewMode;
}

const HouseCardUI: React.FC<HouseCardProps> = ({ house, viewMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 50, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 50, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    if (videoRef.current) {
      videoRef.current.pause();
      // Smooth reset
      setTimeout(() => {
        if (videoRef.current) videoRef.current.currentTime = 0;
      }, 300);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (viewMode === ViewMode.FACADE && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Auto-play was prevented
          console.log("Video autoplay prevented", error);
        });
      }
    }
  };

  // Reset video state when switching to floorplan
  useEffect(() => {
    if (viewMode === ViewMode.FLOORPLAN && videoRef.current) {
      videoRef.current.pause();
    }
  }, [viewMode]);

  return (
    <div className="w-full shrink-0 py-3 snap-start">
      <div className="group relative bg-transparent border p-4  border-black/10 shadow-xs">
        {/* Header Info */}
        <div className="mb-4">
          <p className="text-xs font-bold tracking-widest text-(--primary) mb-1 uppercase">
            {house.series}
          </p>
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-serif text-brand-dark">
              {house.name}
            </h2>
            <button className="bg-(--primary) hover:bg-(--primary)/80 text-slate-100 border border-gray-200 px-6 py-2.5 rounded-full text-brand-red font-semibold hover:border-brand-red shadow transition-all duration-300 cursor-pointer text-sm">
              View Home Design
            </button>
          </div>
        </div>

        {/* Media Container with Parallax */}
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: viewMode === ViewMode.FACADE ? rotateX : 0,
            rotateY: viewMode === ViewMode.FACADE ? rotateY : 0,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full aspect-4/3 overflow-hidden rounded-lg bg-gray-200 shadow"
        >
          {/* Status Badge */}
          {house.status && (
            <div className="absolute top-4 left-4 z-20">
              <span className="text-white font-bold tracking-wide text-sm uppercase drop-shadow-md text-shadow-2xs">
                {house.status}
              </span>
            </div>
          )}

          {/* Action Icons */}
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-3">
            <button className="bg-white p-2.5 rounded-full shadow hover:bg-gray-100 transition-colors cursor-pointer">
              <Heart className="w-5 h-5 text-pink-500" />
            </button>
            <button className="bg-white p-2.5 rounded-full shadow hover:bg-gray-100 transition-colors cursor-pointer">
              <Home className="w-5 h-5 text-green-500" />
            </button>
          </div>

          {/* Content Switching: Facade vs Floorplan */}
          <AnimatePresence mode="wait">
            {viewMode === ViewMode.FACADE ? (
              <motion.div
                key="facade"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full relative"
              >
                {/* Video Layer (Behind Image) */}
                <ResponsiveVideo
                  ref={videoRef}
                  src={house.facadeVideo}
                  posterImage={house.facadeImagePoster}
                  muted
                  loop
                  playsInline
                  autoPlay={false}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    isHovered ? "opacity-100 scale-110" : "opacity-0 scale-100"
                  }`}
                  style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
                />

                {/* Image Layer (Front) */}
                <motion.div
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  animate={{ opacity: isHovered ? 0 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={house.facadeImage}
                    alt={house.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </motion.div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
              </motion.div>
            ) : (
              <motion.div
                key="floorplan"
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full bg-white flex items-center justify-center p-4 relative"
              >
                <Image
                  src={house.floorplanImage}
                  alt={`${house.name} Floorplan`}
                  fill
                  className="object-contain mix-blend-multiply"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Specs Row */}
        <div className="flex items-center justify-between py-6 border-b border-gray-200 text-gray-700 mt-2">
          <SpecItem icon={BedDouble} count={house.specs.beds} />
          <SpecItem icon={Bath} count={house.specs.baths} />
          <SpecItem icon={Home} count={house.specs.powder} />
          <SpecItem icon={Armchair} count={house.specs.living} />
          <SpecItem icon={Car} count={house.specs.cars} />
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-gray-400 stroke-[1.5]" />
            <span className="text-lg font-medium">{house.specs.widthSq}m</span>
          </div>
        </div>

        {/* Dimensions Footer */}
        <div className="flex justify-between items-center py-4 text-sm text-gray-800 font-medium">
          <span>House Width: {house.dimensions.width}</span>
          <span>House Depth: {house.dimensions.depth}</span>
          <span>Total: {house.dimensions.totalArea}</span>
        </div>
      </div>
    </div>
  );
};

const SpecItem = ({
  icon: Icon,
  count,
}: {
  icon: React.ComponentType<{ className?: string }>;
  count: number;
}) => (
  <div className="flex items-center gap-3">
    <Icon className="w-6 h-6 text-gray-600 stroke-[1.2]" />
    <span className="text-xl font-medium text-gray-800">{count}</span>
  </div>
);

export default HouseCardUI;
