
import Navigation from "@/components/Navigation";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import FoundersSection from "@/components/about/FoundersSection";
import ValuesSection from "@/components/about/ValuesSection";
import Footer from "@/components/footer/footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AboutHero />
      <CompanyStory />
      {/* <FoundersSection /> */}
      <ValuesSection />
      <Footer/>
    </div>
  );
};

export default About;
