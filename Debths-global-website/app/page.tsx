// app/page.js
import HeroSection from "../components/HeroSection";
import Introduction from "../components/Introduction";
import ServicesOverview from "../components/ServicesOverview";
import ClientTestimonials from "../components/ClientTestimonials";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-r from-green-50 via-white to-green-50">
      <HeroSection />
      <Introduction />
      <ClientTestimonials />
    </div>
  );
}
