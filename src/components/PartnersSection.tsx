
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PartnersSection = () => {
  const partners = [
    {
      name: "Legal Associates",
      category: "Legal Firm",
      logo: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      name: "TechVision Labs",
      category: "Technology & Marketing",
      logo: "photo-1461749280684-dccba630e2f6"
    },
    {
      name: "Compliance Pro",
      category: "CS Compliance",
      logo: "photo-1605810230434-7631ac76ec81"
    },
    {
      name: "Financial Advisors Co.",
      category: "CA Firm",
      logo: "photo-1498050108023-c5249f4df085"
    },
    {
      name: "Strategic Partners",
      category: "Legal Firm",
      logo: "photo-1487058792275-0ad4aaf24ca7"
    },
    {
      name: "Digital Solutions",
      category: "Technology & Marketing",
      logo: "photo-1461749280684-dccba630e2f6"
    },
    {
      name: "Wealth Advisors",
      category: "CA Firm",
      logo: "photo-1498050108023-c5249f4df085"
    },
    {
      name: "Tech Solutions",
      category: "Technology & Marketing",
      logo: "photo-1461749280684-dccba630e2f6"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Trusted Ecosystem Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading professionals across legal, compliance, technology, 
            and advisory services to provide comprehensive financial solutions.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="p-6 bg-white border-gray-200 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/${partner.logo}?w=64&h=64&fit=crop&crop=center`}
                      alt={partner.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">{partner.name}</h3>
                  <p className="text-xs text-gray-500">{partner.category}</p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Trusted by 50+ professional partners across India
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
