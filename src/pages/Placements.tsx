import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { TrendingUp, Users, CheckCircle, Award, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

// ========= Helpers (no local images needed) =========
// Clearbit serves company logos by domain. If a logo isn't available, we fall back to an auto-generated initials avatar.
const logoUrl = (domain: string) => `https://logo.clearbit.com/${domain}`;
const fallbackFor = (name: string) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&fontFamily=Montserrat&backgroundType=gradientLinear&fontSize=42`;

// ========= Motion Variants =========
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const iconPop = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "backOut" } },
};

// ========= Types =========
type Stat = { label: string; value: number; color: string; suffix?: string; icon: LucideIcon };

type Company = { name: string; domain: string; positions: string; salary: string };

type Story = {
  name: string;
  course: string;
  company: string;
  position: string;
  salary: string;
  initials: string;
  story: string;
};

type Process = { step: number; title: string; description: string; icon: LucideIcon };

const Placements = () => {
  const placementStats: Stat[] = [
    { label: "Overall Placement Rate", value: 95, color: "text-green-400", icon: TrendingUp },
    { label: "Python Graduates", value: 97, color: "text-purple-400", icon: CheckCircle },
    { label: "Java Graduates", value: 93, color: "text-indigo-400", icon: CheckCircle },
    { label: "Average Salary Increase", value: 150, color: "text-emerald-400", suffix: "%", icon: Award },
  ];

  const topCompanies: Company[] = [
    { name: "Google", domain: "google.com", positions: "Software Engineer", salary: "₹25-35 LPA" },
    { name: "Microsoft", domain: "microsoft.com", positions: "Backend Developer", salary: "₹22-30 LPA" },
    { name: "Amazon", domain: "amazon.com", positions: "Java Developer", salary: "₹20-28 LPA" },
    { name: "Wipro", domain: "wipro.com", positions: "Python Developer", salary: "₹8-15 LPA" },
    { name: "TCS", domain: "tcs.com", positions: "Software Engineer", salary: "₹6-12 LPA" },
    { name: "Infosys", domain: "infosys.com", positions: "Systems Engineer", salary: "₹7-14 LPA" },
    { name: "Accenture", domain: "accenture.com", positions: "Application Developer", salary: "₹8-16 LPA" },
    { name: "Cognizant", domain: "cognizant.com", positions: "Programming Analyst", salary: "₹6-13 LPA" },
  ];

  const successStories: Story[] = [
    {
      name: "Priya Sharma",
      course: "Python Bootcamp",
      company: "Google",
      position: "Software Engineer",
      salary: "₹28 LPA",
      initials: "PS",
      story:
        "From a non-tech background to Google in 8 months. The comprehensive curriculum and placement support made it possible.",
    },
    {
      name: "Rahul Kumar",
      course: "Java Bootcamp",
      company: "Microsoft",
      position: "Backend Developer",
      salary: "₹25 LPA",
      initials: "RK",
      story:
        "The hands-on projects and mentorship helped me crack multiple interviews and land my dream job.",
    },
    {
      name: "Anita Patel",
      course: "Python Bootcamp",
      company: "Amazon",
      position: "SDE-1",
      salary: "₹22 LPA",
      initials: "AP",
      story:
        "The industry-relevant curriculum and interview preparation gave me the confidence to succeed.",
    },
  ];

  const placementProcess: Process[] = [
    {
      step: 1,
      title: "Resume & Portfolio Building",
      description: "Craft a professional resume and showcase your portfolio projects to stand out.",
      icon: Briefcase,
    },
    {
      step: 2,
      title: "Mock Interview Prep",
      description: "Practice technical and behavioral interviews with mentors and industry experts.",
      icon: Users,
    },
    {
      step: 3,
      title: "Direct Company Referrals",
      description: "Get introduced to our network of 200+ hiring partners actively seeking talent.",
      icon: Award,
    },
    {
      step: 4,
      title: "Offer & Negotiation Support",
      description: "Receive guidance on evaluating offers and negotiating for the best salary.",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main>
        {/* ===== HERO (video background) ===== */}
        <section className="relative py-24 text-white overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover brightness-50"
            src="https://cdn.videvo.net/videvo_files/video/free/2023-07/small_landscape/230427_03_Tech_Blue_Plexus_4k_001_preview.webm"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate="show" variants={stagger}>
                <motion.h1
                  variants={fadeUp}
                  className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
                >
                  95% Placement Success
                </motion.h1>
                <motion.p variants={fadeUp} className="text-xl text-gray-100 mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  Join over 5,000 successful graduates who transformed their careers with our placement assistance and industry connections.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-2">
                  <Button
                    size="lg"
                    className="bg-amber-400 text-gray-900 hover:bg-amber-300 transition-all shadow-lg hover:shadow-amber-500/30"
                    asChild
                  >
                    <Link to="/placements/stories">View Success Stories</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-black hover:bg-white hover:text-gray-900 transition-all shadow-lg hover:shadow-white/20"
                    asChild
                  >
                    <Link to="/placements/partners">Partner Companies</Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Quick stats tiles */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { number: "5000+", label: "Graduates Placed" },
                  { number: "95%", label: "Placement Rate" },
                  { number: "200+", label: "Partner Companies" },
                  { number: "₹25L", label: "Highest Package" },
                ].map((stat, index) => (
                  <motion.div key={index} variants={fadeUp}>
                    <Card className="bg-gray-800/70 backdrop-blur border-gray-700 text-center text-white rounded-xl shadow-lg">
                      <CardContent className="pt-6">
                        <div className="text-3xl font-extrabold text-amber-400 mb-2">{stat.number}</div>
                        <div className="opacity-80 text-gray-200">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== PLACEMENT STATS (image background) ===== */}
        <section
          className="py-20 relative"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/80" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center mb-16">
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
              >
                Placement Statistics
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                className="text-lg text-gray-200 max-w-3xl mx-auto"
              >
                Our track record speaks for itself. See how our graduates excel in the industry.
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {placementStats.map((stat, index) => (
                <motion.div key={index} variants={iconPop}>
                  <Card className="text-center bg-gray-800/80 border border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl">
                    <CardHeader>
                      <div className="bg-gray-700 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <stat.icon className={`h-8 w-8 ${stat.color}`} />
                      </div>
                      <CardTitle className="text-lg text-white">{stat.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className={`text-4xl font-extrabold ${stat.color.replace("text-", "text-")}`}>
                        {stat.value}
                        {stat.suffix || "%"}
                      </div>
                      {!stat.suffix && <Progress value={stat.value} className="mt-4 h-2" />}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== SUCCESS STORIES (subtle noise bg) ===== */}
        <section
          className="py-10 bg-gradient-to-b bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black relative"
        >
          <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light"
               style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent"
              >
                Voices of Success
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Hear directly from our graduates about how they achieved their career goals.
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-8"
            >
              {successStories.map((story, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <Card className="p-6 bg-gray-800/70 border border-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                    <CardHeader className="text-center p-0 mb-4">
                      <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center bg-amber-400 text-gray-900 font-bold text-4xl shadow-sm">
                        {story.initials}
                      </div>
                      <CardTitle className="text-xl font-bold text-white">{story.name}</CardTitle>
                      <Badge className="bg-purple-100 text-purple-800 w-fit mx-auto mt-2">{story.course}</Badge>
                    </CardHeader>
                    <CardContent className="text-center p-0 space-y-3">
                      <div>
                        <div className="font-semibold text-white">{story.company}</div>
                        <div className="text-sm text-gray-300">{story.position}</div>
                        <div className="text-2xl font-bold text-green-400 mt-2">{story.salary}</div>
                      </div>
                      <CardDescription className="text-sm italic text-gray-300">
                        "{story.story}"
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="text-center mt-12"
            >
              <Button className="bg-gray-800 text-white hover:bg-gray-700 shadow-md hover:shadow-lg transition-all" asChild>
                <Link to="/placements/stories" className="flex items-center gap-2">
                  View All Success Stories
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== PARTNER COMPANIES (image background, dynamic external logos) ===== */}
        <section
          className="py-10 bg-gradient-to-b relative overflow-hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1526378722484-cc5c51082b16?auto=format&fit=crop&w=1600&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black/90" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center mb-16">
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-amber-400 to-pink-500 bg-clip-text text-transparent"
              >
                Top Hiring Partners
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-lg text-gray-200 max-w-3xl mx-auto"
              >
                Our graduates work at leading companies across the globe. Join this prestigious network.
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {topCompanies.map((company, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <Card className="text-center bg-gray-800/80 border border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl">
                    <CardHeader className="text-center">
                      <img
                        src={logoUrl(company.domain)}
                        alt={company.name}
                        className="w-20 h-20 object-contain mx-auto mb-3 transition-transform duration-300 hover:scale-[1.07]"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          img.src = fallbackFor(company.name);
                        }}
                      />
                      <CardTitle className="text-lg text-white">{company.name}</CardTitle>
                      <CardDescription className="text-gray-300">{company.positions}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Badge variant="outline" className="text-green-400 border-green-400 bg-green-900/20">
                        {company.salary}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mt-12"
            >
              <Button className="bg-gray-800 text-white hover:bg-gray-700 shadow-md hover:shadow-lg transition-all" asChild>
                <Link to="/placements/partners" className="flex items-center gap-2">
                  View All 200+ Partners
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== PLACEMENT PROCESS (clean dark) ===== */}
        <section className="py-10 bg-gradient-to-b bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
              >
                Our Proven Placement Process
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeUp}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Comprehensive support from day one to ensure your successful career transition.
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={stagger}
              className="grid md:grid-cols-4 gap-8"
            >
              {placementProcess.map((process, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <Card className="text-center bg-gray-800/80 border border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl">
                    <CardHeader>
                      <div className="bg-gray-700 text-white rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                        <process.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl text-white">{process.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-300">{process.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              className="bg-gray-800/90 rounded-2xl p-8 mt-16 text-center text-white shadow-lg border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Join thousands of successful graduates who transformed their careers with our proven methodology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-amber-400 text-gray-900 hover:bg-amber-300 shadow-md hover:shadow-xl transition-all" asChild>
                  <Link to="/courses">Explore Courses</Link>
                </Button>
                <Button variant="outline" className="border-white text-black hover:bg-white hover:text-gray-800 transition-all" asChild>
                  <Link to="/appointment">Book Free Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Placements;
