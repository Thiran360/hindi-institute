import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { User, Calendar, BookOpen, Settings, CheckCircle, Bell, XCircle, BookA } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';


// Mocked Firebase functionality to make the code self-contained
const mockFirebase = (() => {
  let mockData = {
    'mock-user-123': {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '9876543210',
      createdAt: new Date('2023-01-15T12:00:00Z').toISOString(),
      appointments: [
        { id: 1, appointmentType: 'counseling', courseInterest: 'Python Bootcamp', date: '2024-10-25', time: '10:00 AM', status: 'confirmed', message: 'Looking forward to discussing the course structure.' },
        { id: 2, appointmentType: 'demo', courseInterest: 'Java Development', date: '2024-11-10', time: '02:00 PM', status: 'pending', message: '' },
      ]
    }
  };
  const subscribers = {};


  const getProfile = (uid) => mockData[uid] || { name: '', email: '', phone: '' };


  const getAppointments = (uid) => mockData[uid]?.appointments || [];


  const updateProfile = (uid, updates) => {
    mockData[uid] = { ...mockData[uid], ...updates, updatedAt: new Date().toISOString() };
    if (subscribers[uid]) {
      Object.values(subscribers[uid]).forEach(callback => callback());
    }
  };
  
  const addAppointment = (uid, appointment) => {
    if (!mockData[uid]) {
      mockData[uid] = { appointments: [] };
    }
    mockData[uid].appointments.push(appointment);
    if (subscribers[uid]) {
      Object.values(subscribers[uid]).forEach(callback => callback());
    }
  };


  const subscribe = (path, callback) => {
    const uid = path.split('/')[2];
    if (!subscribers[uid]) {
      subscribers[uid] = {};
    }
    const id = Date.now();
    subscribers[uid][id] = callback;
    return () => {
      delete subscribers[uid][id];
    };
  };


  return { getProfile, getAppointments, updateProfile, addAppointment, subscribe };
})();


// Framer Motion Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};


