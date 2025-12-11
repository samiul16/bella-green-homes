import Description from "./_components/landing/Description";
import Hero from "./_components/landing/Hero";
import HousePlanCard from "./_components/landing/HousePlanCard";
import HeroDesigns from "./_components/landing/HeroDesigns";
import HousePackages from "./_components/landing/HousePackages";
import DisplayHomes from "./_components/landing/DisplayHomes";
import WhyBellaGreen from "./_components/landing/WhyBellaGreen";
import FaqSection from "./_components/landing/FaqSection";

export default function page() {
  return (
    <div>
      <Hero />
      <Description />
      <HousePlanCard />
      <HeroDesigns />
      <HousePackages />
      <DisplayHomes />
      <WhyBellaGreen />
      <FaqSection />
    </div>
  );
}
