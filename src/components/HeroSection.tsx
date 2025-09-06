import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  PlayCircle,
  Users,
  Award,
  BookOpen,
  Code,
  Cpu,
} from "lucide-react";
import heroImage from "@/assets/hero-training.jpg";
import { motion } from "framer-motion";
import Login from "@/pages/Login";

const HeroSection = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-800 text-white">
      {/* Background Image with Stronger Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Training Institute"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-24 grid lg:grid-cols-2 gap-12">
        {/* Left Text Content */}
        <div className="space-y-8 max-w-xl">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Transform Your Career with&nbsp;
            <span className="text-yellow-400 underline decoration-yellow-300 underline-offset-4">
              Expert Training
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl opacity-90"
          >
            Master Python and Java programming with hands-on projects, expert
            mentorship, and guaranteed placement assistance. Join thousands of
            successful graduates.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
          >
            <Button
              size="lg"
              className="bg-yellow-400 text-indigo-900 px-10 py-4 font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition transform"
              asChild
            >
              <Link to="/courses" className="flex items-center gap-3">
                Explore Courses <ArrowRight className="w-6 h-6 animate-bounce" />
              </Link>
            </Button>

          </motion.div>

          {/* Stats with Icon Animations */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
            className="grid grid-cols-3 gap-6 mt-12 text-center"
          >
            {[
              { icon: Users, label: "5000+ Students Trained" },
              { icon: Award, label: "95% Placement Rate" },
              { icon: BookOpen, label: "50+ Expert Trainers" },
            ].map(({ icon: Icon, label }, i) => (
              <motion.div
                key={i}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 20 },
                }}
                className="bg-black/40 rounded-xl py-6 px-4 backdrop-blur-sm shadow-lg flex flex-col items-center justify-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-default"
              >
                <Icon className="h-10 w-10 mb-2 text-yellow-400 animate-pulse" />
                <h3 className="text-2xl font-bold">{label.split(" ")[0]}</h3>
                <p className="text-yellow-300 text-sm">
                  {label.split(" ").slice(1).join(" ")}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column Feature Cards */}
        <div className="space-y-8">
          {[
            {
              title: "Live Interactive Classes",
              desc: "Engage with expert instructors in real-time sessions with hands-on coding practice.",
              icon: Code,
              bg: "from-purple-600 to-indigo-700",
            },
            {
              title: "Industry Projects",
              desc: "Work on real-world projects that build your portfolio and job readiness.",
              icon: Cpu,
              bg: "from-yellow-500 to-yellow-400",
            },
            {
              title: "Job Placement Support",
              desc: "Get comprehensive placement assistance with interview prep and industry connections.",
              icon: Users,
              bg: "from-pink-500 to-pink-400",
            },
          ].map(({ title, desc, icon: Icon, bg }, i) => (
            <motion.div
              key={i}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 * i + 0.5, duration: 0.6 }}
              className={`rounded-3xl p-8 bg-gradient-to-br ${bg} text-white shadow-lg cursor-default hover:shadow-2xl transition-shadow`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <Icon className="h-8 w-8" />
                <h4 className="text-xl font-semibold">{title}</h4>
              </div>
              <p className="opacity-90">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-12 w-24 h-24 rounded-full bg-yellow-400 opacity-20 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-28 left-10 w-16 h-16 rounded-full bg-purple-700 opacity-30 blur-xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8, delay: 2 }}
      />

      {/* ✅ Login Modal Overlay */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-60"
            onClick={() => setShowLogin(false)}
          />

          {/* Login Card */}
          <div className="relative z-10">
            <Login onClose={() => setShowLogin(false)} />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
