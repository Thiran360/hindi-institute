import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Award,
  BookOpen,
  Boxes,
  Briefcase,
  CheckCircle,
  ClipboardCheck,
  Clock,
  Code,
  Database,
  Download,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Lightbulb,
  MessageSquare,
  Play,
  Rocket,
  ServerCog,
  Shield,
  Users,
  Wrench,
  Sparkles,
  ArrowRight,
  Target,
} from "lucide-react";
import javaImage from "@/assets/java-course.jpg";
import TrainerProfile from "@/components/TrainerProfile";
import { getTrainersBySpecialization } from "@/data/trainers";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

// Framer Motion Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const iconPop = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "backOut" } },
};

const itemSlideIn = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const JavaCourse = () => {
  const javaTrainers = getTrainersBySpecialization("Java");

  // ======= INTENSIVE 6-MONTH (24 WEEKS) JAVA SYLLABUS =======
  const syllabus = [
    {
      title: "Module 1: Java Foundations (Weeks 1-4)",
      duration: "4 Weeks",
      units: [
        { name: "U1: Core Java & Tooling", items: ["JDK, JRE, JVM Internals", "Project setup with Maven/Gradle, IntelliJ Mastery", "Language Fundamentals: Types, Operators, Control Flow", "Git Workflow & Clean Code Principles"], },
        { name: "U2: OOP & Modern Java", items: ["Classes, Objects, Inheritance, Polymorphism", "SOLID Principles in Practice", "Modern Features: Records, Lambdas, Streams, Optional", "Lab: Build an OOP-based command-line application"], },
      ],
      outcomes: ["Write clean, idiomatic, modern Java", "Apply SOLID principles effectively"],
    },
    {
      title: "Module 2: Concurrency & Data Persistence (Weeks 5-10)",
      duration: "6 Weeks",
      units: [
        { name: "U1: Advanced Data Structures & Concurrency", items: ["Collections Framework Deep Dive", "Threads, Executors, and the `java.util.concurrent` package", "Intro to Virtual Threads (Project Loom)", "Lab: Build a multi-threaded web scraper"], },
        { name: "U2: SQL & JDBC", items: ["Advanced SQL and Database Design with PostgreSQL", "JDBC, Connection Pooling (HikariCP)", "Lab: Create a data access layer with raw JDBC"], },
        { name: "U3: JPA & Hibernate", items: ["JPA/Hibernate Mappings, Entity Lifecycle, Fetch Strategies", "Handling transactions and database migrations with Flyway", "Lab: Refactor the data layer to use Hibernate"], },
      ],
      outcomes: ["Build concurrent applications", "Master data persistence with JDBC and JPA"],
    },
    {
      title: "Module 3: Spring Framework & APIs (Weeks 11-16)",
      duration: "6 Weeks",
      units: [
        { name: "U1: Spring Core & Spring Boot", items: ["Inversion of Control (IoC), Dependency Injection (DI)", "Spring Boot Auto-configuration, Profiles, and Properties", "Building REST APIs with Spring MVC", "Lab: Build a RESTful service for a library"], },
        { name: "U2: Spring Data & Security", items: ["Spring Data JPA for simplified repositories", "Spring Security: Authentication, Authorization, JWT", "Securing API endpoints with method-level security", "Lab: Secure the library API"], },
        { name: "U3: API Best Practices", items: ["Advanced REST: Validation, Error Handling, Pagination", "API Documentation with OpenAPI/Swagger", "Intro to Reactive Programming with WebFlux", "Lab: Production-harden the API"], },
      ],
      outcomes: ["Build production-ready, secure APIs with Spring Boot", "Understand reactive programming principles"],
    },
    {
      title: "Module 4: Microservices & DevOps (Weeks 17-22)",
      duration: "6 Weeks",
      units: [
        { name: "U1: Microservice Architecture", items: ["DDD Lite: Bounded Contexts & Aggregates", "Asynchronous Communication with Kafka", "Resilience Patterns: Circuit Breakers (Resilience4j)", "Lab: Break a monolith into two communicating microservices"], },
        { name: "U2: Testing Strategies", items: ["Unit & Integration Testing (JUnit 5, Mockito)", "Testing with Containers (Testcontainers)", "Intro to Performance Testing (JMeter/Gatling)", "Lab: Write a comprehensive test suite for a microservice"], },
        { name: "U3: Containerization & CI/CD", items: ["Building efficient Docker images for Java apps", "Automating builds and tests with GitHub Actions", "Deploying containers to the cloud (e.g., AWS App Runner)", "Lab: Create a full CI/CD pipeline for deployment"], },
      ],
      outcomes: ["Design and build resilient microservices", "Automate testing and deployment with DevOps practices"],
    },
    {
      title: "Module 5: Capstone Project (Weeks 23-24)",
      duration: "2 Weeks",
      units: [
        { name: "U1: Project Sprint & Showcase", items: ["System design, architecture, and planning", "Focused development sprints with mentor code reviews", "Final demo, project documentation, and portfolio preparation", "Career prep: Mock interviews and resume refinement"], },
      ],
      outcomes: ["Deliver a production-grade capstone project", "Build an interview-ready portfolio"],
    },
  ];

  const projectCatalog = [
    { name: "E-Commerce Platform", stack: "Java, Spring Boot, JPA, PostgreSQL, Kafka, Docker", goals: ["API for catalog, cart, checkout, and orders", "Event-driven architecture for order processing", "Containerized and ready for cloud deployment"], },
    { name: "Banking Core API", stack: "Java, Spring Boot, Spring Security, JPA, PostgreSQL, Docker", goals: ["Secure endpoints for accounts, transfers, and transactions", "Implement robust authentication and authorization (JWT)", "Ensure data integrity and auditability"], },
    { name: "Real-time Chat Service", stack: "Java, Spring WebFlux, WebSockets, Redis Pub/Sub, Docker", goals: ["WebSocket backend for real-time messaging", "Manage user presence and chat rooms", "Achieve horizontal scalability using Redis"], },
    { name: "Job Portal API", stack: "Java, Spring Boot, JPA, Elasticsearch, Docker", goals: ["Advanced search and filtering capabilities with Elasticsearch", "APIs for job postings, applications, and user profiles", "Efficiently process and manage large datasets"], },
  ];

  const tools = [
    { icon: Code, label: "Java 21" }, { icon: GraduationCap, label: "Spring Boot" }, { icon: Database, label: "PostgreSQL" }, { icon: Boxes, label: "Kafka/Redis" }, { icon: GitBranch, label: "Git/GitHub Actions" }, { icon: ServerCog, label: "Docker" }, { icon: Globe, label: "AWS" }, { icon: CheckCircle, label: "JUnit 5" },
  ];

  const faqs = [
    { q: "Do I need prior Java knowledge?", a: "Helpful but not required. We start from foundations and ramp up quickly with guided labs.", },
    { q: "Is placement guaranteed?", a: "We provide 100% placement assistance—mock interviews, referrals, and career coaching until you land a role.", },
    { q: "How are classes delivered?", a: "Hybrid: live instructor-led sessions + recordings + weekly doubt-clearing clinics + 1:1 mentor hours.", },
    { q: "How is my progress evaluated?", a: "Your growth is measured through hands-on labs, mid-term projects, and your final capstone. We focus on practical, real-world skills.", },
  ];

  const weeklySchedule = [
    { day: "Monday", title: "Deep Dive Lecture", time: "7-9 PM", description: "Introduce the week's core topic with live coding and theory.", icon: BookOpen },
    { day: "Tuesday", title: "Guided Lab Session", time: "7-9 PM", description: "Work alongside instructors to apply new concepts in a hands-on lab.", icon: Wrench },
    { day: "Wednesday", title: "Project Work & Collaboration", time: "Self-Paced", description: "Dedicated time to work on projects and collaborate with peers on Discord.", icon: Users },
    { day: "Thursday", title: "Q&A Clinic & Mentor Hours", time: "7-9 PM", description: "Get doubts cleared in a group session and book 1:1 slots for feedback.", icon: MessageSquare },
    { day: "Friday", title: "Code Review & Assessment", time: "Self-Paced", description: "Submit your lab for professional feedback and take a short quiz.", icon: ClipboardCheck },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 font-sans text-gray-800">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative py-10 bg-gradient-to-r from-purple-800 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v4h2v-4h4v-2h-4v-4h-2v4h-4v2h4zm0 60v-4h2v4h4v2h-4v4h-2v-4h-4v-2h4zm30-24v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm30 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 0v4h2v-4h4v-2h-4v-4h-2v4h-4v2h4zm0 60v-4h2v4h4v2h-4v4h-2v-4h-4v-2h4z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate="show" variants={stagger}>
                <motion.div variants={fadeUp}><Badge className="bg-pink-400 text-gray-900 mb-4 px-3 py-1 text-sm rounded-full shadow">Enterprise Ready</Badge></motion.div>
                <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Java Full-Stack <span className="text-pink-300">Bootcamp</span></motion.h1>
                <motion.p variants={fadeUp} className="text-xl opacity-90 mb-8 max-w-lg">Become a production-ready Java/Spring engineer. Build, scale, and ship enterprise systems with confidence in just 6 months.</motion.p>
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-pink-400 text-gray-900 hover:bg-pink-300 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1" asChild><Link to="/appointment">Enroll Now - ₹45,000</Link></Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"><Play className="h-5 w-5 mr-2" /> Watch Demo</Button>
                </motion.div>
                <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-6">
                  {[{ k: "Duration", v: "6 Months" }, { k: "Students", v: "1800+" }, { k: "Rating", v: "4.8" }].map((m, i) => (<motion.div key={i} variants={fadeUp} className="border-t-2 border-pink-300 pt-4"><div className="text-3xl font-bold text-pink-200">{m.v}</div><div className="opacity-80 text-sm">{m.k}</div></motion.div>))}
                </motion.div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}><img src={javaImage} alt="Java Course" className="rounded-3xl shadow-2xl border-4 border-white/30 transform hover:scale-105 transition-transform duration-500 ease-in-out" /></motion.div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="text-4xl font-bold mb-4 text-indigo-800">Why Our Bootcamp? 🌟</motion.h2>
            <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              We go beyond theory to teach you the skills employers are actively seeking. Our program is a direct path to a new career.
            </motion.p>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{ icon: Award, title: "Industry Aligned", desc: "Curriculum for top enterprise roles" }, { icon: Layers, title: "Project-Based", desc: "Build 5+ major portfolio projects" }, { icon: Shield, title: "Secure by Design", desc: "Master Spring Security & best practices" }, { icon: Rocket, title: "Career Focused", desc: "Mock interviews & portfolio reviews" }].map((f, i) => (
                <motion.div key={i} variants={iconPop} className="group">
                  <Card className="h-full border-2 border-transparent hover:border-indigo-400 transform hover:-translate-y-2 transition-all duration-300 ease-in-out shadow-md group-hover:shadow-lg rounded-xl">
                    <CardHeader className="text-center">
                      <div className="p-4 rounded-full bg-indigo-100 group-hover:bg-indigo-200 w-16 h-16 mx-auto mb-3 flex items-center justify-center transition-colors duration-300"><f.icon className="h-8 w-8 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300" /></div>
                      <CardTitle className="text-xl font-semibold text-indigo-800 group-hover:text-indigo-900">{f.title}</CardTitle>
                      <CardDescription className="text-gray-600">{f.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Overview + Details */}
        <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="lg:col-span-2">
              <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-4 text-purple-800">Program Overview</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-gray-600 mb-8">
                This isn't just a course; it's a career transformation program meticulously crafted to forge you into a job-ready, enterprise-level Java developer in 6 months. We guide you from the core principles of the Java language to the complexities of building scalable, resilient microservices with the Spring ecosystem. Our philosophy is simple: <strong>you learn by building</strong>. Every module is project-driven, ensuring you're not just memorizing syntax, but solving real-world problems like a professional engineer.
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={itemSlideIn}>
                  <Card className="h-full border-2 border-purple-100 bg-purple-50 rounded-xl shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-purple-800 flex items-center gap-2"><Users className="h-6 w-6" /> Is This Bootcamp For You?</CardTitle>
                      <CardDescription>This program is perfect if you are:</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-base text-gray-700">
                        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" /><span>An aspiring developer eager to start a career in a high-demand language.</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" /><span>A programmer from another language looking to transition to the Java ecosystem.</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" /><span>A recent graduate wanting to bridge the gap between academic and industry skills.</span></li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={itemSlideIn}>
                  <Card className="h-full border-2 border-pink-100 bg-pink-50 rounded-xl shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-pink-800 flex items-center gap-2"><Lightbulb className="h-6 w-6" /> Our Learning Methodology</CardTitle>
                      <CardDescription>How we ensure you succeed:</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-base text-gray-700">
                        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" /><span><strong>Live Interactive Sessions:</strong> Engage directly with expert instructors in real-time.</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" /><span><strong>Hands-On Projects:</strong> Apply every concept through practical coding labs and mini-projects.</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" /><span><strong>Professional Code Reviews:</strong> Receive personalized feedback to build industry-standard habits.</span></li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={itemSlideIn}>
                  <Card className="h-full border border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader><CardTitle className="text-xl text-purple-700 flex items-center gap-2"><Code className="h-6 w-6" /> What You'll Master</CardTitle></CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-base text-gray-700">
                        {["Modern Java & Concurrency", "Spring Boot & Spring Security", "REST APIs & Microservices", "JPA, Hibernate & SQL", "Kafka for Event-Driven Systems", "Testing with JUnit & Mockito", "Docker & CI/CD Pipelines", "Cloud Deployment on AWS"].map((item, i) => (<li key={i} className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-pink-500" /> {item}</li>))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={itemSlideIn}>
                  <Card className="h-full border border-purple-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader><CardTitle className="text-xl text-purple-700 flex items-center gap-2"><Briefcase className="h-6 w-6" /> Career Paths</CardTitle></CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-base text-gray-700">
                        {["Java Developer", "Spring Boot Developer", "Backend Engineer", "Microservices Engineer", "Platform Engineer"].map((item, i) => (<li key={i} className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-pink-500" /> {item}</li>))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
              <Card className="sticky top-24 bg-purple-50 border-2 border-purple-300 rounded-xl shadow-lg">
                <CardHeader className="border-b border-purple-200 pb-4"><CardTitle className="text-2xl text-purple-800">Course Details</CardTitle></CardHeader>
                <CardContent className="space-y-4 pt-6 text-gray-700">
                  <div className="flex justify-between items-center text-lg"><span>Duration</span><span className="font-semibold text-purple-900">6 Months</span></div>
                  <div className="flex justify-between items-center text-lg"><span>Format</span><span className="font-semibold text-purple-900">Hybrid (Live + Recorded)</span></div>
                  <div className="flex justify-between items-center text-lg"><span>Class Size</span><span className="font-semibold text-purple-900">Max 15</span></div>
                  <div className="flex justify-between items-center text-lg"><span>Projects</span><span className="font-semibold text-purple-900">5+ with Capstone</span></div>
                  <div className="flex justify-between items-center text-lg"><span>Certificate</span><span className="font-semibold text-purple-900">Industry-Recognized</span></div>
                  <div className="border-t border-purple-200 pt-6">
                    <div className="text-4xl font-extrabold text-pink-600 mb-3">₹45,000</div>
                    <Button className="w-full mb-3 bg-pink-500 text-white hover:bg-pink-600 transition-all duration-300 ease-in-out text-lg py-3 rounded-lg shadow-md" asChild><Link to="/appointment">Enroll Now</Link></Button>
                    <Button variant="outline" className="w-full border-pink-500 text-pink-600 hover:bg-pink-50 transition-all duration-300 ease-in-out text-lg py-3 rounded-lg shadow-md"><Download className="h-5 w-5 mr-2" /> Download Syllabus</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Deep Syllabus Tabs */}
       <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold mb-4 text-indigo-800">Detailed Curriculum 🗺️</h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">Our 6-month roadmap to becoming an enterprise Java developer. Expand each module to see the topics and labs.</p>
            </div>
            <Tabs defaultValue="syllabus" className="w-full">
              <TabsList className="grid md:grid-cols-3 gap-2 bg-purple-100 p-1 rounded-full shadow-inner">
                <TabsTrigger value="syllabus" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:rounded-full transition-all duration-300 text-purple-800 hover:text-purple-900">Syllabus</TabsTrigger>
                <TabsTrigger value="projects" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:rounded-full transition-all duration-300 text-purple-800 hover:text-purple-900">Projects</TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:rounded-full transition-all duration-300 text-purple-800 hover:text-purple-900">Tools</TabsTrigger>
              </TabsList>
              
              {/* Syllabus Tab Content */}
              <TabsContent value="syllabus" className="mt-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {syllabus.map((track, i) => (<motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={itemSlideIn}><AccordionItem value={`track-${i}`} className="border border-purple-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"><AccordionTrigger className="px-6 py-4"><div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2 text-left"><div className="font-bold text-xl text-purple-700">{track.title}</div><div className="flex items-center gap-2 text-base text-gray-600"><Clock className="h-5 w-5 text-pink-500" /> {track.duration}</div></div></AccordionTrigger><AccordionContent className="px-6 pb-6"><div className="grid md:grid-cols-2 gap-8"><div className="space-y-4">{track.units.map((u, idx) => (<Card key={idx} className="border border-pink-100 bg-pink-50 rounded-lg shadow-sm"><CardHeader><CardTitle className="text-lg text-pink-700">{u.name}</CardTitle></CardHeader><CardContent><ul className="list-disc list-inside text-base text-gray-700 space-y-1">{u.items.map((it, k) => (<li key={k}>{it}</li>))}</ul></CardContent></Card>))}</div><Card className="border border-purple-100 bg-purple-50 rounded-lg shadow-sm"><CardHeader><CardTitle className="text-lg text-purple-700">Learning Outcomes</CardTitle><CardDescription className="text-gray-600">What you’ll confidently do after this module</CardDescription></CardHeader><CardContent><ul className="space-y-2 text-base">{track.outcomes.map((o, oi) => (<li key={oi} className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{o}</span></li>))}</ul></CardContent></Card></div></AccordionContent></AccordionItem></motion.div>))}
                </Accordion>
                <div className="mt-12 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-700">How We Measure Your Growth 📈</h3>
                  <p className="text-gray-700 max-w-2xl mx-auto mb-6">Your progress is measured through practical, hands-on work that builds your portfolio, not just theoretical exams.</p>
                  <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="grid md:grid-cols-3 gap-6">
                    <motion.div variants={fadeUp}><Card className="p-6 border border-indigo-200 bg-indigo-50 rounded-xl"><div className="text-3xl font-bold text-indigo-700 mb-2">30%</div><h4 className="text-lg font-semibold text-indigo-800">Hands-on Labs</h4><p className="text-sm text-gray-600">Weekly exercises to apply concepts.</p></Card></motion.div>
                    <motion.div variants={fadeUp}><Card className="p-6 border border-indigo-200 bg-indigo-50 rounded-xl"><div className="text-3xl font-bold text-indigo-700 mb-2">30%</div><h4 className="text-lg font-semibold text-indigo-800">Mid-term Projects</h4><p className="text-sm text-gray-600">Mini-projects to solidify each module.</p></Card></motion.div>
                    <motion.div variants={fadeUp}><Card className="p-6 border border-indigo-200 bg-indigo-50 rounded-xl"><div className="text-3xl font-bold text-indigo-700 mb-2">40%</div><h4 className="text-lg font-semibold text-indigo-800">Final Capstone</h4><p className="text-sm text-gray-600">A complete, deployable portfolio piece.</p></Card></motion.div>
                  </motion.div>
                </div>
              </TabsContent>

              {/* Projects Tab Content */}
              <TabsContent value="projects" className="mt-8">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {projectCatalog.map((proj, i) => (<motion.div key={i} variants={fadeUp}><Card className="h-full border border-purple-200 bg-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-xl"><CardHeader><CardTitle className="text-xl text-purple-700">{proj.name}</CardTitle><CardDescription className="text-gray-600">{proj.stack}</CardDescription></CardHeader><CardContent><h4 className="font-semibold mb-3 text-purple-800">Learning Goals <Target className="h-5 w-5 inline-block ml-1 text-pink-500" /></h4><ul className="list-disc list-inside text-base text-gray-700 space-y-1">{proj.goals.map((g, gi) => (<li key={gi}>{g}</li>))}</ul></CardContent></Card></motion.div>))}
                </motion.div>
              </TabsContent>

              {/* Tools Tab Content */}
              <TabsContent value="tools" className="mt-8">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tools.map((t, i) => (<motion.div key={i} variants={iconPop}><Card className="h-full text-center border border-pink-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1"><CardHeader><div className="p-4 rounded-full bg-pink-100 w-16 h-16 mx-auto mb-3 flex items-center justify-center"><t.icon className="h-8 w-8 text-pink-600" /></div><CardTitle className="text-xl text-pink-800">{t.label}</CardTitle></CardHeader></Card></motion.div>))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Trainers */}
        <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="text-4xl font-bold mb-4 text-indigo-800">Learn from Industry Experts 🧑‍🏫</motion.h2>
    <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">Our instructors are seasoned professionals with years of industry experience.</motion.p>
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
      {/* Use `flex` on the wrapper and `flex-1` on the card to ensure equal height */}
      {javaTrainers.slice(0, 2).map((t) => (
        <motion.div key={t.id} variants={fadeUp} className="flex">
          <TrainerProfile
            trainer={t}
            className="flex flex-col flex-1 border border-pink-200 bg-pink-50 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

        {/* Admissions & Schedule */}
       <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-stretch">
      
      {/* Admission Process Card */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="flex"
      >
        <Card className="flex flex-col flex-1 border border-indigo-200 bg-white rounded-xl shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-800 flex items-center gap-2">
              Admission Process ✅
            </CardTitle>
            <CardDescription className="text-gray-600">
              Your simple, four-step path to getting started.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <motion.ol
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
              className="list-decimal list-inside space-y-4 text-base text-gray-700"
            >
              {[
                "Apply Online: Fill out a quick form with your details.",
                "Goal Alignment Call: A brief chat to ensure the course is the right fit for you.",
                "Confirm Your Seat: Complete the enrollment and choose a payment plan.",
                "Onboarding Session: Get your tools set up and meet your batchmates!",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1 },
                  }}
                >
                  <span className="font-semibold">
                    {text.split(":")[0]}:
                  </span>{" "}
                  {text.split(":")[1]}
                </motion.li>
              ))}
            </motion.ol>
          </CardContent>
        </Card>
      </motion.div>

      {/* Weekly Learning Rhythm Card */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="flex"
      >
        <Card className="flex flex-col flex-1 border border-pink-200 bg-white rounded-xl shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl text-pink-800 flex items-center gap-2">
              Your Weekly Learning Rhythm 🗓️
            </CardTitle>
            <CardDescription className="text-gray-600">
              A structured blend of learning, building, and support.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            {/* Timeline code remains the same */}
            <div className="relative pl-8">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-pink-200"></div>
              <div className="space-y-8">
                {weeklySchedule.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="absolute -left-3 z-10 h-10 w-10 rounded-full bg-pink-500 flex items-center justify-center ring-4 ring-white">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="pl-12">
                      <p className="text-sm font-semibold text-gray-500">
                        {item.day} - <span className="text-pink-600">{item.time}</span>
                      </p>
                      <h4 className="font-bold text-indigo-800 mt-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-pink-200">
              <div className="flex items-center justify-between text-sm mb-2 text-gray-700">
                <span>Sample Progress After 2 Months</span>
                <span className="font-semibold">33%</span>
              </div>
              <Progress value={33} className="h-2 bg-gray-200 rounded-full" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
</section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="text-4xl font-bold mb-10 text-center text-purple-800">Frequently Asked Questions 🤔</motion.h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, i) => (<motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={itemSlideIn}><AccordionItem value={`faq-${i}`} className="border border-pink-200 rounded-xl bg-pink-50 shadow-sm hover:shadow-md transition-shadow"><AccordionTrigger className="px-6 py-4 font-semibold text-lg text-pink-800">{f.q}</AccordionTrigger><AccordionContent className="px-6 pb-6 text-base text-gray-700">{f.a}</AccordionContent></AccordionItem></motion.div>))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-800 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v4h2v-4h4v-2h-4v-4h-2v4h-4v2h4zm0 60v-4h2v4h4v2h-4v4h-2v-4h-4v-2h4zm30-24v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm30 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 0v4h2v-4h4v-2h-4v-4h-2v4h-4v2h4zm0 60v-4h2v4h4v2h-4v4h-2v-4h-4v-2h4z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl font-extrabold mb-4 leading-tight">Ready to Build Enterprise Java Systems? ✨</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.2 }} className="opacity-95 mb-8 text-lg max-w-2xl mx-auto">Enroll today and start your transformation with expert mentors, real-world projects, and dedicated career support.</motion.p>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={stagger} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div variants={fadeUp}><Button size="lg" className="bg-pink-400 text-white hover:bg-pink-300 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl text-lg py-3 px-8 rounded-lg transform hover:-translate-y-1" asChild><Link to="/appointment">Join the Bootcamp</Link></Button></motion.div>
              <motion.div variants={fadeUp}><Button size="lg" variant="outline" className="border-white text-blue hover:bg-white hover:text-purple-700 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl text-lg py-3 px-8 rounded-lg transform hover:-translate-y-1"><Download className="h-5 w-5 mr-2" /> Download Detailed PDF</Button></motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default JavaCourse;