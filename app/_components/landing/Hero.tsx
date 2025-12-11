import React from "react";

import { MediaType, SlideData } from "../../_types/type";
import HeroSlider from "./HeroSlider";

// Mock Data representing the design provided
const slides: SlideData[] = [
  {
    id: 1,
    type: MediaType.VIDEO,
    // Using a reliable high-quality architectural video link
    src: "/landing/1.mp4",
    posterImage: "/landing/2.avif", // Shows while video loads
    title: "Modern Aesthetics",
    subtitle:
      "Experience the perfect blend of functionality and artistic expression in our latest architectural achievements.",
    ctaText: "View Gallery",
  },
  {
    id: 2,
    type: MediaType.IMAGE,
    src: "/landing/2.avif",
    title: "Duplex home designs",
    subtitle:
      "Live in one and live off the other, with one of our contemporary Duplex house designs for new home builders.",
    ctaText: "Duplex Designs",
  },
  {
    id: 3,
    type: MediaType.VIDEO,
    src: "/landing/3.mp4",
    posterImage: "/landing/4.avif", // Shows while video loads
    title: "Interior Spaces",
    subtitle:
      "Open plan living that brings the family together while maximizing natural light and air flow.",
    ctaText: "Explore Interiors",
  },
  {
    id: 4,
    type: MediaType.IMAGE,
    src: "/landing/4.avif",
    title: "Urban Living",
    subtitle:
      "Designed for the compact urban environment without compromising on luxury or privacy.",
    ctaText: "Urban Portfolio",
  },
];

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen">
      <HeroSlider slides={slides} autoPlayInterval={20000} />
    </main>
  );
};

export default App;
