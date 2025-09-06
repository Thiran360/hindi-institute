import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import pythonImage from "@/assets/python-course.jpg";
import javaImage from "@/assets/java-course.jpg";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Python Programming Mastery",
      description: "Complete Python course from basics to advanced with Django, Flask, and data science fundamentals.",
      image: pythonImage,
      duration: "6 Months",
      students: "2500+",
      rating: 4.9,
      level: "Beginner to Advanced",
      price: "₹25,000",
      features: [
        "Python Fundamentals & OOP",
        "Web Development with Django",
        "Data Science with Pandas",
        "API Development",
        "Real-world Projects"
      ],
      path: "/courses/python"
    },
    {
      id: 2,
      title: "Java Development Bootcamp",
      description: "Master Java programming with Spring Boot, microservices, and enterprise application development.",
      image: javaImage,
      duration: "8 Months",
      students: "1800+",
      rating: 4.8,
      level: "Beginner to Advanced",
      price: "₹30,000",
      features: [
        "Core Java & Advanced Concepts",
        "Spring Boot Framework",
        "Microservices Architecture",
        "Database Integration",
        "Enterprise Projects"
      ],
      path: "/courses/java"
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-b bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Featured <span className="text-indigo-400">Courses</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose from our industry-leading courses designed by experts and trusted by top companies.
            Get hands-on experience with real projects and guaranteed job placement support.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-indigo-600 transition-all duration-300 border-0 bg-gray-800 overflow-hidden">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-indigo-600 text-white">
                    {course.level}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90 text-gray-900 border-white">
                    {course.price}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-white group-hover:text-indigo-400 transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} enrolled</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Course Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">What you'll learn:</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    className="flex-1 bg-indigo-500 text-white hover:shadow-indigo-700"
                    asChild
                  >
                    <Link to={course.path} className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white"
                    asChild
                  >
                    <Link to="/appointment">Enroll Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Courses CTA */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-8"
            asChild
          >
            <Link to="/courses" className="flex items-center gap-2">
              View All Courses
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
