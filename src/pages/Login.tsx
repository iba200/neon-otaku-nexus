import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsLoading(true);
    const success = await login(email, password);
    setIsLoading(false);

    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">⚡</div>
          <h1 className="text-3xl font-orbitron font-bold text-neon-blue mb-2 glow-blue">
            Connexion
          </h1>
          <p className="text-muted-foreground">
            Rejoignez la communauté otaku ultime
          </p>
        </div>

        {/* Login Form */}
        <div className="glass-card rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  placeholder="Votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-12 py-3 bg-input rounded-lg border border-border/20 focus:border-neon-pink focus:outline-none focus:ring-2 focus:ring-neon-pink/20 text-foreground transition-all duration-300 glow-pink"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-neon-pink transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-neon-blue bg-transparent border-border rounded focus:ring-neon-blue"
                />
                <span className="text-muted-foreground">Se souvenir de moi</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-neon-pink hover:text-neon-yellow transition-colors hover-glow-pink"
              >
                Mot de passe oublié ?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="neon"
              size="lg"
              disabled={isLoading}
              className="w-full text-lg glow-pink"
            >
              {isLoading ? "Connexion..." : "Se connecter"}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-border"></div>
            <div className="px-4 text-sm text-muted-foreground">ou</div>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <Button variant="ghost" size="lg" className="w-full border border-border/20 hover-glow-blue">
              <span className="mr-2">🐱</span>
              Continuer avec GitHub
            </Button>
            <Button variant="ghost" size="lg" className="w-full border border-border/20 hover-glow-blue">
              <span className="mr-2">🔥</span>
              Continuer avec Discord
            </Button>
          </div>

          {/* Register Link */}
          <div className="text-center mt-6 pt-6 border-t border-border/20">
            <p className="text-muted-foreground">
              Pas encore membre ?{" "}
              <Link
                to="/register"
                className="text-neon-blue hover:text-neon-pink transition-colors font-semibold hover-glow-blue"
              >
                Créer un compte
              </Link>
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="text-center">
            <div className="text-2xl mb-1">🔥</div>
            <div className="text-xs text-muted-foreground">Contenu exclusif</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-1">💬</div>
            <div className="text-xs text-muted-foreground">Discussions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-1">🏆</div>
            <div className="text-xs text-muted-foreground">Classements</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;