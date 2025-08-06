
import Navigation from "@/components/Navigation";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import FoundersSection from "@/components/about/FoundersSection";
import ValuesSection from "@/components/about/ValuesSection";
import AdvisorsSection from "@/components/about/AdvisorsSection";
import PartnersSection from "@/components/about/PartnersSection";
import Footer from "@/components/footer/footer";
import { useEffect, useState } from "react";
import { setLoadingShown } from "@/lib/loadingState";
import InquiryModal from "@/components/formcomponent/inqueryform";

const About = () => {
  const [open, setOpen] = useState(false);
  // Mark loading as shown since we're on a different page
  useEffect(() => {
    setLoadingShown();
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <Navigation />
      {/* <AboutHero /> */}
      <CompanyStory />
      {/* <FoundersSection /> */}
      <ValuesSection />
      <AdvisorsSection />
      <PartnersSection />
      <Footer onContactClick={() => setOpen(true)} />
      <InquiryModal open={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default About;
