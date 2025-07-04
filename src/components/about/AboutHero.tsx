
import { Users, Award, TrendingUp, Globe } from "lucide-react";

const AboutHero = () => {
  const stats = [
    { icon: Users, label: "Clients Served", value: "500+" },
    { icon: TrendingUp, label: "AUM", value: "₹2000 Cr+" },
    { icon: Award, label: "Years of Experience", value: "35+" },
    { icon: Globe, label: "Investment Markets", value: "15+" }
  ];

  return (
    <section className="bg-gradient-to-br from-teal-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-teal-600">Svastiya</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Born with a vision to provide new age financial advisory services aided by technology 
            in today's fast-moving economic world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-teal-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
