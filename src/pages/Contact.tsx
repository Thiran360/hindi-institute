import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Framer Motion Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["123 Tech Street", "Innovation City, IN 123456"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Talk to Us",
      details: ["+91 9876543210", "+91 9876543211"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@techinstitute.com", "admissions@techinstitute.com"],
      action: "Send an Email"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 9:00 AM - 5:00 PM"],
      action: "View Calendar"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v4h2v-4h4v-2h-4v-4h-2v4h-4v2h4zm0 60v-4h2v4h4v2h-4v4h-2v-4h-4v-2h4zm30-24v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm30 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 0v4h2v-4h4v-2h-4v-4h-2v4h-4v2h4zm0 60v-4h2v4h4v2h-4v4h-2v-4h-4v-2h4z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1 initial="hidden" animate="show" variants={fadeUp} className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Get in <span className="text-amber-400">Touch</span> with Us ✨
            </motion.h1>
            <motion.p initial="hidden" animate="show" variants={fadeUp} className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your coding journey? We're here to help you every step of the way. Contact us today to learn more about our programs.
            </motion.p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
                <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </Label>
                      <Input id="firstName" placeholder="John" className="w-full bg-gray-800 text-white border-gray-700" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </Label>
                      <Input id="lastName" placeholder="Doe" className="w-full bg-gray-800 text-white border-gray-700" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="w-full bg-gray-800 text-white border-gray-700" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </Label>
                    <Input id="phone" type="tel" placeholder="+91 9876543210" className="w-full bg-gray-800 text-white border-gray-700" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </Label>
                    <Input id="subject" placeholder="Course Inquiry" className="w-full bg-gray-800 text-white border-gray-700" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </Label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us about your learning goals and how we can help you..."
                      className="w-full min-h-[120px] bg-gray-800 text-white border-gray-700"
                    />
                  </div>
                  
                  <Button className="w-full bg-amber-400 text-gray-900 hover:bg-amber-300 shadow-lg hover:shadow-xl transition-all">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6">Reach Out to Us</h2>
                
                {contactInfo.map((info, index) => (
                  <motion.div key={index} variants={fadeUp}>
                    <Card className="bg-gray-800 border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4">
                          <div className="bg-amber-400 p-3 rounded-xl">
                            <info.icon className="h-6 w-6 text-gray-900" />
                          </div>
                          <CardTitle className="text-xl text-white">{info.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          {info.details.map((detail, detailIndex) => (
                            <CardDescription key={detailIndex} className="text-base text-gray-400">
                              {detail}
                            </CardDescription>
                          ))}
                        </div>
                        <Button variant="outline" size="sm" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 transition-colors">
                          {info.action}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
                
                {/* Quick Contact */}
                <motion.div variants={fadeUp}>
                  <Card className="bg-gray-800 border border-gray-700 shadow-lg p-6 rounded-xl">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl text-white">Need Immediate Help?</CardTitle>
                      <CardDescription className="text-gray-400">
                        For urgent inquiries, you can reach us directly:
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 p-0">
                      <Button className="w-full bg-amber-400 text-gray-900 hover:bg-amber-300 shadow-md transition-all">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now: +91 9876543210
                      </Button>
                      <Button variant="outline" className="w-full border-gray-500 text-gray-300 hover:bg-gray-700">
                        <Mail className="h-4 w-4 mr-2" />
                        Email: info@techinstitute.com
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="text-3xl font-bold text-white mb-4">Find Us on the Map</motion.h2>
              <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto">
                Located in the heart of Innovation City, our modern facility is easily accessible by public transport.
              </motion.p>
            </div>
            
            {/* Map Placeholder */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="bg-gray-800 rounded-2xl h-96 flex items-center justify-center border border-gray-700 shadow-lg">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Interactive Map</h3>
                <p className="text-gray-400">
                  123 Tech Street, Innovation City, IN 123456
                </p>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=123+Tech+Street,+Innovation+City,+IN+123456" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="mt-4 bg-amber-400 text-gray-900 hover:bg-amber-300 shadow-md transition-all">
                    Open in Google Maps
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;