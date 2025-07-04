
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, PieChart, Building2, Coins, TrendingUp, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: PieChart,
      title: "Portfolio Management",
      description: "Comprehensive portfolio strategies tailored to your risk profile and financial goals."
    },
    {
      icon: Briefcase,
      title: "Investment Advisory",
      description: "Expert guidance on asset allocation across traditional and alternative investments."
    },
    {
      icon: Building2,
      title: "Alternative Investments",
      description: "Access to private equity, real estate, and other exclusive investment opportunities."
    },
    {
      icon: Coins,
      title: "Wealth Planning",
      description: "Strategic planning for wealth preservation and generational transfer."
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "In-depth market research and trend analysis to inform investment decisions."
    },
    {
      icon: Users,
      title: "Family Office Services",
      description: "Dedicated support for high-net-worth individuals and families."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Financial Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From portfolio management to alternative investments, we provide the expertise 
            you need to achieve your financial aspirations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-teal-100 hover:shadow-lg transition-all duration-300 hover:border-teal-200">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
