
import { TrendingUp, Users, Award } from "lucide-react";

const ValuesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology-Enabled Growth</h3>
            <p className="text-gray-600">
              We leverage cutting-edge technology to deliver faster, more accurate, and 
              personalized financial solutions that drive sustainable growth.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Client-First Innovation</h3>
            <p className="text-gray-600">
              Every solution we develop is tailored to your unique needs, combining 
              personalized service with innovative technology for superior outcomes.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence & Integrity</h3>
            <p className="text-gray-600">
              We maintain the highest standards of professionalism and transparency, 
              building trust through consistent excellence and ethical practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
