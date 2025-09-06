import React, { createContext, useContext, useState, useEffect } from "react";
interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  provider?: "local" | "google" | "github";
  createdAt: string;
}
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, phone: string, password: string) => boolean;
  loginWithGoogle: () => boolean;
  loginWithGithub: () => boolean;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
  isAuthenticated: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const login = (email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };
  const signup = (name: string, email: string, phone: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u: any) => u.email === email)) {
      return false; 
    }
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      password,
      provider: "local",
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem("user", JSON.stringify(userWithoutPassword));
    return true;
  };
  const loginWithGoogle = (): boolean => {
    const googleUser: User = {
      id: "google-" + Date.now(),
      name: "Google User",
      email: "googleuser@example.com",
      provider: "google",
      createdAt: new Date().toISOString(),
    };
    setUser(googleUser);
    localStorage.setItem("user", JSON.stringify(googleUser));
    return true;
  };
  const loginWithGithub = (): boolean => {
    const githubUser: User = {
      id: "github-" + Date.now(),
      name: "GitHub User",
      email: "githubuser@example.com",
      provider: "github",
      createdAt: new Date().toISOString(),
    };
    setUser(githubUser);
    localStorage.setItem("user", JSON.stringify(githubUser));
    return true;
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userIndex = users.findIndex((u: any) => u.id === user.id);
      if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...userData };
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
  };
  const value: AuthContextType = {
    user,
    login,
    signup,
    loginWithGoogle,
    loginWithGithub,
    logout,
    updateProfile,
    isAuthenticated: !!user,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};