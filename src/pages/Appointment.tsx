import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const appointmentTypes = [
  {
    title: "Course Counseling",
    description: "Get personalized advice on which course suits your career goals",
    duration: "30 minutes",
    icon: User,
    value: "counseling"
  },
  {
    title: "Demo Session",
    description: "Experience our teaching methodology with a live demo class",
    duration: "60 minutes",
    icon: Calendar,
    value: "demo"
  },
  {
    title: "Career Guidance",
    description: "Discuss career opportunities and industry insights",
    duration: "45 minutes",
    icon: CheckCircle,
    value: "career"
  }
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
];

const Appointment = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentType: '',
    courseInterest: '',
    date: '',
    time: '',
    message: '',
  });

  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
      }));
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAppointmentTypeSelect = (value: string) => {
    setFormData(prev => ({
      ...prev,
      appointmentType: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.appointmentType) {
      toast({ title: "Please select an appointment type", variant: "destructive" });
      return;
    }
    if (!formData.date) {
      toast({ title: "Please select a preferred date", variant: "destructive" });
      return;
    }
    if (!formData.time) {
      toast({ title: "Please select a preferred time", variant: "destructive" });
      return;
    }

    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const newAppointment = {
      id: Date.now().toString(),
      userId: user?.id,
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    appointments.push(newAppointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    toast({
      title: "Appointment booked successfully!",
      description: "We'll contact you soon to confirm your appointment.",
    });

    setIsBooked(true);

    setFormData(prev => ({
      ...prev,
      appointmentType: '',
      courseInterest: '',
      date: '',
      time: '',
      message: '',
    }));

    setTimeout(() => {
      navigate('/profile');
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-teal-400 mb-6">
              Book Your <span className="text-teal-500">Appointment</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Schedule a free consultation with expert counselors to discuss your learning goals
              and find the perfect course for your career aspirations.
            </p>
          </div>
        </section>

        {/* Appointment Section */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Appointment Types */}
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-teal-400">Choose Appointment Type</h2>
                <div className="space-y-5">
                  {appointmentTypes.map((type) => {
                    const isSelected = formData.appointmentType === type.value;
                    return (
                      <Card
                        key={type.value}
                        onClick={() => handleAppointmentTypeSelect(type.value)}
                        className={`cursor-pointer border rounded-md shadow-sm transition-all duration-300
                          ${isSelected ? 'border-teal-400 bg-gray-700 shadow-teal-400' : 'border-gray-700 hover:border-teal-500 hover:shadow-teal-500'}`}
                      >
                        <CardHeader className="pb-3 flex items-center gap-4">
                          <div className={`p-3 rounded-lg bg-teal-500 text-gray-900 ${isSelected ? 'ring-2 ring-teal-300' : ''}`}>
                            <type.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-teal-300">{type.title}</CardTitle>
                            <Badge className="text-sm bg-gray-700 text-teal-400 flex items-center gap-1" variant="outline">
                              <Clock className="h-4 w-4" /> {type.duration}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-black-400">{type.description}</CardDescription>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Booking Form or Success Message */}
              <div className="lg:col-span-2">
                {!isBooked ? (
                  <Card className="bg-gray-900 shadow-xl rounded-lg border border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-3xl font-extrabold text-teal-400">Schedule Your Appointment</CardTitle>
                      <CardDescription className="text-gray-400">
                        Fill in your details and preferred time slot. We'll confirm your appointment within 2 hours.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="name" className="text-teal-300 font-semibold">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Enter your full name"
                              required
                              className="bg-gray-800 text-teal-300 border-gray-700 focus:border-teal-400"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email" className="text-teal-300 font-semibold">Email Address *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="your@email.com"
                              required
                              className="bg-gray-800 text-teal-300 border-gray-700 focus:border-teal-400"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="phone" className="text-teal-300 font-semibold">Phone Number *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+91 9876543210"
                              required
                              className="bg-gray-800 text-teal-300 border-gray-700 focus:border-teal-400"
                            />
                          </div>
                          <div>
                            <Label htmlFor="appointmentType" className="text-teal-300 font-semibold">Appointment Type *</Label>
                            <Select
                              value={formData.appointmentType}
                              onValueChange={(value) => handleSelectChange('appointmentType', value)}
                            >
                              <SelectTrigger className="bg-gray-800 border-gray-700 focus:border-teal-400 text-teal-300" />
                              <SelectContent className="bg-gray-800 text-teal-300 border-gray-700">
                                {appointmentTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value} className="hover:bg-teal-700/25">
                                    {type.title}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="courseInterest" className="text-teal-300 font-semibold">Course of Interest</Label>
                          <Select
                            value={formData.courseInterest}
                            onValueChange={(value) => handleSelectChange('courseInterest', value)}
                          >
                            <SelectTrigger className="bg-gray-800 border-gray-700 focus:border-teal-400 text-teal-300" />
                            <SelectContent className="bg-gray-800 text-teal-300 border-gray-700">
                              <SelectItem value="python" className="hover:bg-teal-700/25">Python Programming</SelectItem>
                              <SelectItem value="java" className="hover:bg-teal-700/25">Java Development</SelectItem>
                              <SelectItem value="both" className="hover:bg-teal-700/25">Both Courses</SelectItem>
                              <SelectItem value="other" className="hover:bg-teal-700/25">Other/Undecided</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="date" className="text-teal-300 font-semibold">Preferred Date *</Label>
                            <Input
                              id="date"
                              name="date"
                              type="date"
                              value={formData.date}
                              onChange={handleInputChange}
                              required
                              className="bg-gray-800 text-teal-300 border-gray-700 focus:border-teal-400"
                            />
                          </div>
                          <div>
                            <Label htmlFor="time" className="text-teal-300 font-semibold">Preferred Time *</Label>
                            <Select
                              value={formData.time}
                              onValueChange={(value) => handleSelectChange('time', value)}
                            >
                              <SelectTrigger className="bg-gray-800 border-gray-700 focus:border-teal-400 text-teal-300" />
                              <SelectContent className="bg-gray-800 text-teal-300 border-gray-700">
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time.toLowerCase().replace(/[:\s]/g, '')} className="hover:bg-teal-700/25">
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="message" className="text-teal-300 font-semibold">Additional Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us about your learning goals, experience level, or any specific questions you have..."
                            className="min-h-[100px] bg-gray-800 text-teal-300 border-gray-700 focus:border-teal-400"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-teal-500 hover:bg-teal-600 text-gray-900 text-lg py-3 rounded-md shadow-md transition-colors duration-300"
                          disabled={!formData.appointmentType || !formData.date || !formData.time}
                        >
                          <Calendar className="h-5 w-5 mr-2" /> Book Appointment
                        </Button>
                      </form>
                      <div className="border-t border-gray-700 pt-6 mt-6 text-teal-300">
                        <h3 className="font-semibold mb-3">Need Help?</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Phone className="h-5 w-5 text-teal-500" />
                            <span>Call us at +91 9876543210</span>
                          </div>
                          <p>Our team is available Mon-Fri 9AM-7PM, Sat 9AM-5PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-gray-800 border border-teal-500 shadow-md rounded-lg text-center py-20 px-10 max-w-lg mx-auto">
                    <CheckCircle className="mx-auto mb-6 h-16 w-16 text-teal-400" />
                    <h3 className="text-3xl font-extrabold text-teal-400 mb-3">Appointment Booked!</h3>
                    <p className="text-teal-300 text-lg mb-4">
                      Your appointment has been successfully scheduled. We'll send a confirmation to your email shortly.
                    </p>
                    <p className="text-sm text-teal-400">
                      Redirecting to your profile...
                    </p>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-teal-400 mb-4">What to Expect</h2>
              <p className="text-teal-300 max-w-2xl mx-auto">
                Your appointment will be a comprehensive session designed to understand your goals
                and provide personalized guidance.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Assessment",
                  description: "We'll discuss your background, goals, and preferred learning style"
                },
                {
                  step: "2",
                  title: "Recommendation",
                  description: "Get personalized course recommendations based on your career aspirations"
                },
                {
                  step: "3",
                  title: "Planning",
                  description: "Create a customized learning path with timeline and milestones"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-gray-700 rounded-lg shadow-sm hover:shadow-teal-600 transition-shadow duration-300 text-center">
                  <CardHeader>
                    <div className="rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 bg-teal-500 text-gray-900 font-bold text-xl">
                      {item.step}
                    </div>
                    <CardTitle className="text-xl text-teal-400">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-teal-300">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Appointment;
