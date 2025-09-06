import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Laptop, 
  Award, 
  Users, 
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Corporate Training",
      description: "Customized training programs for companies to upskill their teams with latest technologies.",
      features: [
        "On-site training programs",
        "Customized curriculum",
        "Expert trainers",
        "Flexible scheduling"
      ],
      link: "/services/corporate",
      image: "data:image/jpeg;base64,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"
    },
    {
      icon: Laptop,
      title: "Online Learning",
      description: "Interactive online courses with live sessions, recorded lectures, and 24/7 support.",
      features: [
        "Live interactive sessions",
        "Recorded video lectures",
        "24/7 student support",
        "Mobile-friendly platform"
      ],
      link: "/services/online",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Industry-recognized certifications that boost your career prospects and credibility.",
      features: [
        "Industry-recognized certificates",
        "Portfolio projects",
        "Skill assessments",
        "Career guidance"
      ],
      link: "/services/certification",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "One-on-one mentorship from industry experts to accelerate your learning journey.",
      features: [
        "Personal mentor assignment",
        "Regular progress reviews",
        "Career counseling",
        "Interview preparation"
      ],
      link: "/services/mentorship",
      image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-b bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-indigo-400">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive learning solutions designed to meet your educational and career goals.
            From corporate training to personal mentorship, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-indigo-600 transition-all duration-300 border border-gray-700 hover:border-indigo-500 bg-gray-900 h-full overflow-hidden"
            >
              {/* Service Image */}
              <div className="h-40 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardHeader className="text-center pb-4">
                <div className="bg-indigo-600 p-4 rounded-full w-16 h-16 mx-auto -mt-10 mb-4 shadow-lg group-hover:shadow-indigo-600 transition-all duration-300 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white group-hover:shadow-indigo-600 transition-all duration-300"
                  asChild
                >
                  <Link to={service.link} className="flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-indigo-900 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We understand that every organization has unique training needs. 
            Let us create a customized learning solution tailored specifically for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-indigo-600 text-white hover:shadow-indigo-700"
              asChild
            >
              <Link to="/contact">
                Get Custom Quote
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white"
              asChild
            >
              <Link to="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
