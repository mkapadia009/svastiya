
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Building2, TrendingUp, DollarSign, Users, Target, Briefcase, BarChart3, Shield, Zap, Globe } from "lucide-react";
import InquiryModal from "@/components/formcomponent/inqueryform";
import { useState } from "react";
import Footer from "@/components/footer/footer";

const CorporateServices = () => {
  const [open, setOpen] = useState(false)
  const services = [
    {
      icon: Building2,
      title: "Capital Raising & Fundraising",
      description: "Strategic guidance for equity and debt financing, from seed rounds to IPOs.",
      features: ["Equity Financing", "Debt Structuring", "Investor Relations", "Due Diligence Support"]
    },
    {
      icon: TrendingUp,
      title: "Mergers & Acquisitions",
      description: "End-to-end M&A advisory services for strategic growth and exit opportunities.",
      features: ["Buy-side Advisory", "Sell-side Advisory", "Valuation Services", "Deal Structuring"]
    },
    {
      icon: DollarSign,
      title: "Financial Restructuring",
      description: "Expert guidance through financial challenges and optimization opportunities.",
      features: ["Debt Restructuring", "Operational Improvement", "Cash Flow Management", "Turnaround Strategy"]
    },
    {
      icon: Users,
      title: "Corporate Strategy",
      description: "Strategic planning and execution support for sustainable business growth.",
      features: ["Strategic Planning", "Market Analysis", "Business Model Design", "Growth Strategy"]
    },
    {
      icon: Target,
      title: "Venture Capital Services",
      description: "Comprehensive support for startups and emerging companies seeking growth capital.",
      features: ["Pitch Deck Development", "Financial Modeling", "Investor Matching", "Term Sheet Negotiation"]
    },
    {
      icon: BarChart3,
      title: "Financial Planning & Analysis",
      description: "Data-driven insights and financial modeling for informed decision making.",
      features: ["Financial Forecasting", "Budget Planning", "Performance Analytics", "KPI Development"]
    }
  ];

  const industries = [
    "Technology & Software",
    "Healthcare & Biotech",
    "Financial Services",
    "Manufacturing",
    "Energy & Utilities",
    "Real Estate",
    "Consumer Goods",
    "Professional Services"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Corporate Advisory Services
            </Badge>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Strategic Financial Advisory
            <span className="text-teal-600 block">for Growing Companies</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Empowering businesses with strategic financial guidance, from startup funding to 
            enterprise-level transactions. We partner with companies at every stage of growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700" onClick={() => setOpen(true)}>
              <Briefcase className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            {/* <Button size="lg" variant="outline">
              View Case Studies
            </Button> */}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Corporate Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From capital raising to strategic exits, we provide the expertise your business needs to thrive.
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

      {/* Industries We Serve */}
      <section className="py-20 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across diverse sectors, bringing specialized knowledge to your industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white border border-teal-100 hover:border-teal-200 transition-all duration-300">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Companies Choose Svastiya
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-600">
                Successfully completed over 200+ corporate transactions with a combined value exceeding $2B.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Expertise</h3>
              <p className="text-gray-600">
                Deep sector knowledge combined with extensive network of investors, partners, and advisors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Approach</h3>
              <p className="text-gray-600">
                Tailored solutions that align with your business objectives and growth trajectory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's discuss how our corporate advisory services can help your business reach its next milestone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100" onClick={() => setOpen(true)}>
              Schedule a Meeting
            </Button>
            {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
              Download Our Brochure
            </Button> */}
            <InquiryModal open={open} handleClose={() => setOpen(false)} />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default CorporateServices;
