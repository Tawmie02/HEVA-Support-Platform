import React, { createContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  name?: string;
  organization?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string, organization: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate API call for login
    // In a real app, this would validate credentials against a backend
    setUser({ email });
  };

  const signup = async (email: string, password: string, name: string, organization: string) => {
    // Simulate API call for signup
    // In a real app, this would create a new user in the backend
    setUser({ email, name, organization });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};