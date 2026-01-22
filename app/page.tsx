import Description from "./_components/landing/Description";
import Hero from "./_components/landing/Hero";
import HousePlanCard from "./_components/landing/HousePlanCard";
import HeroDesigns from "./_components/landing/HeroDesigns";
import HousePackages from "./_components/landing/HousePackages";
import DisplayHomes from "./_components/landing/DisplayHomes";
import WhyBellaGreen from "./_components/landing/WhyBellaGreen";
import FaqSection from "./_components/landing/FaqSection";
import ContactSection from "./_components/landing/ContactSection";
import ServicesSection from "./_components/landing/ServicesSection";
import BrandMetaSection from "./_components/landing/BrandMetaSection";

export default function page() {
  return (
    <div>
      <Hero />
      <Description />
      <ServicesSection />
      <BrandMetaSection />
      <ContactSection />
      {/* <HousePlanCard /> */}
      <HeroDesigns />
      {/* <HousePackages /> */}
      {/* <DisplayHomes /> */}
      {/* <WhyBellaGreen /> */}
      {/* <FaqSection /> */}
    </div>
  );
}
