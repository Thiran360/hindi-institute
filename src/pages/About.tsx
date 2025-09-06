import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Eye, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To provide world-class technical education that empowers individuals to build successful careers in technology.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", // teamwork mission image
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To be the leading institute for programming education, bridging the gap between academic learning and industry requirements.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b", // vision image
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from curriculum design to student support and career guidance.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216", // award excellence image
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a supportive community of learners, educators, and industry professionals working together.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c", // community teamwork
    },
  ];

  // Sample team member images
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Lead Python Instructor",
      experience: "15+ years at Google, Microsoft",
      image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39", // female professional
    },
    {
      name: "Michael Chen",
      role: "Java Architecture Expert",
      experience: "12+ years at Amazon, Oracle",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d", // male professional
    },
    {
      name: "Priya Sharma",
      role: "Career Counselor",
      experience: "8+ years in Tech Recruiting",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", // female professional smiling
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navigation />
      <main>
        {/* Hero Section with background image */}
        <section
          className="bg-cover bg-center py-24"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
          }}
        >
          <div className="bg-black/70 py-16 px-6 sm:px-6 lg:px-8 text-center rounded-xl max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-indigo-500">TechInstitute</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming careers through expert technical education since 2015.
              We've helped over 5,000 students build successful careers in technology.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-10 bg-gradient-to-b bg-gradient-to-b bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-white">Our Story</h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Founded in 2015 with a simple mission: to make quality technical
                    education accessible to everyone. What started as a small training
                    center has grown into one of the most trusted names in programming
                    education.
                  </p>
                  <p>
                    Our founders, experienced software engineers from top tech companies,
                    recognized the gap between traditional education and industry
                    requirements. They set out to create a learning environment that
                    combines theoretical knowledge with practical, hands-on experience.
                  </p>
                  <p>
                    Today, we're proud to have trained over 5,000 students, with a 95%
                    placement rate. Our alumni work at leading companies across the globe,
                    from startups to Fortune 500 corporations.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-8 text-white">
                  <div>
                    <div className="text-3xl font-bold text-indigo-500">5000+</div>
                    <div className="text-gray-400">Students Trained</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-indigo-500">95%</div>
                    <div className="text-gray-400">Placement Rate</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-tr from-indigo-800 to-indigo-600 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Us?</h3>
                <ul className="space-y-4 text-gray-300">
                  {[
                    "Industry-experienced instructors",
                    "Hands-on project-based learning",
                    "Small class sizes for personalized attention",
                    "100% job placement assistance",
                    "State-of-the-art facilities",
                    "Flexible learning options",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-indigo-400 rounded-full inline-block"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-10 bg-gradient-to-b bg-gradient-to-r from-indigo-900 via-black to-indigo-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Our Values</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                These core values guide everything we do and shape the learning
                experience we provide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center backdrop-blur-sm bg-indigo-900/40 border border-indigo-700 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 ease-in-out" // Added hover effects
                >
                  <CardHeader>
                    <div className="w-full h-32 mb-4 overflow-hidden rounded-lg">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-indigo-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Preview Section */}
        <section className="py-10 bg-gradient-to-b bg-gradient-to-b bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Our instructors are industry veterans with years of real-world experience
              at leading tech companies.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="bg-indigo-900/30 border border-indigo-700 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 ease-in-out" // Added hover effects
                >
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-indigo-500 shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardTitle className="text-lg text-white">{member.name}</CardTitle>
                    <Badge className="bg-indigo-700 text-indigo-100 mt-2 inline-block px-3 py-1 rounded-full">
                      {member.role}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {member.experience}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};


export default About;