import React from "react";
import { MediaType, SlideData } from "../../_types/type";
import HeroSlider from "./HeroSlider";

// Updated Data to align with:
// Services: Single/Double Storey, Duplex, Townhouses, Custom, Granny Flats, NDIS.
// Context: Sydney Metropolitan, Est. 2021.

const slides: SlideData[] = [
  {
    id: 1,
    type: MediaType.VIDEO,
    src: "/landing/1.mp4",
    posterImage: "/landing/5.avif",
    title: "Bespoke Custom Builds",
    subtitle:
      "Since 2021, Bella Green Homes has been defining the Sydney Metropolitan skyline with luxury custom-built residences tailored to your vision.",
    ctaText: "Start Your Journey",
  },
  {
    id: 2,
    type: MediaType.IMAGE,
    src: "/landing/2.avif",
    title: "Single & Double Storey",
    subtitle:
      "Architecturally designed homes for modern Australian families. Discover our premium collection of single and double-storey masterpieces.",
    ctaText: "View Home Designs",
  },
  {
    id: 3,
    type: MediaType.VIDEO,
    src: "/landing/3.mp4",
    posterImage: "/landing/4.avif",
    title: "Duplex & Townhouses",
    subtitle:
      "Maximize your land's potential. We specialize in high-yield Duplex and Townhouse developments across Sydney's growing suburbs.",
    ctaText: "Investment Solutions",
  },
  {
    id: 4,
    type: MediaType.IMAGE,
    src: "/landing/4.avif",
    title: "Specialized Living",
    subtitle:
      "From high-quality Granny Flats to NDIS-approved Group Homes (SDA), we build for diversity, accessibility, and comfort.",
    ctaText: "Specialized Services",
  },
];

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen">
      {/* 
        Increased autoPlayInterval to 8000 (8 seconds) 
        so users have time to read the new business-specific subtitles.
      */}
      <HeroSlider slides={slides} autoPlayInterval={8000} />
    </main>
  );
};

export default App;
