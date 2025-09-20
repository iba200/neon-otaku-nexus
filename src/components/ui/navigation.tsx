import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
            <Button variant="neon" size="sm">
              Connexion
            </Button>
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
              <div className="pt-2">
                <Button variant="neon" size="sm" className="w-full">
                  Connexion
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};