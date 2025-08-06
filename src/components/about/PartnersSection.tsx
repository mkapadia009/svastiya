const PartnersSection = () => {
  const partners = [
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      alt: "Amazon"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      alt: "Google"
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      alt: "Microsoft"
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      alt: "Apple"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver exceptional financial solutions and drive innovation across markets.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-[#CDF9EF] hover:shadow-md transition-shadow duration-300 w-full h-32 flex items-center justify-center group">
              <img 
                src={partner.logo} 
                alt={partner.alt}
                className="max-w-full max-h-16 object-contain filter transition-all duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Trusted by leading companies worldwide for strategic financial advisory and investment solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
