import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Clock,
  Users,
  Star,
  ArrowRight,
  BookOpen,
  Code,
  CheckCircle,
  Briefcase,
  Laptop,
  Lightbulb,
  Cpu, // For AI
  Layers, // For Full Stack
  Server, // For DevOps
  Sparkles,
} from "lucide-react";
import pythonImage from "@/assets/python-course.jpg";
import javaImage from "@/assets/java-course.jpg";
import { motion } from "framer-motion";

// Framer Motion Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const Courses = () => {
  // UPDATED Course Data
  const courses = [
    {
      id: 1,
      title: "Python Full-Stack Bootcamp",
      description: "An intensive 12-week program to master Python, Django, DRF, and DevOps for a career in backend development.",
      image: pythonImage,
      duration: "3 Months",
      students: "2500+",
      rating: 4.9,
      level: "Beginner Friendly",
      price: "₹35,000",
      modules: 3,
      projects: 3,
      path: "/courses/python",
      features: [
        "Core Python & OOP Mastery",
        "API Development with Django REST Framework",
        "Containerization with Docker",
        "Automated Deployments with CI/CD",
        "Final Portfolio Capstone Project"
      ]
    },
    {
      id: 2,
      title: "Java Full-Stack Bootcamp",
      description: "A comprehensive 24-week bootcamp on building enterprise-grade applications with Java, Spring Boot, and Microservices.",
      image: javaImage,
      duration: "6 Months",
      students: "1800+",
      rating: 4.8,
      level: "Beginner to Advanced",
      price: "₹45,000",
      modules: 5,
      projects: 5,
      path: "/courses/java",
      features: [
        "Modern Java & Concurrency",
        "Spring Boot & Spring Security",
        "Microservice Architecture with Kafka",
        "JPA, Hibernate & Database Mastery",
        "Enterprise-level Capstone Project"
      ]
    }
  ];

  // UPDATED Upcoming Courses with more details
  const upcomingCourses = [
    {
      title: "Full Stack Web Development",
      description: "Become a MERN stack expert. Master React, Node.js, Express, and MongoDB to build complete web applications.",
      icon: Layers,
      keyFocus: ["React Hooks & State Management", "Building REST APIs with Node.js", "MongoDB Schema Design"]
    },
    {
      title: "Data Science & AI",
      description: "Dive into the world of AI. Learn Python, machine learning, deep learning, and data visualization.",
      icon: Cpu,
      keyFocus: ["Machine Learning Algorithms", "Deep Learning with TensorFlow", "Data Analysis with Pandas"]
    },
    {
      title: "DevOps Engineering",
      description: "Master the tools and practices to automate infrastructure, deployment, and testing pipelines.",
      icon: Server,
      keyFocus: ["AWS Cloud Services", "Infrastructure as Code (Terraform)", "CI/CD with Jenkins & GitHub Actions"]
    }
  ];

  // NEW "Why Choose Us?" data
  const whyChooseUs = [
    { icon: Users, title: "Expert Mentors", description: "Learn from industry veterans who have worked at top tech companies." },
    { icon: Briefcase, title: "Placement Support", description: "Get 100% placement assistance, from resume building to mock interviews." },
    { icon: Code, title: "Project-Based Learning", description: "Build a robust portfolio with multiple real-world projects." },
    { icon: Laptop, title: "Flexible Hybrid Model", description: "Attend live classes online and access recordings anytime." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 font-sans text-gray-800">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-purple-800 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v4h2v-4h4v-2h-4v-4h-2v4h-4v2h4zm0 60v-4h2v4h4v2h-4v4h-2v-4h-4v-2h4zm30-24v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm30 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 0v4h2v-4h4v-2h-4v-4h-2v4h-4v2h4zm0 60v-4h2v4h4v2h-4v4h-2v-4h-4v-2h4z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Unlock Your <span className="text-pink-300">Tech Potential</span> ✨
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-white/90 max-w-3xl mx-auto">
                Our bootcamps are designed to make you a job-ready developer. Master the in-demand skills that top companies are looking for.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="py-10 bg-gradient-to-t from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="text-4xl font-bold text-purple-800 mb-4">Our Flagship Bootcamps</motion.h2>
              <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="text-lg text-gray-600 max-w-3xl mx-auto">Our most popular courses with a proven track record of successful placements.</motion.p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              {courses.map((course) => (
                <motion.div key={course.id} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
                  <Card className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden flex flex-col h-full">
                    <div className="relative">
                      <img src={course.image} alt={course.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-lg">{course.price}</div>
                    </div>
                    <CardHeader className="pb-4">
                      <Badge className="bg-purple-100 text-purple-800 w-fit mb-2">{course.level}</Badge>
                      <CardTitle className="text-2xl text-purple-900 group-hover:text-pink-600 transition-colors">{course.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-base pt-1">{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700 mb-6">
                          <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-pink-500" /><span>{course.duration}</span></div>
                          <div className="flex items-center gap-2"><Users className="h-4 w-4 text-pink-500" /><span>{course.students} Enrolled</span></div>
                          <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-pink-500" /><span>{course.modules} Modules</span></div>
                          <div className="flex items-center gap-2"><Code className="h-4 w-4 text-pink-500" /><span>{course.projects}+ Projects</span></div>
                        </div>
                        <ul className="space-y-2">
                          {course.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3 text-sm text-gray-800">
                              <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />{feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-4 pt-6">
                        <Button size="lg" className="flex-1 bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1" asChild>
                          <Link to={course.path} className="flex items-center justify-center gap-2">View Details <ArrowRight className="h-4 w-4" /></Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-10 bg-gradient-to-b bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="text-4xl font-bold text-indigo-800 mb-4">Why Learn With Us?</motion.h2>
              <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="text-lg text-gray-600 max-w-3xl mx-auto">We provide a comprehensive learning ecosystem to ensure your success.</motion.p>
            </div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <Card className="text-center h-full border-2 border-indigo-100 bg-indigo-50 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                    <CardHeader>
                      <div className="p-4 rounded-full bg-indigo-600 text-white w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <feature.icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl text-indigo-900">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section className="py-10 bg-gradient-to-b bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="text-4xl font-bold text-purple-800 mb-4">Explore Our New Programs</motion.h2>
              <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="text-lg text-gray-600 max-w-3xl mx-auto">Get ready for the next wave of in-demand tech skills. Join the waitlist to be notified first!</motion.p>
            </div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="grid md:grid-cols-3 gap-8">
              {upcomingCourses.map((course, index) => (
                <motion.div key={index} variants={fadeUp} className="h-full">
                  <Card className="text-left h-full border-2 border-pink-100 bg-pink-50 rounded-xl shadow-sm hover:shadow-lg hover:border-pink-300 transition-all duration-300 flex flex-col">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-3 rounded-full bg-pink-500 text-white flex items-center justify-center"><course.icon className="h-6 w-6" /></div>
                        <Badge className="bg-gray-700 text-white">Coming Soon</Badge>
                      </div>
                      <CardTitle className="text-xl text-pink-900">{course.title}</CardTitle>
                      <CardDescription className="text-gray-700 pt-1">{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="font-semibold text-pink-800 mb-2">Key Focus Areas:</h4>
                        <ul className="space-y-1.5 text-sm text-gray-700">
                          {course.keyFocus.map((focus, i) => (
                            <li key={i} className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-pink-400" />{focus}</li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="outline" className="w-full mt-6 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white transition-colors">Get Notified</Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Courses;