import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  ChevronUp
} from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "Our Courses", path: "/courses" },
    { label: "Contact", path: "/contact" },
    { label: "Appointment", path: "/appointment" },
  ];

  const courses = [
    { label: "Python Programming", path: "/courses/python" },
    { label: "Java Development", path: "/courses/java" },
    { label: "All Courses", path: "/courses" },
  ];

  const services = [
    { label: "Corporate Training", path: "/services/corporate" },
    { label: "Online Learning", path: "/services/online" },
    { label: "Certification", path: "/services/certification" },
    { label: "Mentorship", path: "/services/mentorship" },
  ];

  const resources = [
    { label: "Gallery", path: "/gallery" },
    { label: "Placements", path: "/placements" },
    { label: "Success Stories", path: "/placements/stories" },
    { label: "Partner Companies", path: "/placements/partners" },
  ];

  const [email, setEmail] = useState("");
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubscribe = () => {
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300 select-none">
      
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-1">Stay Updated</h3>
            <p className="text-gray-400 text-sm">Get updates on new courses and career opportunities.</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); onSubscribe(); }}
            className="flex w-full max-w-sm mx-auto md:mx-0"
          >
            <Input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="!rounded-r-none rounded-l-md border border-gray-700 bg-gray-800 text-gray-300 placeholder-gray-500
                focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition h-10 text-sm"
              style={{ borderRight: 'none' }}
            />
            <Button
              type="submit"
              className="!rounded-l-none rounded-r-md border border-gray-700 border-l-0 bg-yellow-500 text-gray-900 font-semibold 
                hover:bg-yellow-400 transition h-10 px-4"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 border-t border-gray-700">
        
        {/* Company Info */}
        <div className="lg:col-span-2 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-500 p-2 rounded-md shadow">
              <GraduationCap className="h-6 w-6 text-gray-900" />
            </div>
            <span className="text-lg font-semibold tracking-wide text-white">TechInstitute</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering developers with industry-leading training programs. Transform your career with us.
          </p>
          <div className="space-y-2 text-gray-400 text-xs">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-yellow-500" />
              <a href="tel:+919876543210" className="hover:text-yellow-500">+91 9876543210</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-yellow-500" />
              <a href="mailto:info@techinstitute.com" className="hover:text-yellow-500">info@techinstitute.com</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-yellow-500" />
              <address className="not-italic">123 Tech Street, Innovation City</address>
            </div>
          </div>
          <div className="flex space-x-3 mt-3 text-gray-400">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
              <a
                href="#"
                key={idx}
                className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center hover:text-yellow-500 hover:bg-gray-700 transition"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-md text-yellow-500 mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-yellow-500">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-semibold text-md text-yellow-500 mb-2">Courses</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            {courses.map((course) => (
              <li key={course.path}>
                <Link to={course.path} className="hover:text-yellow-500">{course.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-md text-yellow-500 mb-2">Services</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            {services.map((service) => (
              <li key={service.path}>
                <Link to={service.path} className="hover:text-yellow-500">{service.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-md text-yellow-500 mb-2">Resources</h4>
          <ul className="space-y-1 text-sm text-gray-400">
            {resources.map((resource) => (
              <li key={resource.path}>
                <Link to={resource.path} className="hover:text-yellow-500">{resource.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-3 px-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs space-y-2 md:space-y-0">
        <p>© 2024 TechInstitute. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-yellow-500">Privacy</a>
          <a href="#" className="hover:text-yellow-500">Terms</a>
          <a href="#" className="hover:text-yellow-500">Cookies</a>
        </div>
      </div>

      {/* Back to Top Button */}
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-500 text-gray-900 p-2 rounded-full shadow-md hover:bg-yellow-400 transition"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
