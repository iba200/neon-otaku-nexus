import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import { Button } from "./button";
import { useAuth } from "../../hooks/useAuth";

export const Navigation = () => {
  console.log('Navigation component rendering');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  console.log('About to call useAuth');
  const { user, logout } = useAuth();
  console.log('useAuth returned:', { user, logout });

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Articles", path: "/articles" },
    { name: "Forum", path: "/forum" },
    { name: "Classement", path: "/classement" },
    { name: "Profil", path: "/profil" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="glass-card sticky top-0 z-50 border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-orbitron font-bold text-neon-pink animate-pulse-neon">
              ⚡ Otaku Forum
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-neon-pink glow-pink bg-primary/10"
                    : "text-foreground hover:text-neon-blue hover-glow-blue"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-3">
                <Link
                  to="/profil"
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-foreground hover:text-neon-blue hover-glow-blue transition-all duration-300"
                >
                  <User size={16} />
                  <span>{user.username}</span>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="text-muted-foreground hover:text-red-400"
                >
                  <LogOut size={16} />
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Connexion
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="neon" size="sm">
                    Inscription
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-neon-pink"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-slide-in">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border/20">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-neon-pink glow-pink bg-primary/10"
                      : "text-foreground hover:text-neon-blue hover-glow-blue"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 space-y-2">
                {user ? (
                  <>
                    <Link
                      to="/profil"
                      className="flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-foreground hover:text-neon-blue hover-glow-blue transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <User size={16} />
                      <span>{user.username}</span>
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-muted-foreground hover:text-red-400"
                    >
                      <LogOut size={16} className="mr-2" />
                      Déconnexion
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full">
                        Connexion
                      </Button>
                    </Link>
                    <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="neon" size="sm" className="w-full">
                        Inscription
                      </Button>
                    </Link>
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