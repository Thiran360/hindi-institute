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
  BrainCircuit,
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
} from "lucide-react";
import pythonImage from "@/assets/python-course.jpg"; // Make sure this image exists
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

const PythonCourse = () => {
  const pythonTrainers = getTrainersBySpecialization("Python");

  // ======= INTENSIVE 3-MONTH PYTHON SYLLABUS =======
  const syllabus = [
    {
      title: "Month 1: Python Essentials & Foundations (Weeks 1–4)",
      duration: "4 Weeks",
      units: [
        { name: "U1: Python Fundamentals", items: ["Setup: Python 3.12+, venv, pip, VS Code/PyCharm", "Core Concepts: Data types, control flow, functions", "Essential Data Structures: Lists, dictionaries, sets, tuples", "Tooling: Git, PEP 8, Linters (Ruff), Formatters (Black)", "Lab: Build a command-line application",], },
        { name: "U2: Object-Oriented & Advanced Python", items: ["OOP Principles: Classes, objects, inheritance, dunder methods", "Advanced Concepts: Decorators, context managers, generators", "File I/O: Reading/writing files, working with JSON and CSV", "Lab: Model and build a small inventory management system using OOP",], },
        { name: "U3: Testing and SQL Basics", items: ["Automated Testing with Pytest: Fixtures, markers, and assertions", "Introduction to Mocking for isolating tests", "SQL Fundamentals: SELECT, INSERT, UPDATE, JOINs with PostgreSQL", "Connecting Python to DB: Using libraries like psycopg2", "Lab: Write a full test suite for the inventory system & perform basic SQL operations",], },
      ],
      outcomes: ["Write clean, well-tested, and idiomatic Python code", "Apply object-oriented principles to solve problems", "Understand fundamental database interactions with SQL",],
    },
    {
      title: "Month 2: Backend Development with Django & DRF (Weeks 5–8)",
      duration: "4 Weeks",
      units: [
        { name: "U1: Django Fundamentals", items: ["MVT Architecture: Models, Views, Templates", "The Django ORM: QuerySets, model relationships, and migrations", "The Django Admin: Building a rapid back-office interface", "Lab: Develop a complete blogging platform with an admin panel",], },
        { name: "U2: Building REST APIs with DRF", items: ["REST Principles & API Design", "Django REST Framework: Serializers, ViewSets, and Routers", "Handling GET, POST, PUT, DELETE requests", "Lab: Add a full-featured REST API to the blogging platform",], },
        { name: "U3: Authentication & Advanced APIs", items: ["API Security: Token-based authentication (JWT)", "Permissions, filtering, pagination, and throttling in DRF", "Background Tasks: Introduction to Celery for async jobs", "Lab: Secure the blog API and add a background task for email notifications",], },
      ],
      outcomes: ["Build robust, full-stack web applications using Django", "Design and develop secure and scalable REST APIs", "Manage asynchronous tasks for improved performance",],
    },
    {
      title: "Month 3: DevOps, Deployment & Capstone (Weeks 9–12)",
      duration: "4 Weeks",
      units: [
        { name: "U1: Containerization & CI/CD", items: ["Containerizing Apps with Docker: Dockerfile and Docker Compose", "CI/CD Pipelines: Automating tests and builds with GitHub Actions", "Cloud Deployment: Deploying a containerized app to AWS App Runner or similar service", "Lab: Containerize and set up a CI/CD pipeline for the Django API",], },
        { name: "U2: Capstone Project Sprint (Planning & Build)", items: ["System Design: Scoping a project, designing the schema and API contract", "Project Setup: Initializing the project with best practices", "Development: Two weeks of focused building with instructor code reviews", "Portfolio Polish: Preparing the project for your resume and GitHub",], },
        { name: "U3: Capstone Project (Showcase & Career Prep)", items: ["Finalizing the project and preparing a live demo", "Writing a professional project README and documentation", "Career Coaching: Resume building, mock interviews, and portfolio review", "Final Presentation: Showcase your capstone project",], },
      ],
      outcomes: ["Understand the modern DevOps lifecycle for web applications", "Confidently deploy applications to the cloud", "Complete a production-grade portfolio project from scratch",],
    },
  ];

  const projectCatalog = [
    { name: "Month 1 Project: Inventory Management CLI", stack: "Python, Pytest, Git", goals: ["Model real-world items using Object-Oriented Programming.", "Handle user input and manage data stored in JSON/CSV files.", "Write a complete test suite with Pytest to ensure code correctness.",], },
    { name: "Month 2 Project: Blogging Platform API", stack: "Python, Django, Django REST Framework, PostgreSQL", goals: ["Build a complete CRUD (Create, Read, Update, Delete) API for posts.", "Implement user registration and token-based authentication.", "Manage the database schema and data using Django Migrations.",], },
    { name: "Month 3 Capstone: E-Commerce API", stack: "Python, Django, DRF, PostgreSQL, Docker, GitHub Actions", goals: ["Design and build an API for a product catalog, shopping cart, and orders.", "Implement secure endpoints for user profiles and order history.", "Containerize the final application with Docker and deploy it using a CI/CD pipeline.",], },
  ];

  const tools = [
    { icon: Code, label: "Python 3.12+" }, { icon: GraduationCap, label: "Django & DRF" }, { icon: Database, label: "PostgreSQL" }, { icon: Boxes, label: "Celery & Redis" }, { icon: GitBranch, label: "Git/GitHub Actions" }, { icon: ServerCog, label: "Docker" }, { icon: Globe, label: "AWS" }, { icon: BrainCircuit, label: "Pytest" },
  ];

  const weeklySchedule = [
    { day: "Monday", title: "Deep Dive Lecture", time: "7-9 PM", description: "Introduce the week's core topic with live coding and theory.", icon: BookOpen },
    { day: "Tuesday", title: "Guided Lab Session", time: "7-9 PM", description: "Work alongside instructors to apply new concepts in a hands-on lab.", icon: Wrench },
    { day: "Wednesday", title: "Project Work & Collaboration", time: "Self-Paced", description: "Dedicated time to work on projects and collaborate with peers on Discord.", icon: Users },
    { day: "Thursday", title: "Q&A Clinic & Mentor Hours", time: "7-9 PM", description: "Get doubts cleared in a group session and book 1:1 slots for feedback.", icon: MessageSquare },
    { day: "Friday", title: "Code Review & Assessment", time: "Self-Paced", description: "Submit your lab for professional feedback and take a short quiz.", icon: ClipboardCheck },
  ];

  const faqs = [
    { q: "Do I need prior Python knowledge?", a: "It's helpful, but not required. We start from the absolute foundations and build up systematically. A passion for problem-solving is more important.", },
    { q: "Is placement guaranteed?", a: "We provide 100% placement assistance, including mock interviews with industry experts, resume workshops, and direct referrals until you secure a role.", },
    { q: "How are classes delivered?", a: "It's a hybrid model: live online sessions led by instructors, access to all recordings, hands-on labs, weekly doubt-clearing clinics, and dedicated 1:1 mentor hours.", },
    { q: "How is my progress evaluated?", a: "Your growth is measured through hands-on labs, monthly mini-projects, and your final capstone project. We focus on practical skills you can use on the job.", },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-orange-50 font-sans">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative py-10 bg-gradient-to-r from-teal-700 to-orange-600 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10"><svg className="w-full h-full" fill="none" viewBox="0 0 100 100"><pattern id="pat1" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="0.5" fill="currentColor" /></pattern><rect width="100%" height="100%" fill="url(#pat1)" /></svg></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate="show" variants={stagger}>
                <motion.div variants={fadeUp}><Badge className="bg-teal-300 text-teal-900 mb-4 px-3 py-1 text-sm rounded-full shadow">Job-Ready in 12 Weeks</Badge></motion.div>
                <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Python Full-Stack <span className="text-orange-300">Bootcamp</span></motion.h1>
                <motion.p variants={fadeUp} className="text-xl opacity-90 mb-8 max-w-lg">Become a versatile Python engineer. Master Django and DevOps to build and deploy modern web applications from scratch.</motion.p>
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-orange-400 text-teal-900 hover:bg-orange-300 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1" asChild><Link to="/appointment">Enroll Now - ₹35,000</Link></Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-700 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"><Play className="h-5 w-5 mr-2" /> Watch Demo</Button>
                </motion.div>
                <motion.div variants={stagger} initial="hidden" animate="show" className="grid grid-cols-3 gap-6">
                  {[{ k: "Duration", v: "3 Months" }, { k: "Students", v: "2500+" }, { k: "Rating", v: "4.9" }].map((m, i) => (<motion.div key={i} variants={fadeUp} className="border-t-2 border-orange-300 pt-4"><div className="text-3xl font-bold text-orange-200">{m.v}</div><div className="opacity-80 text-sm">{m.k}</div></motion.div>))}
                </motion.div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}><img src={pythonImage} alt="Python Course" className="rounded-3xl shadow-2xl border-4 border-white/30 transform hover:scale-105 transition-transform duration-500 ease-in-out" /></motion.div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-10 bg-gradient-to-b from-teal-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ icon: Award, title: "Industry Aligned", desc: "Curriculum designed for job-readiness" }, { icon: Layers, title: "Project-Based", desc: "Build 3 major portfolio projects" }, { icon: Shield, title: "Production Ready", desc: "Master testing, Docker, and CI/CD" }, { icon: Rocket, title: "Career Focused", desc: "Mock interviews & portfolio reviews" }].map((f, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={iconPop} className="group">
                <Card className="h-full border-2 border-transparent hover:border-teal-400 transform hover:-translate-y-2 transition-all duration-300 ease-in-out shadow-md group-hover:shadow-lg rounded-xl">
                  <CardHeader className="text-center">
                    <div className="p-4 rounded-full bg-teal-100 group-hover:bg-teal-200 w-16 h-16 mx-auto mb-3 flex items-center justify-center transition-colors duration-300"><f.icon className="h-8 w-8 text-teal-600 group-hover:text-teal-700 transition-colors duration-300" /></div>
                    <CardTitle className="text-xl font-semibold text-teal-800 group-hover:text-teal-900">{f.title}</CardTitle>
                    <CardDescription className="text-gray-600">{f.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Overview + Details */}
        <section className="py-10 bg-gradient-to-b bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="lg:col-span-2">
              <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-4 text-teal-800">Program Overview</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-gray-600 mb-8">
                This intensive 3-month program is a high-speed pathway to becoming a job-ready Python Full-Stack Developer. We focus on practical, in-demand skills, guiding you from Python fundamentals to deploying sophisticated applications with Django and modern DevOps practices. Our philosophy is simple: <strong>you learn by building</strong>. Every month concludes with a hands-on project, ensuring you graduate with a strong portfolio and the confidence to succeed.
              </motion.p>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={itemSlideIn}>
                  <Card className="h-full border-2 border-teal-100 bg-teal-50 rounded-xl shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-teal-800 flex items-center gap-2"><Users className="h-6 w-6" /> Is This Bootcamp For You?</CardTitle>
                      <CardDescription>This fast-paced program is for:</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-base text-gray-700">
                        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" /><span>Motivated beginners ready for an intensive learning experience.</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" /><span>Developers who want to quickly master backend development with Python.</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" /><span>Anyone aiming to build a strong project portfolio and land a tech job fast.</span></li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={itemSlideIn}>
                  <Card className="h-full border-2 border-orange-100 bg-orange-50 rounded-xl shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-orange-800 flex items-center gap-2"><Lightbulb className="h-6 w-6" /> Our Learning Methodology</CardTitle>
                      <CardDescription>How we ensure you succeed:</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-base text-gray-700">
                        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-teal-500 mt-1 flex-shrink-0" /><span><strong>Live Interactive Sessions:</strong> Engage directly with expert instructors in real-time.</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-teal-500 mt-1 flex-shrink-0" /><span><strong>Project-Driven Modules:</strong> Apply every concept through practical coding labs and monthly projects.</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-teal-500 mt-1 flex-shrink-0" /><span><strong>Professional Code Reviews:</strong> Receive personalized feedback to build industry-standard habits.</span></li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={itemSlideIn}>
                  <Card className="h-full border border-teal-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader><CardTitle className="text-xl text-teal-700 flex items-center gap-2"><Code className="h-6 w-6" /> What You'll Master</CardTitle></CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-base text-gray-700">
                        {["Core Python & OOP", "Django & Django REST Framework", "REST API Design", "SQL & Database Management", "Testing with Pytest", "Docker & CI/CD with Actions", "Cloud Deployment Basics"].map((item, i) => (<li key={i} className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-orange-500" /> {item}</li>))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div variants={itemSlideIn}>
                  <Card className="h-full border border-teal-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader><CardTitle className="text-xl text-teal-700 flex items-center gap-2"><Briefcase className="h-6 w-6" /> Career Paths</CardTitle></CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-base text-gray-700">
                        {["Python Developer", "Backend Engineer", "Full-Stack Developer", "Django Specialist", "Junior DevOps Engineer"].map((item, i) => (<li key={i} className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-orange-500" /> {item}</li>))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
              <Card className="sticky top-24 bg-teal-50 border-2 border-teal-300 rounded-xl shadow-lg">
                <CardHeader className="border-b border-teal-200 pb-4"><CardTitle className="text-2xl text-teal-800">Course Details</CardTitle></CardHeader>
                <CardContent className="space-y-4 pt-6 text-gray-700">
                  <div className="flex justify-between items-center text-lg"><span>Duration</span><span className="font-semibold text-teal-900">3 Months</span></div>
                  <div className="flex justify-between items-center text-lg"><span>Format</span><span className="font-semibold text-teal-900">Hybrid (Live + Recorded)</span></div>
                  <div className="flex justify-between items-center text-lg"><span>Class Size</span><span className="font-semibold text-teal-900">Max 20</span></div>
                  <div className="flex justify-between items-center text-lg"><span>Projects</span><span className="font-semibold text-teal-900">3 Major Projects</span></div>
                  <div className="flex justify-between items-center text-lg"><span>Certificate</span><span className="font-semibold text-teal-900">Industry-Recognized</span></div>
                  <div className="border-t border-teal-200 pt-6">
                    <div className="text-4xl font-extrabold text-orange-600 mb-3">₹35,000</div>
                    <Button className="w-full mb-3 bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 ease-in-out text-lg py-3 rounded-lg shadow-md" asChild><Link to="/appointment">Enroll Now</Link></Button>
                    <Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-50 transition-all duration-300 ease-in-out text-lg py-3 rounded-lg shadow-md"><Download className="h-5 w-5 mr-2" /> Download Syllabus</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Deep Syllabus Tabs */}
        <section className="py-10 bg-gradient-to-b from-white to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold mb-4 text-teal-800">Detailed Curriculum</h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">Our curriculum is a roadmap to mastery. Expand each month to see the topics, labs, and skills you'll gain.</p>
            </div>
            <Tabs defaultValue="tracks" className="w-full">
              <TabsList className="grid md:grid-cols-4 gap-2 bg-teal-100 p-1 rounded-lg shadow-inner">
                <TabsTrigger value="tracks" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:rounded-md transition-all duration-300 text-teal-800 hover:text-teal-900">Monthly Plan</TabsTrigger>
                <TabsTrigger value="projects" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:rounded-md transition-all duration-300 text-teal-800 hover:text-teal-900">Projects</TabsTrigger>
                <TabsTrigger value="assessments" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:rounded-md transition-all duration-300 text-teal-800 hover:text-teal-900">Your Growth</TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:bg-teal-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:rounded-md transition-all duration-300 text-teal-800 hover:text-teal-900">Tools</TabsTrigger>
              </TabsList>
              <TabsContent value="tracks" className="mt-8">
                <Accordion type="multiple" className="space-y-4">
                  {syllabus.map((track, i) => (<motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={itemSlideIn}><AccordionItem value={`track-${i}`} className="border border-teal-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"><AccordionTrigger className="px-6 py-4"><div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2 text-left"><div className="font-bold text-xl text-teal-700">{track.title}</div><div className="flex items-center gap-2 text-base text-gray-600"><Clock className="h-5 w-5 text-orange-500" /> {track.duration}</div></div></AccordionTrigger><AccordionContent className="px-6 pb-6"><div className="grid md:grid-cols-2 gap-8"><div className="space-y-4">{track.units.map((u, idx) => (<Card key={idx} className="border border-orange-100 bg-orange-50 rounded-lg shadow-sm"><CardHeader><CardTitle className="text-lg text-orange-700">{u.name}</CardTitle></CardHeader><CardContent><ul className="list-disc list-inside text-base text-gray-700 space-y-1">{u.items.map((it, k) => (<li key={k}>{it}</li>))}</ul></CardContent></Card>))}</div><Card className="border border-teal-100 bg-teal-50 rounded-lg shadow-sm"><CardHeader><CardTitle className="text-lg text-teal-700">Learning Outcomes</CardTitle><CardDescription className="text-gray-600">What you’ll confidently do after this month</CardDescription></CardHeader><CardContent><ul className="space-y-2 text-base">{track.outcomes.map((o, oi) => (<li key={oi} className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{o}</span></li>))}</ul></CardContent></Card></div></AccordionContent></AccordionItem></motion.div>))}
                </Accordion>
              </TabsContent>
              <TabsContent value="projects" className="mt-8">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectCatalog.map((proj, i) => (<motion.div key={i} variants={fadeUp}><Card className="h-full border border-teal-200 bg-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-xl"><CardHeader><CardTitle className="text-xl text-teal-700">{proj.name}</CardTitle><CardDescription className="text-gray-600">{proj.stack}</CardDescription></CardHeader><CardContent><h4 className="font-semibold mb-3 text-teal-800">Learning Goals</h4><ul className="list-disc list-inside text-base text-gray-700 space-y-1">{proj.goals.map((g, gi) => (<li key={gi}>{g}</li>))}</ul></CardContent></Card></motion.div>))}
                </motion.div>
              </TabsContent>
              <TabsContent value="assessments" className="mt-8">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemSlideIn}>
                    <Card className="h-full border border-orange-200 bg-orange-50 rounded-xl shadow-sm">
                      <CardHeader><CardTitle className="text-xl text-orange-700">How We Measure Your Growth</CardTitle><CardDescription className="text-gray-600">Your journey is tracked through practical work, not just theory.</CardDescription></CardHeader>
                      <CardContent className="space-y-4 text-base">
                        <div><h4 className="font-semibold text-gray-800">Hands-on Labs (40%)</h4><p className="text-gray-700 text-sm">This is where you'll apply new concepts each week with guided exercises.</p></div>
                        <div><h4 className="font-semibold text-gray-800">Monthly Mini-Projects (30%)</h4><p className="text-gray-700 text-sm">At the end of each month, you'll build a small project to solidify your learning.</p></div>
                        <div><h4 className="font-semibold text-gray-800">Final Capstone Project (30%)</h4><p className="text-gray-700 text-sm">Your chance to shine! Build a complete application for your portfolio.</p></div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div variants={itemSlideIn}>
                    <Card className="h-full border border-teal-200 bg-teal-50 rounded-xl shadow-sm">
                      <CardHeader><CardTitle className="text-xl text-teal-700">Our Commitment to Your Success</CardTitle><CardDescription className="text-gray-600">We succeed when you do. Here's our shared path to graduation.</CardDescription></CardHeader>
                      <CardContent className="space-y-4 text-base text-gray-700">
                        <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><div><h4 className="font-semibold">Stay Engaged & Consistent</h4><p className="text-sm">To get the most out of the course, we encourage attending all live classes or watching the recordings within 48 hours to keep the momentum going.</p></div></div>
                        <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" /><div><h4 className="font-semibold">Showcase Your Skills</h4><p className="text-sm">Graduation is about demonstrating your new abilities. This means completing all major labs and putting your best effort into the final capstone project.</p></div></div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </TabsContent>
              <TabsContent value="tools" className="mt-8">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tools.map((t, i) => (<motion.div key={i} variants={iconPop}><Card className="h-full text-center border border-orange-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1"><CardHeader><div className="p-4 rounded-full bg-orange-100 w-16 h-16 mx-auto mb-3 flex items-center justify-center"><t.icon className="h-8 w-8 text-orange-600" /></div><CardTitle className="text-xl text-orange-800">{t.label}</CardTitle></CardHeader></Card></motion.div>))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Trainers */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="text-4xl font-bold mb-12 text-teal-800">Learn from Experts</motion.h2>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="grid md:grid-cols-2 gap-8">
              {pythonTrainers.slice(0, 2).map((t) => (<motion.div key={t.id} variants={fadeUp}><TrainerProfile trainer={t} className="border border-orange-200 bg-orange-50 rounded-xl shadow-md hover:shadow-lg transition-shadow" /></motion.div>))}
            </motion.div>
          </div>
        </section>
<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
        <section className="py-10 bg-gradient-to-b bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="text-4xl font-bold mb-10 text-center text-teal-800">Frequently Asked Questions</motion.h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, i) => (<motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={itemSlideIn}><AccordionItem value={`faq-${i}`} className="border border-orange-200 rounded-xl bg-orange-50 shadow-sm hover:shadow-md transition-shadow"><AccordionTrigger className="px-6 py-4 font-semibold text-lg text-orange-800">{f.q}</AccordionTrigger><AccordionContent className="px-6 pb-6 text-base text-gray-700">{f.a}</AccordionContent></AccordionItem></motion.div>))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-teal-700 to-orange-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10"><svg className="w-full h-full" fill="none" viewBox="0 0 100 100"><pattern id="pat2" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="1" height="1" fill="currentColor" /></pattern><rect width="100%" height="100%" fill="url(#pat2)" /></svg></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl font-extrabold mb-4 leading-tight">Ready to build the future with Python?</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.2 }} className="opacity-95 mb-8 text-lg max-w-2xl mx-auto">Enroll today and start your transformation with expert mentors, real-world projects, and dedicated career support.</motion.p>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={stagger} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div variants={fadeUp}><Button size="lg" className="bg-orange-400 text-teal-900 hover:bg-orange-300 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl text-lg py-3 px-8 rounded-lg transform hover:-translate-y-1" asChild><Link to="/appointment">Join the Bootcamp</Link></Button></motion.div>
              <motion.div variants={fadeUp}><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-700 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl text-lg py-3 px-8 rounded-lg transform hover:-translate-y-1"><Download className="h-5 w-5 mr-2" /> Download Detailed PDF</Button></motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PythonCourse;