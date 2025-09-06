import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, UserPlus, X } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const { name, email, phone, password, confirmPassword } = formData;

    if (!name || !email || !phone || !password || !confirmPassword) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    try {
      const success = await signup(name, email, phone, password);
      if (success) {
        navigate(from, { replace: true });
      } else {
        setError('An account with this email already exists');
      }
    } catch (err) {
      setError('Signup failed. Please try again.');
    }

    setIsLoading(false);
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 z-40" 
        onClick={handleClose}
      />
      
      {/* Updated vertical positioning: Changed 'items-center' to 'items-start' and added 'pt-16' for top padding. */}
      <div className="fixed inset-0 flex items-start justify-center p-4 z-50 pt-16">
        <Card 
          className="w-full max-w-md bg-gray-900 shadow-2xl rounded-xl 
                     relative overflow-hidden
                     p-0
                     border border-transparent
                     bg-gradient-to-br from-gray-800 to-gray-900 
                     before:absolute before:inset-0 before:p-[1px] 
                     before:bg-gradient-to-br before:from-indigo-600 before:via-purple-600 before:to-pink-600 
                     before:rounded-xl before:z-[-1]"
          onClick={(e) => e.stopPropagation()}
        >
          <CardHeader className="space-y-1 relative px-6 pt-4 pb-0">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleClose} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-transparent"
            >
              <X className="h-5 w-5" />
            </Button>
            <CardTitle className="text-2xl text-center text-white font-semibold pt-2">
              Create an account
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6 pt-2">
            <form onSubmit={handleSubmit} className="space-y-3">
              {error && (
                <Alert variant="destructive" className="bg-red-900 border-red-800 text-red-400">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Full Name */}
              <div className="space-y-1">
                <Label htmlFor="name" className="text-gray-300 text-sm">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 text-white border-gray-700 placeholder-gray-500 
                             focus:border-amber-400 focus:ring-amber-400 focus:ring-1 
                             rounded-md shadow-inner shadow-gray-700/20 h-9"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <Label htmlFor="email" className="text-gray-300 text-sm">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 text-white border-gray-700 placeholder-gray-500 
                             focus:border-amber-400 focus:ring-amber-400 focus:ring-1 
                             rounded-md shadow-inner shadow-gray-700/20 h-9"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <Label htmlFor="phone" className="text-gray-300 text-sm">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 text-white border-gray-700 placeholder-gray-500 
                             focus:border-amber-400 focus:ring-amber-400 focus:ring-1 
                             rounded-md shadow-inner shadow-gray-700/20 h-9"
                />
              </div>

              {/* Password */}
              <div className="space-y-1">
                <Label htmlFor="password" className="text-gray-300 text-sm">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 text-white border-gray-700 placeholder-gray-500 
                               focus:border-amber-400 focus:ring-amber-400 focus:ring-1 
                               rounded-md shadow-inner shadow-gray-700/20 pr-10 h-9"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-amber-400"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1">
                <Label htmlFor="confirmPassword" className="text-gray-300 text-sm">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 text-white border-gray-700 placeholder-gray-500 
                             focus:border-amber-400 focus:ring-amber-400 focus:ring-1 
                             rounded-md shadow-inner shadow-gray-700/20 h-9"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 
                           hover:from-indigo-700 hover:to-purple-700 
                           focus:ring-indigo-500 focus:ring-2 text-white font-semibold 
                           rounded-md py-2.5 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    Creating account...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <UserPlus className="h-4 w-4" />
                    Create Account
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400">
                Already have an account?{' '}
                <Link
                  to="/login"
                  state={{ from: location.state?.from }}
                  className="font-medium text-amber-400 hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Signup;