const Profile = () => {
  const mockUser = { uid: 'mock-user-123' };
  const [user, setUser] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [appointments, setAppointments] = useState([]);
  const [notification, setNotification] = useState(null);


  useEffect(() => {
    if (!user) return;


    // Set initial data and subscribe to updates
    const fetchData = () => {
      const profileData = mockFirebase.getProfile(user.uid);
      setFormData({
        name: profileData.name,
        email: profileData.email,
        phone: profileData.phone,
      });

      const appts = mockFirebase.getAppointments(user.uid);

      // Ensure ids are strings for React keys
      const normalizedAppointments = appts.map(a => ({
        ...a,
        id: String(a.id)
      }));

      setAppointments(normalizedAppointments);
    };


    fetchData();


    const profileUnsubscribe = mockFirebase.subscribe(`users/${user.uid}/profile`, fetchData);
    const appointmentsUnsubscribe = mockFirebase.subscribe(`users/${user.uid}/appointments`, fetchData);


    return () => {
      profileUnsubscribe();
      appointmentsUnsubscribe();
    };
  }, [user]);


  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };


  const handleSave = () => {
    if (!user) {
      setNotification({ message: 'Error: Could not save profile.', type: 'error' });
      return;
    }
    
    mockFirebase.updateProfile(user.uid, formData);
    setIsEditing(false);
    setNotification({ message: 'Profile successfully updated!', type: 'success' });
  };


  const handleCancel = () => {
    setIsEditing(false);
    const profileData = mockFirebase.getProfile(user.uid);
    setFormData({
      name: profileData.name || '',
      email: profileData.email || '',
      phone: profileData.phone || '',
    });
  };


  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-600 text-white';
      case 'pending':
        return 'bg-amber-400 text-gray-900';
      case 'cancelled':
        return 'bg-red-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };


  if (!user) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <h1 className="text-2xl">Please sign in to view your profile.</h1>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="show" variants={stagger} className="flex items-center gap-4 mb-8">
            <motion.div variants={fadeUp} className="bg-gray-800 p-3 rounded-full shadow-lg">
              <User className="h-8 w-8 text-amber-400" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <h1 className="text-3xl font-bold">My Profile</h1>
              <p className="text-gray-400">Manage your account and view your appointments</p>
            </motion.div>
          </motion.div>
          
          {notification && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className={`p-4 mb-4 rounded-lg flex items-center gap-4 ${notification.type === 'success' ? 'bg-green-700' : 'bg-red-700'}`}
            >
              {notification.type === 'success' ? <CheckCircle className="h-6 w-6" /> : <XCircle className="h-6 w-6" />}
              <span>{notification.message}</span>
            </motion.div>
          )}


          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto bg-gray-800 p-1 rounded-full shadow-inner">
              <TabsTrigger value="profile" className="flex items-center gap-2 data-[state=active]:bg-amber-400 data-[state=active]:text-gray-900 data-[state=active]:shadow-md data-[state=active]:rounded-full transition-all duration-300 text-gray-200 hover:text-white">
                <Settings className="h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="appointments" className="flex items-center gap-2 data-[state=active]:bg-amber-400 data-[state=active]:text-gray-900 data-[state=active]:shadow-md data-[state=active]:rounded-full transition-all duration-300 text-gray-200 hover:text-white">
                <Calendar className="h-4 w-4" />
                Appointments
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex items-center gap-2 data-[state=active]:bg-amber-400 data-[state=active]:text-gray-900 data-[state=active]:shadow-md data-[state=active]:rounded-full transition-all duration-300 text-gray-200 hover:text-white">
                <BookOpen className="h-4 w-4" />
                My Courses
              </TabsTrigger>
            </TabsList>


            <TabsContent value="profile">
              <Card className="bg-gray-800 text-white border border-gray-700 shadow-lg rounded-xl">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription className="text-gray-400">
                    View and update your personal information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="bg-gray-700 text-white border-gray-600 focus:border-amber-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="bg-gray-700 text-white border-gray-600 focus:border-amber-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="bg-gray-700 text-white border-gray-600 focus:border-amber-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300">User ID</Label>
                      <Input
                        value={user.uid}
                        disabled
                        className="bg-gray-700 text-gray-500 border-gray-600"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {isEditing ? (
                      <>
                        <Button onClick={handleSave} className="bg-amber-400 text-gray-900 hover:bg-amber-300">Save Changes</Button>
                        <Button variant="outline" onClick={handleCancel} className="border-gray-500 text-gray-300 hover:bg-gray-700">Cancel</Button>
                      </>
                    ) : (
                      <Button onClick={() => setIsEditing(true)} className="bg-amber-400 text-gray-900 hover:bg-amber-300">
                        Edit Profile
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>


            <TabsContent value="appointments">
              <Card className="bg-gray-800 text-white border border-gray-700 shadow-lg rounded-xl">
                <CardHeader>
                  <CardTitle>My Appointments</CardTitle>
                  <CardDescription className="text-gray-400">
                    View your upcoming and past appointments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div initial="hidden" animate="show" variants={stagger} className="space-y-4">
                    {appointments.length > 0 ? (
                      appointments.map((appointment) => (
                        <motion.div key={appointment.id} variants={fadeUp} className="border border-gray-700 bg-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
                          <div className="flex justify-between items-start">
                            <div className="space-y-2">
                              <h3 className="font-semibold text-white">
                                {appointment.appointmentType === 'counseling' ? 'Course Counseling' :
                                appointment.appointmentType === 'demo' ? 'Demo Session' :
                                  appointment.appointmentType === 'career' ? 'Career Guidance' :
                                    appointment.appointmentType}
                              </h3>
                              <p className="text-sm text-gray-400">
                                Course Interest: {appointment.courseInterest || 'Not specified'}
                              </p>
                              <div className="flex items-center gap-4 text-sm text-gray-300">
                                <span>📅 {new Date(appointment.date).toLocaleDateString()}</span>
                                <span>🕒 {appointment.time}</span>
                              </div>
                              {appointment.message && (
                                <p className="text-sm text-gray-400 mt-2">
                                  Message: {appointment.message}
                                </p>
                              )}
                            </div>
                            <Badge className={getStatusColor(appointment.status)}>
                              {appointment.status}
                            </Badge>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <Calendar className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No appointments yet</h3>
                        <p className="text-gray-400 mb-4">
                          Book your first appointment to get started with your learning journey
                        </p>
                        <Button asChild className="bg-amber-400 text-gray-900 hover:bg-amber-300">
                          <a href="/appointment">Book Appointment</a>
                        </Button>
                      </div>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>


            <TabsContent value="courses">
              <Card className="bg-gray-800 text-white border border-gray-700 shadow-lg rounded-xl">
                <CardHeader>
                  <CardTitle>My Courses</CardTitle>
                  <CardDescription className="text-gray-400">
                    Track your enrolled courses and progress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <BookOpen className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No courses enrolled yet</h3>
                    <p className="text-gray-400 mb-4">
                      Start your learning journey by enrolling in one of our courses
                    </p>
                    <Button asChild className="bg-amber-400 text-gray-900 hover:bg-amber-300">
                      <a href="/courses">Browse Courses</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};


export default Profile;
