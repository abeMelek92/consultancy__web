// app/page.js
import HeroSection from "../components/HeroSection";
import Introduction from "../components/Introduction";
import ServicesOverview from "../components/ServicesOverview";
import ClientTestimonials from "../components/ClientTestimonials";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Introduction />
      <ServicesOverview />
      <ClientTestimonials />
    </div>
  );
}
