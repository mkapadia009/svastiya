
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const FoundersSection = () => {
  const founders = [
    {
      name: "Sejal Doshi",
      title: "Co-Founder & Managing Partner", 
      expertise: "Finance & Investment Advisory",
      experience: "20+ years",
      background: "Seasoned finance professional with over 20 years of comprehensive experience across investment banking, corporate advisory, wealth management, and capital markets. Brings deep expertise in M&A transactions, capital raising, strategic advisory, and client relationship management to deliver holistic financial solutions.",
      specialties: ["Investment Banking", "Corporate Advisory", "Wealth Management", "Capital Markets", "Strategic Planning"],
      linkedIn: "https://www.linkedin.com/in/sejal-doshi-18a51312/",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQGxK8QZ5Z5Z5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1234567890?e=1234567890&v=beta&t=abc123"
    },
    {
      name: "Kaushal Doshi",
      title: "Co-Founder & Managing Partner",
      expertise: "Technology & Fintech Innovation", 
      experience: "15+ years",
      background: "Technology and fintech expert with 15+ years of experience in consulting, product development, and delivering innovative solutions in the advisory space. Specializes in leveraging technology to transform traditional financial services and create differentiated client experiences through digital innovation.",
      specialties: ["Technology Consulting", "Fintech Innovation", "Digital Transformation", "Product Strategy", "Advisory Solutions"],
      linkedIn: "https://www.linkedin.com/in/doshikaushal/",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQGxK8QZ5Z5Z5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1234567890?e=1234567890&v=beta&t=xyz789"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Founders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our leadership team combines extensive experience in finance and technology, 
            bringing together complementary expertise to deliver advisory services with a difference.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <Card key={index} className="border-teal-100 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={founder.image} alt={founder.name} />
                  <AvatarFallback className="bg-gradient-to-br from-teal-400 to-teal-600 text-white text-xl font-bold">
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl text-gray-900">{founder.name}</CardTitle>
                <CardDescription className="text-teal-600 font-medium">{founder.title}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Badge variant="secondary" className="bg-teal-50 text-teal-700">
                    {founder.experience}
                  </Badge>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {founder.background}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
