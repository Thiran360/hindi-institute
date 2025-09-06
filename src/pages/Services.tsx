import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Building2,
  Laptop,
  Users,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Phone,
  Rocket,
  ShieldCheck,
  Briefcase,
  BookOpenCheck,
  MessageCircleQuestion
} from "lucide-react";

// Helper function to render star ratings
const renderStars = (rating) => {
  return [...Array(rating)].map((_, i) => (
    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
  ));
};

const Services = () => {
  const services = [
    {
      icon: Building2,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop",
      title: "Corporate Training",
      description:
        "Customized training programs to upskill your team with the latest technologies and industry best practices.",
      price: "Custom Quote",
      duration: "2-6 weeks",
      badge: null,
      features: [
        "On-site or remote training sessions",
        "Customized curriculum based on company needs",
        "Expert trainers with extensive industry experience",
        "Flexible scheduling to fit your team's workflow",
        "Progress tracking and performance assessments",
        "Post-training support and mentorship",
        "Official Certificate of Completion for all attendees"
      ],
      benefits: [
        "Increased team productivity and efficiency",
        "Reduced hiring costs by upskilling existing staff",
        "Enhanced employee retention and morale",
        "Improved code quality and standardized development practices"
      ],
      link: "/services/corporate"
    },
    {
      icon: Laptop,
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop",
      title: "Online Learning",
      description:
        "Comprehensive online courses with live sessions, recorded lectures, and a dedicated learning platform for flexible study.",
      price: "₹15,000-25,000",
      duration: "3-8 months",
      badge: "Popular",
      features: [
        "Live interactive sessions with expert instructors",
        "High-quality, pre-recorded video lectures",
        "24/7 student support and doubt-clearing forums",
        "Mobile-friendly learning platform for access on the go",
        "Downloadable resources, code snippets, and study guides",
        "Regular progress tracking and analytics",
        "Official Certificate of Completion upon course completion"
      ],
      benefits: [
        "Learn from anywhere, at any time, at your own pace",
        "Access to a vast library of premium content",
        "Connect with a global community of learners",
        "Build a professional portfolio with guided projects"
      ],
      link: "/services/online"
    },
    {
      icon: BookOpenCheck,
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2574&auto=format&fit=crop",
      title: "Professional Certifications",
      description:
        "Validate your skills and expertise with our industry-recognized certification programs, designed for career advancement.",
      price: "₹10,000-20,000",
      duration: "1-3 months",
      badge: "In Demand",
      features: [
        "Globally recognized certification exams",
        "Curriculum aligned with industry standards",
        "Practice tests and exam preparation materials",
        "Dedicated study groups and expert-led webinars",
        "Official Certificate with a unique ID for verification",
        "Lifetime access to course materials",
        "Continuous skill validation and renewal options"
      ],
      benefits: [
        "Enhance your professional credibility and marketability",
        "Gain a competitive edge in the job market",
        "Demonstrate expertise to employers and clients",
        "Increase your earning potential with certified skills"
      ],
      link: "/services/certification"
    },
    {
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?fm=jpg&q=60&w=3000",
      title: "Personal Mentorship",
      description:
        "One-on-one mentorship from a dedicated industry expert to accelerate your learning journey and career growth.",
      price: "₹8,000/month",
      duration: "3-6 months",
      badge: null,
      features: [
        "Personalized learning plan tailored to your goals",
        "Weekly one-on-one sessions with your mentor",
        "Regular progress reviews and constructive feedback",
        "Detailed career counseling and strategic planning",
        "Interview preparation and mock sessions",
        "Resume and LinkedIn profile review and optimization",
        "Official Certificate of Completion upon program conclusion"
      ],
      benefits: [
        "Gain a personalized learning path and guidance",
        "Faster skill development and problem-solving abilities",
        "Access to exclusive industry insights and a professional network",
        "Build confidence and stay motivated throughout your journey"
      ],
      link: "/services/mentorship"
    }
  ];

  const valuePropositions = [
    {
      icon: ShieldCheck,
      title: "Certified by Experts",
      description:
        "Our courses are designed and taught by industry experts with decades of real-world experience."
    },
    {
      icon: Briefcase,
      title: "Job-Ready Curriculum",
      description:
        "We focus on practical, hands-on projects that build the skills employers are actively looking for."
    },
    {
      icon: Rocket,
      title: "Accelerated Career Growth",
      description:
        "Our programs are structured to help you achieve your career goals faster, whether it's a promotion or a new job."
    },
    {
      icon: BookOpenCheck,
      title: "Official Certificates",
      description:
        "Validate your new skills with an official Certificate of Completion, recognized by top companies."
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      company: "Tech Solutions Ltd",
      service: "Corporate Training",
      rating: 5,
      feedback: "The corporate training program helped our team seamlessly transition to modern frameworks. The trainers were excellent and the practical, hands-on approach made all the difference."
    },
    {
      name: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469e38e5?q=80&w=2578&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      company: "Individual Learner",
      service: "Online Learning",
      rating: 5,
      feedback: "The online platform is fantastic! The live sessions were highly interactive, and the recorded content allowed me to learn at my own pace without any pressure."
    },
    {
      name: "Amit Patel",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      company: "Freelance Developer",
      service: "Mentorship",
      rating: 5,
      feedback: "My mentor guided me through complex career challenges and helped me land a senior developer role. It was truly worth every penny and I couldn't have done it without them!"
    },
    {
      name: "Sneha Reddy",
      image: "https://images.unsplash.com/photo-1549219662-8495444a53d9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      company: "Student",
      service: "Bootcamp",
      rating: 5,
      feedback: "The bootcamp was intense but incredibly rewarding. The projects were challenging and gave me a portfolio I'm proud of. I received a job offer even before the program ended!"
    }
  ];

  const faqs = [
    {
      question: "Are certificates provided for all services?",
      answer: "Yes, we provide an official Certificate of Completion for every one of our services, including Corporate Training, Online Learning, Bootcamps, and Personal Mentorship programs. This certificate can be used to showcase your new skills to potential employers and on your professional network."
    },
    {
      question: "What is the difference between Online Learning and a Bootcamp?",
      answer: "Our Online Learning is more self-paced and flexible, designed for individuals who want to learn on their own schedule. Bootcamps are intensive, full-time programs with a structured curriculum and a strong focus on job readiness and career placement. While both offer a certificate, the bootcamp experience is much more immersive."
    },
    {
      question: "How do I get a custom quote for corporate training?",
      answer: "You can request a custom quote by clicking the 'Get Quote' button on the Corporate Training card or by visiting our contact page. We will connect with you to understand your team's specific needs, size, and goals to provide a tailored proposal."
    }
  ];
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section with background image */}
        <section className="relative py-24">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2670&auto=format&fit=crop"
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-secondary">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive learning solutions designed to help you achieve your professional goals.
              Explore our range of services, from corporate upskilling to one-on-one mentorship.
            </p>
          </div>
        </section>

        {/* Value Propositions Section with background */}
        <section className="relative py-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2670&auto=format&fit=crop"
              alt="Value Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/80" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {valuePropositions.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-gray-800/70 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-primary p-4 rounded-full mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>       
        {/* Services Grid with Images */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Choose Your Learning Path</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Each service is meticulously designed to provide maximum value and measurable results for your specific needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 overflow-hidden bg-gray-900 text-gray-100">
                  <div className="relative">
                    <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  </div>
                  
                  <CardHeader className="pb-6 relative z-10 -mt-24">
                    {service.badge && (
                      <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">{service.badge}</Badge>
                    )}
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-primary p-3 rounded-lg">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">{service.price}</div>
                        <Badge variant="outline" className="mt-1 bg-gray-800 text-gray-300 border-gray-700">
                          <Clock className="h-3 w-3 mr-1" />
                          {service.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                    <CardDescription className="text-base text-gray-400">{service.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-400">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2 text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button
                        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                        asChild
                      >
                        <Link to={service.link} className="flex items-center justify-center gap-2">
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                     <Button
  variant="outline"
  className="border-primary text-primary hover:bg-primary hover:text-white"
  asChild
>
  
  <Link to="/login">Get Quote</Link>
</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials with Images */}
        <section className="py-10 bg-gradient-to-b bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real feedback from individuals and companies who have benefited from our services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gray-800 text-gray-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <div className="flex items-center gap-1 mb-1">{renderStars(testimonial.rating)}</div>
                        <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sm text-gray-400">
                          {testimonial.company} • {testimonial.service}
                        </CardDescription>
                      </div>
                    </div>
                    <p className="text-gray-400 italic">"{testimonial.feedback}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 bg-gradient-to-b bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <MessageCircleQuestion className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Find quick answers to the most common questions about our services and programs.
              </p>
            </div>
            <div className="space-y-6 max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-800 rounded-2xl p-12 text-center text-white border border-primary">
              <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                We understand that every organization has unique needs. Let us create a tailored learning solution
                that perfectly fits your requirements and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 hover:shadow-lg transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">
                    Get Custom Quote
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
                  asChild
                >
                  <Link to="tel:+919876543210">
                    <Phone className="h-5 w-5 mr-2" />
                    Call: +91 9876543210
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;