import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { apiService, setAuthTokens, clearAuthTokens, isAuthenticated, User } from '../services/api';
import { useToast } from './use-toast';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    if (!isAuthenticated()) {
      setIsLoading(false);
      return;
    }

    try {
      const profile = await apiService.getProfile();
      setUser(profile);
    } catch (error) {
      console.error('Failed to load user profile:', error);
      clearAuthTokens();
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const response = await apiService.login({ email, password });
      
      setAuthTokens(response.access_token, response.refresh_token);
      setUser(response.user);
      
      toast({
        title: "Connexion réussie",
        description: `Bienvenue ${response.user.username} !`,
      });
      
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      toast({
        title: "Erreur de connexion",
        description: "Email ou mot de passe incorrect",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const response = await apiService.register({ username, email, password });
      
      setAuthTokens(response.access_token, response.refresh_token);
      setUser(response.user);
      
      toast({
        title: "Inscription réussie",
        description: `Bienvenue dans la communauté, ${response.user.username} !`,
      });
      
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      toast({
        title: "Erreur d'inscription",
        description: "Une erreur est survenue lors de l'inscription",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    clearAuthTokens();
    setUser(null);
    toast({
      title: "Déconnexion",
      description: "À bientôt !",
    });
  };

  const refreshAuth = async () => {
    try {
      const profile = await apiService.getProfile();
      setUser(profile);
    } catch (error) {
      console.error('Failed to refresh auth:', error);
      logout();
    }
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    refreshAuth,
  };

  return React.createElement(AuthContext.Provider, { value }, children);
};