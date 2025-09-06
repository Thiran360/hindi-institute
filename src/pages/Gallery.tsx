import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building,
  Calendar,
  Code,
  Users,
  Award,
  ExternalLink,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const iconPop = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "backOut" } },
};

const Gallery = () => {
  const campusImages = [
    {
      title: "Modern Computer Lab",
      description: "State-of-the-art facilities with latest hardware",
      category: "Facilities",
      image: "data:image/jpeg;base64,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",
    },
    {
      title: "Interactive Classroom",
      description: "Smart boards and collaborative learning spaces",
      category: "Facilities",
      image: "https://pharmacy.ufl.edu/files/2016/10/2016-08-23_College_of_Pharmacy-6565_web.jpg",
    },
    {
      title: "Student Lounge",
      description: "Comfortable spaces for networking and relaxation",
      category: "Facilities",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    },
    {
      title: "Library & Study Area",
      description: "Quiet zones for focused learning and research",
      category: "Facilities",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    },
    {
      title: "Project Workspace",
      description: "Dedicated areas for team projects and collaboration",
      category: "Facilities",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      title: "Campus Entrance",
      description: "Welcome to TechInstitute - Your gateway to success",
      category: "Campus",
      image: "https://images.unsplash.com/photo-1503676382389-4809596d5290",
    },
  ];

  const events = [
    {
      title: "Annual Tech Symposium 2024",
      description: "Industry leaders sharing insights on latest technologies",
      date: "March 2024",
      category: "Conference",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    },
    {
      title: "Coding Competition",
      description: "Students showcasing their programming skills",
      date: "February 2024",
      category: "Competition",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
    {
      title: "Industry Connect Session",
      description: "Direct interaction with tech company representatives",
      date: "January 2024",
      category: "Networking",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Graduation Ceremony",
      description: "Celebrating our successful graduates",
      date: "December 2023",
      category: "Ceremony",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    },
    {
      title: "Workshop on AI & ML",
      description: "Hands-on session with machine learning experts",
      date: "November 2023",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "Career Fair 2023",
      description: "Multiple companies offering placement opportunities",
      date: "October 2023",
      category: "Career",
      image: "https://lahore.comsats.edu.pk/offices/arcd/images/Career-Fairs/1.jpg",
    },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack web application with payment integration",
      technology: "Python Django",
      student: "Priya Sharma - Python Batch 2024",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
    {
      title: "Inventory Management System",
      description: "Enterprise-level system for warehouse management",
      technology: "Java Spring Boot",
      student: "Rahul Kumar - Java Batch 2024",
      image: "https://cdn.prod.website-files.com/67c68c93736617d0ce4e4f7b/67eed72de17b37c2ccd86622_675d37dc70219f4ef5baefbb_26.%2520Best%252011%2520Open%2520Source%2520Inventory%2520Management%2520Software%2520in%25202024.webp",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics platform for social media management",
      technology: "Python Django",
      student: "Anita Patel - Python Batch 2024",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    },
    {
      title: "Banking Application",
      description: "Secure banking system with microservices architecture",
      technology: "Java Spring Boot",
      student: "Vikram Singh - Java Batch 2023",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    },
    {
      title: "Learning Management System",
      description: "Online education platform with video streaming",
      technology: "Python Django",
      student: "Sneha Gupta - Python Batch 2023",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYA2qHAcy7i_4Fgl2cMxLkD9-zkpy5tad9TecSTr26yitCF5jVzJmkFwajDpOE-k0l5A0&usqp=CAU",
    },
    {
      title: "Real-time Chat Application",
      description: "WebSocket-based messaging platform",
      technology: "Java Spring Boot",
      student: "Amit Kumar - Java Batch 2023",
      image: "https://files.ably.io/ghost/prod/2023/06/the-ultimate-guide-to-chat-app-architecture.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-800">
      <Navigation />
      <main>
        {/* Hero Section with Video */}
        <section className="relative h-[80vh] w-full flex items-center justify-center text-white overflow-hidden">
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    src="https://videos.pexels.com/video-files/856190/856190-hd_1920_1080_24fps.mp4"
  />
  <div className="absolute inset-0 bg-black/60"></div>
  <div className="relative z-10 text-center px-6">
    <motion.div initial="hidden" animate="show" variants={stagger}>
      <motion.h1
        variants={fadeUp}
        className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
      >
        Our <span className="text-amber-400">Gallery</span> ✨
      </motion.h1>
      <motion.p
        variants={fadeUp}
        className="text-xl text-white/90 max-w-3xl mx-auto"
      >
        Explore our modern facilities, exciting events, and outstanding
        student projects. See what makes TechInstitute the perfect place
        for your learning journey.
      </motion.p>
    </motion.div>
  </div>
</section>


        {/* Gallery Tabs */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="campus" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-12 bg-gray-700 p-1 rounded-full shadow-inner">
                <TabsTrigger value="campus" className="flex items-center gap-2 data-[state=active]:bg-amber-500 data-[state=active]:text-gray-900 rounded-full transition-all duration-300 text-gray-200 hover:text-white">
                  <Building className="h-4 w-4" /> Campus
                </TabsTrigger>
                <TabsTrigger value="events" className="flex items-center gap-2 data-[state=active]:bg-amber-500 data-[state=active]:text-gray-900 rounded-full transition-all duration-300 text-gray-200 hover:text-white">
                  <Calendar className="h-4 w-4" /> Events
                </TabsTrigger>
                <TabsTrigger value="projects" className="flex items-center gap-2 data-[state=active]:bg-amber-500 data-[state=active]:text-gray-900 rounded-full transition-all duration-300 text-gray-200 hover:text-white">
                  <Code className="h-4 w-4" /> Projects
                </TabsTrigger>
              </TabsList>

              {/* Campus Photos */}
              <TabsContent value="campus">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={stagger}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {campusImages.map((image, index) => (
                    <motion.div key={index} variants={fadeUp}>
                      <Card className="overflow-hidden bg-gray-800 text-white hover:shadow-lg transition-all duration-300 group rounded-xl border border-gray-700">
                        <div className="relative">
                          <img
                            src={image.image}
                            alt={image.title}
                            className="h-48 w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-white border-white hover:bg-white hover:text-gray-900"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" /> View Full
                            </Button>
                          </div>
                          <Badge className="absolute top-4 left-4 bg-amber-500 text-gray-900">
                            {image.category}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-white mb-2">
                            {image.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {image.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              {/* Events */}
              <TabsContent value="events">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={stagger}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {events.map((event, index) => (
                    <motion.div key={index} variants={fadeUp}>
                      <Card className="overflow-hidden bg-gray-800 text-white hover:shadow-lg transition-all duration-300 group rounded-xl border border-gray-700">
                        <div className="relative">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="h-48 w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-white border-white hover:bg-white hover:text-gray-900"
                            >
                              <Play className="h-4 w-4 mr-2" /> Watch Video
                            </Button>
                          </div>
                          <Badge className="absolute top-4 left-4 bg-amber-500 text-gray-900">
                            {event.category}
                          </Badge>
                          <Badge variant="outline" className="absolute top-4 right-4 bg-gray-900 text-white border-gray-600">
                            {event.date}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-white mb-2">
                            {event.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {event.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              {/* Projects */}
              <TabsContent value="projects">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={stagger}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {projects.map((project, index) => (
                    <motion.div key={index} variants={fadeUp}>
                      <Card className="overflow-hidden bg-gray-800 text-white hover:shadow-lg transition-all duration-300 group rounded-xl border border-gray-700">
                        <div className="relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-48 w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-black border-white hover:bg-white hover:text-gray-900"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" /> View Demo
                            </Button>
                          </div>
                          <Badge className="absolute top-4 left-4 bg-amber-500 text-gray-900">
                            {project.technology}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-white mb-2">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-400 mb-3">
                            {project.description}
                          </p>
                          <p className="text-xs text-amber-400 font-medium">
                            {project.student}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
