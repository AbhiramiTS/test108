import Hero from "@/components/sections/hero";
import AboutUs from "@/components/sections/about-us";
import ProductShowcase from "@/components/sections/product-showcase";
import ServicesOverview from "@/components/sections/services-overview";
import Manufacturing from "@/components/sections/manufacturing";
import SmartSolutions from "@/components/sections/smart-solutions";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ProductShowcase />
      <ServicesOverview />
      <SmartSolutions />
      <Manufacturing />
    </div>
  );
}