import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LoadingScreen from "@/components/LoadingScreen";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Mail, Phone, MapPin, Building2, PieChart, TrendingUp, Users, Target } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ImageAssets } from "@/images/imageassets";
import { useState, useEffect } from "react";
import InquiryModal from "@/components/formcomponent/inqueryform";
import { shouldShowLoading, setLoadingShown } from "@/lib/loadingState";

const Index = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Use global state that resets only on hard refresh
  // Also check if this is a navigation from another route
  const isFromNavigation = location.state?.fromRouter === true;
  const [showLoading, setShowLoading] = useState(() => {
    // Don't show loading if navigating from another page
    if (isFromNavigation) return false;
    // Otherwise use the global state logic
    return shouldShowLoading();
  });

  const handleLoadingComplete = () => {
    console.log("LoadingScreen completed");
    setLoadingShown(); // Mark that loading has been shown
    setShowLoading(false);
  };

  const servicesSummary = [
    {
      title: "Investment Advisory Services",
      description: "Comprehensive wealth management solutions for individuals and families",
      icon: PieChart,
      features: ["Portfolio Management", "Asset Allocation", "Alternative Investments", "Wealth Planning"],
      link: "/investment-advisory",
      color: "teal"
    },
    {
      title: "Corporate Advisory Services",
      description: "Strategic financial guidance for growing companies and enterprises",
      icon: Building2,
      features: ["Capital Raising", "M&A Advisory", "Financial Restructuring", "Corporate Strategy"],
      link: "/corporate-services",
      color: "blue"
    }
  ];

  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <Navigation />
      <HeroSection />
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Financial Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From individual wealth management to corporate financial advisory,
              we provide comprehensive solutions tailored to your unique needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {servicesSummary.map((service, index) => (
              <div
                key={index}
                onClick={() => navigate(service.link, { state: { fromRouter: true } })}
                className="cursor-pointer"
              >
                <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white">
                  <CardHeader className="text-center pb-6">
                    <div className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-lg text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-3`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Svastiya
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-600">
                Over ₹2000 Cr+ in assets under management with consistent performance across market cycles.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Approach</h3>
              <p className="text-gray-600">
                Tailored strategies that align with your specific goals, risk tolerance, and timeline.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Solutions</h3>
              <p className="text-gray-600">
                End-to-end financial services from investment advisory to corporate transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#F3FBFB] to-[#F3FBFB]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-teal-600 mb-6">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-xl text-teal-600 mb-8">
            Join hundreds of satisfied clients who trust Svastiya for their financial growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" state={{ fromRouter: true }}>
              {/* <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50">
                Meet Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
            </Link>
            <Button size="lg" variant="outline" className="bg-teal-600 text-white hover:bg-teal-700 hover:text-white" onClick={() => setOpen(true)}>
              Schedule Consultation
            </Button>
            <InquiryModal open={open} handleClose={() => setOpen(false)} />
          </div>
        </div>
      </section>

      <footer className="bg-teal-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={ImageAssets.SvastiyaLogoWhite} width={80} height={80} alt="Svastiya Logo" />
                <span className="text-lg font-semibold">Svastiya Financial Advisors LLP</span>
              </div>
              <p className="text-white">
                Growing wealth through expert guidance and sustainable investment strategies.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-white">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@svastiya.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 98202 25970</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/about" state={{ fromRouter: true }} className="block text-white hover:font-semibold transition-colors">
                  About Us
                </Link>
                <Link to="/knowledge" state={{ fromRouter: true }} className="block text-white hover:font-semibold transition-colors">
                  Knowledge Hub
                </Link>
                <button 
                  onClick={() => setOpen(true)} 
                  className="block text-white hover:font-semibold transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white mt-8 pt-8 text-center text-white">
            <p>&copy; 2025 Traverse TEC Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <InquiryModal open={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default Index;
