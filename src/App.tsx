import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Location } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import PythonCourse from "./pages/PythonCourse";
import JavaCourse from "./pages/JavaCourse";
import Gallery from "./pages/Gallery";
import Placements from "./pages/Placements";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppRoutes() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      {/* Main routes (always include login/signup here) */}
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Index />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} /> {/* Always here */}
        <Route path="/signup" element={<Signup />} /> {/* Always here */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointment"
          element={
            <ProtectedRoute>
              <Appointment />
            </ProtectedRoute>
          }
        />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/python" element={<PythonCourse />} />
        <Route path="/courses/java" element={<JavaCourse />} />
        <Route path="/services/*" element={<Services />} />
        <Route path="/gallery/*" element={<Gallery />} />
        <Route path="/placements/*" element={<Placements />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Modal version if background exists */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/login" element={<Login isModal />} />
          <Route path="/signup" element={<Signup isModal />} />
        </Routes>
      )}
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
