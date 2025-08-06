
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PieChart, Briefcase, Building2, Coins, TrendingUp, Users, Target, Shield, Star, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import InquiryModal from "@/components/formcomponent/inqueryform";
import Footer from "@/components/footer/footer";
import { ImageAssets } from "@/images/imageassets";
import { setLoadingShown } from "@/lib/loadingState";

const InvestmentAdvisory = () => {
  const [open, setOpen] = useState(false)
  
  // Mark loading as shown since we're on a different page
  useEffect(() => {
    setLoadingShown();
  }, []);
  const services = [
    {
      icon: PieChart,
      title: "Portfolio Management",
      description: "Comprehensive portfolio strategies tailored to your risk profile and financial goals.",
      features: ["Asset Allocation", "Risk Management", "Performance Monitoring", "Rebalancing"]
    },
    {
      icon: Briefcase,
      title: "Investment Advisory",
      description: "Expert guidance on asset allocation across traditional and alternative investments.",
      features: ["Investment Strategy", "Market Analysis", "Due Diligence", "Investment Selection"]
    },
    {
      icon: Building2,
      title: "Alternative Investments",
      description: "Access to private equity, real estate, and other exclusive investment opportunities.",
      features: ["Private Equity", "Real Estate", "Hedge Funds", "Structured Products"]
    },
    {
      icon: Coins,
      title: "Wealth Planning",
      description: "Strategic planning for wealth preservation and generational transfer.",
      features: ["Estate Planning", "Tax Optimization", "Succession Planning", "Trust Services"]
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "In-depth market research and trend analysis to inform investment decisions.",
      features: ["Economic Research", "Sector Analysis", "Risk Assessment", "Opportunity Identification"]
    },
    {
      icon: Users,
      title: "Family Office Services",
      description: "Dedicated support for high-net-worth individuals and families.",
      features: ["Consolidated Reporting", "Family Governance", "Next-Gen Education", "Lifestyle Management"]
    }
  ];

  const investmentTypes = [
    { title: "Mutual Funds", image: ImageAssets.MutualFund },
    { title: "Equity Markets", image: ImageAssets.EquityMarket },
    { title: "Fixed Income", image: ImageAssets.FixedIncome },
    { title: "International Markets", image: ImageAssets.InternationalMarket },
    { title: "Private Equity", image: ImageAssets.PrivateEquity }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Investment Advisory Services
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Grow Your Wealth
            <span className="text-teal-600 block">With Expert Guidance</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From portfolio management to alternative investments, we provide personalized 
            investment strategies that help you achieve your financial aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700" onClick={() => setOpen(true)}>
              <Target className="mr-2 h-5 w-5" />
              Start Your Investment Journey
            </Button>
            <Button size="lg" variant="outline">
              Download Investment Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Investment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our investment advisory services are designed to help you build, preserve, and grow your wealth over time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-teal-100 hover:shadow-xl transition-all duration-300 hover:border-teal-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-teal-600" />
                  </div>
                  <CardTitle className="text-gray-900 text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Types */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Investment Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access a diverse range of investment options across multiple asset classes and markets.
            </p>
          </div>

          {/* Mobile: Original grid layout */}
          <div className="flex justify-center md:hidden">
            <div className="grid grid-cols-2 gap-4 max-w-4xl">
              {investmentTypes.map((type, index) => (
                <div key={index} className="text-center rounded-lg bg-white border border-teal-100 hover:border-teal-200 transition-all duration-300 shadow-sm px-8 py-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <img src={type.image} alt={type.title} className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">{type.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Separate rows with centering */}
          <div className="hidden md:flex flex-col items-center gap-8">
            {/* First row - 3 items */}
            <div className="grid grid-cols-3 gap-8 max-w-4xl">
              {investmentTypes.slice(0, 3).map((type, index) => (
                <div key={index} className="text-center rounded-lg bg-white border border-teal-100 hover:border-teal-200 transition-all duration-300 shadow-sm px-12 py-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <img src={type.image} alt={type.title} className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">{type.title}</h3>
                </div>
              ))}
            </div>
            
            {/* Second row - 2 items centered */}
            <div className="grid grid-cols-2 gap-8 max-w-2xl">
              {investmentTypes.slice(3).map((type, index) => (
                <div key={index + 3} className="text-center rounded-lg bg-white border border-teal-100 hover:border-teal-200 transition-all duration-300 shadow-sm px-6 py-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <img src={type.image} alt={type.title} className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">{type.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Investment Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Investment Advisory
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Strategies</h3>
              <p className="text-gray-600">
                Every investment strategy is tailored to your unique financial goals, risk tolerance, and timeline.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Management</h3>
              <p className="text-gray-600">
                Sophisticated risk management techniques to protect and preserve your wealth across market cycles.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Performance</h3>
              <p className="text-gray-600">
                Track record of delivering consistent returns and helping clients achieve their financial objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FBFDFD]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-teal-600 mb-6">
            Ready to Grow Your Wealth?
          </h2>
          <p className="text-xl text-teal-600 mb-8">
            Let's create a personalized investment strategy that aligns with your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-teal-600 text-white hover:bg-teal-700 hover:text-white" onClick={() => setOpen(true)}>
              Schedule Consultation
            </Button>
            {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
              Request Portfolio Review
            </Button> */}
          </div>
        </div>
      </section>
      <Footer onContactClick={() => setOpen(true)} />
      <InquiryModal open={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default InvestmentAdvisory;
