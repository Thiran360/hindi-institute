import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X, GraduationCap, User } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  const isActive = (path) => location.pathname === path;

  const navigationItems = [
    { label: "Home", path: "/" },
    {
      label: "About Us",
      dropdown: [
        { label: "Our Story", path: "/about/story" },
        { label: "Our Team", path: "/about/team" },
        { label: "Mission & Vision", path: "/about/mission" },
      ],
    },
    {
      label: "Courses",
      dropdown: [
        { label: "Python Programming", path: "/courses/python" },
        { label: "Java Development", path: "/courses/java" },
        { label: "All Courses", path: "/courses" },
      ],
    },
    {
      label: "Services",
      dropdown: [
        { label: "Corporate Training", path: "/services/corporate" },
        { label: "Online Learning", path: "/services/online" },
        { label: "Certification", path: "/services/certification" },
        { label: "Mentorship", path: "/services/mentorship" },
      ],
    },
    { label: "Gallery", path: "/gallery" },
    { label: "Placements", path: "/placements" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="w-full mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 lg:gap-3">
              <div className="gradient-primary p-1.5 lg:p-2 rounded-lg">
                <GraduationCap className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
              </div>
              <span className="text-lg lg:text-xl xl:text-2xl font-bold text-black whitespace-nowrap">
                TechInstitute
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Only show on xl screens and up */}
          <div className="hidden xl:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-1 2xl:gap-2">
              {navigationItems.map((item) =>
                item.dropdown ? (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center gap-1 text-sm xl:text-base font-medium px-3 xl:px-4 py-2 h-9 xl:h-10 text-black hover:text-primary hover:bg-accent/50 whitespace-nowrap transition-colors duration-200"
                      >
                        {item.label}
                        <ChevronDown className="h-3.5 w-3.5 xl:h-4 xl:w-4 transition-transform duration-200" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-52 xl:w-56 mt-1">
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.path} asChild>
                          <Link
                            to={dropdownItem.path}
                            className="w-full text-sm xl:text-base py-2 xl:py-2.5 px-3 text-black hover:text-primary hover:bg-accent/50 cursor-pointer transition-colors duration-200"
                          >
                            {dropdownItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    key={item.label}
                    variant="ghost"
                    asChild
                    className={`text-sm xl:text-base font-medium px-3 xl:px-4 py-2 h-9 xl:h-10 text-black hover:text-primary hover:bg-accent/50 whitespace-nowrap transition-colors duration-200 ${
                      isActive(item.path) ? "text-primary bg-accent/50" : ""
                    }`}
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Desktop CTA - Only show on xl screens */}
          <div className="hidden xl:flex flex-shrink-0 items-center gap-2 xl:gap-3">
            {isAuthenticated ? (
              <>
                <Button className="px-4 xl:px-6 py-2 h-9 xl:h-10 text-sm xl:text-base font-medium gradient-secondary text-secondary-foreground whitespace-nowrap hover:opacity-90 transition-opacity duration-200">
                  <Link to="/appointment">Book</Link>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 px-3 xl:px-4 py-2 h-9 xl:h-10 text-sm xl:text-base text-black hover:bg-accent/50 transition-colors duration-200">
                      <User className="h-4 w-4" />
                      <span className="truncate max-w-[80px] xl:max-w-[120px] font-medium">{user?.name}</span>
                      <ChevronDown className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-44 xl:w-48">
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="text-sm xl:text-base py-2 xl:py-2.5 text-black hover:text-primary">
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={logout} 
                      className="text-sm xl:text-base py-2 xl:py-2.5 text-red-600 hover:text-red-700 hover:bg-red-50 cursor-pointer"
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button className="px-4 xl:px-6 py-2 h-9 xl:h-10 text-sm xl:text-base font-medium gradient-secondary text-secondary-foreground whitespace-nowrap hover:opacity-90 transition-opacity duration-200">
                  <Link to="/signup" state={{ backgroundLocation: location }}>
                    Get Started
                  </Link>
                </Button>
                <Button variant="ghost" className="px-3 xl:px-4 py-2 h-9 xl:h-10 text-sm xl:text-base font-medium text-black whitespace-nowrap hover:text-primary hover:bg-accent/50 transition-colors duration-200">
                  <Link to="/login" state={{ backgroundLocation: location }}>
                    Login
                  </Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile & Tablet Menu - Show for screens smaller than xl */}
          <div className="xl:hidden flex items-center gap-2">
            {/* Show CTA buttons on larger mobile/tablet screens */}
            <div className="hidden sm:flex items-center gap-2">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2 py-1.5 text-sm text-black">
                      <User className="h-4 w-4" />
                      <span className="truncate max-w-[60px] sm:max-w-[80px]">{user?.name}</span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem asChild>
                      <Link to="/appointment" className="text-sm text-black">Book</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="text-sm text-black">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout} className="text-sm text-red-600">
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button size="sm" className="px-3 py-1.5 text-sm font-medium gradient-secondary text-secondary-foreground">
                    <Link to="/signup" state={{ backgroundLocation: location }}>
                      Start
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="px-2 py-1.5 text-sm font-medium text-black">
                    <Link to="/login" state={{ backgroundLocation: location }}>
                      Login
                    </Link>
                  </Button>
                </>
              )}
            </div>

            {/* Hamburger Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-accent/50 ml-1"
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile/Tablet Dropdown Menu */}
        {isOpen && (
          <div className="xl:hidden bg-background border-t border-border animate-in slide-in-from-top-2 duration-200">
            <div className="py-3 sm:py-4 space-y-1">
              {navigationItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="space-y-1">
                    <div className="px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-black border-l-4 border-primary bg-accent/20">
                      {item.label}
                    </div>
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className="block pl-6 sm:pl-8 pr-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-700 hover:text-primary hover:bg-accent/30 transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`block px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium hover:text-primary hover:bg-accent/30 transition-colors duration-200 ${
                      isActive(item.path) 
                        ? "text-primary bg-accent/50 border-l-4 border-primary" 
                        : "text-black border-l-4 border-transparent"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* Mobile CTA Section - Only show on small screens since larger ones have CTA in header */}
              <div className="sm:hidden px-4 pt-4 pb-2 space-y-3 border-t border-border mt-3">
                {isAuthenticated ? (
                  <>
                    <Button className="w-full h-11 text-base font-medium gradient-secondary text-secondary-foreground hover:opacity-90 transition-opacity duration-200">
                      <Link to="/appointment" onClick={() => setIsOpen(false)} className="w-full h-full flex items-center justify-center">
                        Book Appointment
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full h-11 text-base font-medium text-black hover:bg-accent/50 border border-border" asChild>
                      <Link to="/profile" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                        <User className="h-4 w-4" />
                        My Profile
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full h-11 text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200"
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="w-full h-11 text-base font-medium gradient-secondary text-secondary-foreground hover:opacity-90 transition-opacity duration-200" asChild>
                      <Link to="/signup" state={{ backgroundLocation: location }} onClick={() => setIsOpen(false)} className="w-full h-full flex items-center justify-center">
                        Get Started
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full h-11 text-base font-medium text-black hover:bg-accent/50 border border-border" asChild>
                      <Link to="/login" state={{ backgroundLocation: location }} onClick={() => setIsOpen(false)} className="w-full h-full flex items-center justify-center">
                        Login
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;