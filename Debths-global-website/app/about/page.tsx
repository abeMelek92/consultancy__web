import AboutUsCTA from "../../components/AboutUs/ContactUs";
import AboutUsHistory from "../../components/AboutUs/History";
import AboutUsMission from "../../components/AboutUs/Mission";
import AboutUsTeam from "../../components/AboutUs/Team";
import AboutUsVision from "../../components/AboutUs/Vision";
export default function About() {
  return (
    <section className="about-us pt-16">
      <AboutUsMission />
      <AboutUsHistory />
      <AboutUsTeam />
      {/* <AboutUsVision /> */}
    </section>
  );
}
