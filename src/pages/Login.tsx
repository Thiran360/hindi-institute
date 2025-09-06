import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, LogIn, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

// Password strength checker
const getPasswordStrength = (password) => {
  if (password.length < 6) return { label: "Weak", color: "bg-red-500" };
  if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.length >= 8)
    return { label: "Strong", color: "bg-green-500" };
  return { label: "Medium", color: "bg-yellow-500" };
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [capsLock, setCapsLock] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const { login, loginWithGoogle, loginWithGithub, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      const success = await login(email, password);
      if (success) {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        setTimeout(() => navigate(from, { replace: true }), 800);
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    }
    setIsLoading(false);
  };

  const handleClose = () => {
    navigate(-1);
  };

  const passwordStrength = password ? getPasswordStrength(password) : null;

  return (
    <>
      {/* Background */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-black opacity-95"
        onClick={handleClose}
      />

      {/* Card */}
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md"
        >
          <Card className="rounded-2xl shadow-2xl bg-gray-900/90 backdrop-blur-xl border border-gray-700">
            <CardHeader className="space-y-1 relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="absolute top-4 left-4 text-gray-400 hover:text-white hover:bg-transparent"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>

              <CardTitle className="text-2xl text-center text-white font-semibold">
                Welcome back
              </CardTitle>
              <CardDescription className="text-center text-gray-300">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-500"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2 relative">
                  <Label htmlFor="password" className="text-gray-300">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    onKeyDown={(e) => setCapsLock(e.getModifierState("CapsLock"))}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-indigo-500 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-300" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-300" />
                    )}
                  </Button>

                  {capsLock && (
                    <p className="text-xs text-red-400 mt-1">
                      Warning: Caps Lock is ON
                    </p>
                  )}

                  {passwordStrength && (
                    <div className="flex items-center gap-2 mt-2">
                      <div
                        className={`h-2 w-20 rounded-full ${passwordStrength.color}`}
                      ></div>
                      <span className="text-xs text-gray-400">
                        {passwordStrength.label}
                      </span>
                    </div>
                  )}
                </div>

                {/* Remember me */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="accent-indigo-600"
                    />
                    Remember me
                  </label>
                  <Link to="/forgot-password" className="hover:text-indigo-400">
                    Forgot password?
                  </Link>
                </div>

                {/* Sign In button */}
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white border-opacity-25" />
                      Signing in...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <LogIn className="h-5 w-5" />
                      Sign In
                    </div>
                  )}
                </Button>
              </form>

              {/* Divider */}
              <div className="mt-6 flex items-center justify-center">
                <span className="text-gray-500 text-sm">or</span>
              </div>

              {/* Social logins */}
              <div className="mt-4 flex gap-3">
                <Button
                  variant="outline"
                  onClick={loginWithGoogle}
                  className="w-full flex items-center gap-2 bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="h-4 w-4"
                  />
                  Continue with Google
                </Button>
                <Button
                  variant="outline"
                  onClick={loginWithGithub}
                  className="w-full flex items-center gap-2 bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
                >
                  <img
                    src="https://www.svgrepo.com/show/475654/github-color.svg"
                    alt="GitHub"
                    className="h-4 w-4"
                  />
                  Continue with GitHub
                </Button>
              </div>

              {/* Signup link */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    state={{ from: location.state?.from }}
                    className="font-medium text-indigo-400 hover:underline hover:text-indigo-600"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
