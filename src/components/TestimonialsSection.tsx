import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MapPin, Briefcase } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Senior Python Developer",
      company: "Google",
      location: "Bangalore",
      rating: 5,
      course: "Python Programming Mastery",
      package: "₹22 LPA",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      testimonial:
        "The Python course at TechInstitute completely transformed my career. The hands-on projects and industry-experienced instructors helped me land my dream job at Google. The curriculum is perfectly aligned with industry requirements.",
      beforeRole: "Junior Developer",
      beforePackage: "₹4 LPA",
      courseYear: "2023",
    },
    {
      id: 2,
      name: "Anita Desai",
      role: "Java Architect",
      company: "Microsoft",
      location: "Hyderabad",
      rating: 5,
      course: "Java Development Bootcamp",
      package: "₹28 LPA",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      testimonial:
        "The Java bootcamp exceeded all my expectations. From Spring Boot to microservices, everything was covered in detail. The real-world projects prepared me for the challenges I face daily at Microsoft.",
      beforeRole: "Software Engineer",
      beforePackage: "₹6 LPA",
      courseYear: "2022",
    },
    {
      id: 3,
      name: "Arjun Patel",
      role: "Full Stack Developer",
      company: "Amazon",
      location: "Mumbai",
      rating: 5,
      course: "Python Programming Mastery",
      package: "₹25 LPA",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      testimonial:
        "Best investment I ever made! The instructors are industry experts who share real-world insights. The job placement support was incredible - I got multiple offers after completing the course.",
      beforeRole: "Support Engineer",
      beforePackage: "₹3.5 LPA",
      courseYear: "2023",
    },
    {
      id: 4,
      name: "Sneha Sharma",
      role: "DevOps Engineer",
      company: "Netflix",
      location: "Pune",
      rating: 5,
      course: "Java Development Bootcamp",
      package: "₹20 LPA",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      testimonial:
        "The combination of Java development and DevOps practices taught here is unmatched. I learned not just coding but also deployment, monitoring, and scaling applications. Now I work on systems serving millions of users!",
      beforeRole: "QA Engineer",
      beforePackage: "₹5 LPA",
      courseYear: "2022",
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Data Scientist",
      company: "Flipkart",
      location: "Delhi",
      rating: 5,
      course: "Python Programming Mastery",
      package: "₹18 LPA",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
      testimonial:
        "The Python data science modules opened up a completely new career path for me. The practical approach to machine learning and data analysis helped me transition from manual testing to data science.",
      beforeRole: "Manual Tester",
      beforePackage: "₹4 LPA",
      courseYear: "2023",
    },
    {
      id: 6,
      name: "Priyanka Reddy",
      role: "Backend Engineer",
      company: "Uber",
      location: "Bangalore",
      rating: 5,
      course: "Java Development Bootcamp",
      package: "₹24 LPA",
      image: "https://randomuser.me/api/portraits/women/24.jpg",
      testimonial:
        "The microservices architecture training was game-changing. I went from building simple applications to designing distributed systems. The real-time projects gave me confidence to tackle complex problems at Uber.",
      beforeRole: "Frontend Developer",
      beforePackage: "₹7 LPA",
      courseYear: "2022",
    },
  ];

  const stats = [
    { label: "Average Salary Increase", value: "400%" },
    { label: "Job Placement Rate", value: "95%" },
    { label: "Student Satisfaction", value: "4.9/5" },
    { label: "Industry Partners", value: "500+" },
  ];

  return (
    <section className="py-10 bg-gradient-to-b bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Success Stories from Our{" "}
            <span className="text-indigo-400">Alumni</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real stories from real students who transformed their careers with
            our programs. See how our alumni are making an impact at top
            companies worldwide.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 text-white">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-indigo-600 transition-all duration-300 group bg-gray-800 border border-gray-700"
            >
              <CardContent className="p-6 text-white">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Profile Image with Fallback */}
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-gray-400">
                        <MapPin className="h-3 w-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Company & Role */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-indigo-600 text-white flex items-center gap-1 text-xs">
                      <Briefcase className="h-3 w-3" />
                      {testimonial.company}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs text-gray-400 border-gray-400"
                    >
                      {testimonial.package}
                    </Badge>
                  </div>
                  <div className="text-sm font-medium">{testimonial.role}</div>
                  <div className="text-xs text-gray-400">
                    Course: {testimonial.course} ({testimonial.courseYear})
                  </div>
                </div>

                {/* Career Growth */}
                <div className="bg-indigo-900 p-3 rounded-lg mb-4">
                  <div className="text-xs text-gray-400 mb-1">Career Growth</div>
                  <div className="flex items-center justify-between text-sm text-white">
                    <div>
                      <div className="font-medium">{testimonial.beforeRole}</div>
                      <div className="text-indigo-300">
                        {testimonial.beforePackage}
                      </div>
                    </div>
                    <div className="text-indigo-400 font-bold text-lg">→</div>
                    <div>
                      <div className="font-medium">{testimonial.role}</div>
                      <div className="text-indigo-300 font-semibold">
                        {testimonial.package}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="relative">
                  <Quote className="h-8 w-8 text-indigo-400/20 absolute -top-2 -left-1" />
                  <p className="text-sm text-gray-400 leading-relaxed pl-6 italic">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-700 to-purple-700 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with
              our industry-focused programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-white/20 text-white px-4 py-2 text-sm">
                Next Batch Starts Soon
              </Badge>
              <Badge className="bg-white/20 text-white px-4 py-2 text-sm">
                Limited Seats Available
              </Badge>
              <Badge className="bg-white/20 text-white px-4 py-2 text-sm">
                100% Job Assistance
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
