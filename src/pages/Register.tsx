import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🌸</div>
            <h1 className="text-3xl font-orbitron font-bold text-neon-pink mb-2 glow-pink">
              Inscription
            </h1>
            <p className="text-muted-foreground">
              Rejoignez des milliers d'otakus passionnés
            </p>
          </div>

          {/* Register Form */}
          <div className="glass-card rounded-xl p-8">
            <form className="space-y-6">
              {/* Username Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Nom d'utilisateur
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="VotrePseudo"
                    className="w-full pl-10 pr-4 py-3 bg-input rounded-lg border border-border/20 focus:border-neon-pink focus:outline-none focus:ring-2 focus:ring-neon-pink/20 text-foreground transition-all duration-300 glow-pink"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Ce nom sera visible par tous les membres
                </p>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Adresse email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full pl-10 pr-4 py-3 bg-input rounded-lg border border-border/20 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 text-foreground transition-all duration-300 glow-blue"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mot de passe sécurisé"
                    className="w-full pl-10 pr-12 py-3 bg-input rounded-lg border border-border/20 focus:border-neon-yellow focus:outline-none focus:ring-2 focus:ring-neon-yellow/20 text-foreground transition-all duration-300 glow-yellow"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-neon-yellow transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Minimum 8 caractères avec lettres et chiffres
                </p>
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Confirmer le mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirmer le mot de passe"
                    className="w-full pl-10 pr-12 py-3 bg-input rounded-lg border border-border/20 focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/20 text-foreground transition-all duration-300 glow-purple"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-neon-purple transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-neon-pink bg-transparent border-border rounded focus:ring-neon-pink mt-0.5"
                  />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    J'accepte les{" "}
                    <Link to="/terms" className="text-neon-pink hover:text-neon-yellow transition-colors">
                      conditions d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link to="/privacy" className="text-neon-pink hover:text-neon-yellow transition-colors">
                      politique de confidentialité
                    </Link>
                  </span>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-neon-blue bg-transparent border-border rounded focus:ring-neon-blue mt-0.5"
                  />
                  <span className="text-sm text-muted-foreground">
                    Je souhaite recevoir les actualités de la communauté par email
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="neon"
                size="lg"
                className="w-full text-lg glow-pink"
              >
                Créer mon compte
              </Button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 h-px bg-border"></div>
              <div className="px-4 text-sm text-muted-foreground">ou</div>
              <div className="flex-1 h-px bg-border"></div>
            </div>

            {/* Social Register */}
            <div className="space-y-3">
              <Button variant="ghost" size="lg" className="w-full border border-border/20 hover-glow-blue">
                <span className="mr-2">🐱</span>
                S'inscrire avec GitHub
              </Button>
              <Button variant="ghost" size="lg" className="w-full border border-border/20 hover-glow-blue">
                <span className="mr-2">🔥</span>
                S'inscrire avec Discord
              </Button>
            </div>

            {/* Login Link */}
            <div className="text-center mt-6 pt-6 border-t border-border/20">
              <p className="text-muted-foreground">
                Déjà membre ?{" "}
                <Link
                  to="/login"
                  className="text-neon-blue hover:text-neon-pink transition-colors font-semibold hover-glow-blue"
                >
                  Se connecter
                </Link>
              </p>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="mt-8 glass-card rounded-xl p-6 text-center">
            <h3 className="text-lg font-orbitron font-bold text-neon-yellow mb-2">
              🎉 Bienvenue dans la famille !
            </h3>
            <p className="text-sm text-muted-foreground">
              En rejoignant notre communauté, vous accédez à des contenus exclusifs, 
              des discussions passionnées et un système de progression gamifié !
            </p>
          </div>
        </div>
      </div>
    );
};

export default Register;