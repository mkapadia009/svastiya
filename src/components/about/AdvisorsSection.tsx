import { ImageAssets } from "@/images/imageassets";
import { useState } from "react";

const AdvisorsSection = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  const advisors = [
    {
      name: "Sebastian Alaric Varela",
      position: "Founder & CEO",
      description: "Experienced financial strategist with over 15 years in investment banking and corporate finance. Specializes in mergers & acquisitions, capital raising, and strategic business development across emerging markets.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face", // Professional headshot
      linkedinUrl: "#"
    },
    {
      name: "Maria Rodriguez",
      position: "Chief Investment Officer", 
      description: "Leading portfolio management expert with deep expertise in alternative investments and risk management. Former Goldman Sachs executive with a track record of delivering superior returns.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face", // Professional headshot
      linkedinUrl: "#"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Advisors</h2>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {advisors.map((advisor, index) => {
            const isExpanded = expandedCards.includes(index);
            return (
            <div 
              key={index} 
              className="group relative flex-shrink-0 rounded-2xl border border-teal-200 bg-teal-50/80 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg w-72 h-80 md:w-72 md:h-96"
              style={{ 
                borderRadius: '0.9375rem',
                border: '1px solid #CDF9EF',
                background: 'rgba(205, 249, 239, 0.80)'
              }}
            >
              {/* LinkedIn Icon - Always visible except on hover */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10 group-hover:opacity-0 transition-opacity duration-300">
                <a href={advisor.linkedinUrl} className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors">
                  <img src={ImageAssets.LinkedIn} alt="LinkedIn" className="h-8 w-8 md:h-10 md:w-10" />
                </a>
              </div>
              
              {/* Image - Initially visible */}
              <div className={`absolute inset-0 transition-opacity duration-300 ${isExpanded ? 'md:opacity-100 opacity-0' : 'opacity-100'}`}>
                <img 
                  src={advisor.image} 
                  alt={advisor.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Name and designation over image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-black"
                     style={{
                       background: 'linear-gradient(180deg, transparent 0%, #CDF9EF 100%)',
                    //    backdropFilter: 'blur(12px)',
                    //    WebkitBackdropFilter: 'blur(12px)'
                     }}>
                  <h3 className="text-lg md:text-xl font-semibold mb-1">{advisor.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-sm md:text-base font-medium opacity-90">{advisor.position}</p>
                    {/* Read more/less button - Mobile only */}
                    <div className="md:hidden">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(index);
                        }}
                        className="text-xs text-gray-800 underline hover:text-teal-700 transition-colors duration-200"
                      >
                        {isExpanded ? 'Read less' : 'Read more'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Text Content - Mobile: Visible when expanded, Desktop: Visible on hover */}
              <div className={`absolute inset-0 p-4 md:p-6 ${isExpanded ? 'opacity-100 md:opacity-0' : 'opacity-0'} md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center text-left backdrop-blur-lg`}
                   style={{ 
                     background: 'rgba(205, 249, 239, 0.90)',
                     backdropFilter: 'blur(8px)',
                     WebkitBackdropFilter: 'blur(8px)',
                     border: '1px solid rgba(255, 255, 255, 0.2)'
                   }}>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">{advisor.name}</h3>
                <p className="font-medium mb-3 md:mb-4 text-sm md:text-base text-gray-800">{advisor.position}</p>
                <p className="text-gray-800 text-xs md:text-sm leading-relaxed mb-4">{advisor.description}</p>
                
                {/* Read less button in expanded view - Mobile only */}
                <div className="md:hidden mt-auto flex justify-end">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCard(index);
                    }}
                    className="text-xs text-gray-800 underline hover:text-teal-700 transition-colors duration-200"
                  >
                    Read less
                  </button>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvisorsSection;
