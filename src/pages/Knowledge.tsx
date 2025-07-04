
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Coins, Factory, Landmark, ChartBar, Download, ExternalLink } from "lucide-react";
import { useState } from "react";
import InquiryModal from "@/components/formcomponent/inqueryform";

const Knowledge = () => {
  const [open, setOpen] = useState(false)
  const investmentProducts = [
    {
      icon: Building2,
      category: "Real Estate",
      title: "Real Estate Investment Trusts (REITs)",
      description: "Diversified real estate exposure through publicly traded trusts offering regular income and capital appreciation potential.",
      riskLevel: "Medium",
      minInvestment: "₹5 Lakhs",
      expectedReturns: "8-12% p.a.",
      features: ["Regular dividends", "Liquidity", "Professional management", "Diversification"]
    },
    {
      icon: Factory,
      category: "Private Equity",
      title: "Private Equity Funds",
      description: "Direct investment in private companies with high growth potential, typically with 5-7 year investment horizons.",
      riskLevel: "High",
      minInvestment: "₹1 Crore",
      expectedReturns: "15-25% p.a.",
      features: ["High growth potential", "Active management", "Long-term horizon", "Exclusive access"]
    },
    {
      icon: Coins,
      category: "Commodities",
      title: "Commodity Futures",
      description: "Investment in physical commodities like gold, silver, oil, and agricultural products through futures contracts.",
      riskLevel: "High",
      minInvestment: "₹2 Lakhs",
      expectedReturns: "Variable",
      features: ["Inflation hedge", "Portfolio diversification", "Global exposure", "Leverage options"]
    },
    {
      icon: TrendingUp,
      category: "Hedge Funds",
      title: "Alternative Investment Funds (AIFs)",
      description: "Sophisticated investment strategies including long-short equity, market neutral, and arbitrage strategies.",
      riskLevel: "Medium-High",
      minInvestment: "₹1 Crore",
      expectedReturns: "12-18% p.a.",
      features: ["Market neutral strategies", "Professional management", "Risk mitigation", "Alpha generation"]
    },
    {
      icon: Landmark,
      category: "Infrastructure",
      title: "Infrastructure Investment Trusts (InvITs)",
      description: "Investment in income-generating infrastructure assets like highways, power transmission, and telecommunications.",
      riskLevel: "Medium",
      minInvestment: "₹10 Lakhs",
      expectedReturns: "8-14% p.a.",
      features: ["Stable cash flows", "Regulated returns", "Essential services", "Long-term contracts"]
    },
    {
      icon: ChartBar,
      category: "Structured Products",
      title: "Market Linked Debentures",
      description: "Debt instruments with returns linked to market indices, offering principal protection with upside potential.",
      riskLevel: "Medium",
      minInvestment: "₹5 Lakhs",
      expectedReturns: "6-15% p.a.",
      features: ["Principal protection", "Market participation", "Fixed tenure", "Tax efficiency"]
    }
  ];

  const riskColors = {
    "Low": "bg-green-100 text-green-800",
    "Medium": "bg-yellow-100 text-yellow-800",
    "Medium-High": "bg-orange-100 text-orange-800",
    "High": "bg-red-100 text-red-800"
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Investment <span className="text-teal-600">Knowledge Hub</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive guide to alternative investment products. 
              From REITs to private equity, discover opportunities beyond traditional assets.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-teal-600 mb-2">6+</h3>
                <p className="text-gray-600">Alternative Investment Categories</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-teal-600 mb-2">₹5L+</h3>
                <p className="text-gray-600">Minimum Investment Options</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-teal-600 mb-2">25%</h3>
                <p className="text-gray-600">Maximum Expected Returns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Alternative Investment Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diversify your portfolio with these carefully curated alternative investment opportunities, 
              each offering unique risk-return profiles and market exposures.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {investmentProducts.map((product, index) => (
              <Card key={index} className="border-teal-100 hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <product.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{product.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 mb-1">Risk Level</p>
                      <Badge className={riskColors[product.riskLevel as keyof typeof riskColors]}>
                        {product.riskLevel}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Min Investment</p>
                      <p className="font-semibold text-gray-900">{product.minInvestment}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Expected Returns</p>
                      <p className="font-semibold text-teal-600">{product.expectedReturns}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-2">Key Features:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700" onClick={() => setOpen(true)}>
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-teal-600 text-teal-600">
                      Download Factsheet
                      <Download className="ml-2 h-4 w-4" />
                    </Button>
                    <InquiryModal open={open} handleClose={() => setOpen(false)} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Investment Education</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your investment knowledge with our educational resources and market insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-teal-100">
              <CardHeader>
                <CardTitle className="text-lg">Market Research Reports</CardTitle>
                <CardDescription>
                  In-depth analysis of market trends and investment opportunities across various asset classes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-teal-600 text-teal-600">
                  Access Reports
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-teal-100">
              <CardHeader>
                <CardTitle className="text-lg">Investment Webinars</CardTitle>
                <CardDescription>
                  Regular educational sessions with our experts covering alternative investment strategies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-teal-600 text-teal-600">
                  View Schedule
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-teal-100">
              <CardHeader>
                <CardTitle className="text-lg">Risk Assessment Tools</CardTitle>
                <CardDescription>
                  Interactive tools to help you understand your risk profile and suitable investment options.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-teal-600 text-teal-600">
                  Take Assessment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Explore Alternative Investments?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Our experts are ready to help you navigate the world of alternative investments 
            and build a diversified portfolio tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50" onClick={() => setOpen(true)}>
              Schedule Consultation
            </Button>
            {/* <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
              Download Investment Guide
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Knowledge;
