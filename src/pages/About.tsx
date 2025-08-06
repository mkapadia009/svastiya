
import Navigation from "@/components/Navigation";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import FoundersSection from "@/components/about/FoundersSection";
import ValuesSection from "@/components/about/ValuesSection";
import AdvisorsSection from "@/components/about/AdvisorsSection";
import PartnersSection from "@/components/about/PartnersSection";
import Footer from "@/components/footer/footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <Navigation />
      {/* <AboutHero /> */}
      <CompanyStory />
      {/* <FoundersSection /> */}
      <ValuesSection />
      <AdvisorsSection />
      <PartnersSection />
      <Footer/>
    </div>
  );
};

export default About;
