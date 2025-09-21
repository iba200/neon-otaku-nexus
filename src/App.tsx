import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Forum from "./pages/Forum";
import Topic from "./pages/Topic";
import Classement from "./pages/Classement";
import Profil from "./pages/Profil";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

import { MainLayout } from "./components/layout/main-layout";
import { AuthProvider } from "./hooks/useAuth";
import { AuthGuard } from "./components/layout/auth-guard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/article/:id" element={<Article />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/topic/:id" element={<Topic />} />
              <Route path="/classement" element={<Classement />} />
              <Route path="/profil/:id" element={<AuthGuard><Profil /></AuthGuard>} />
              <Route path="/profil" element={<AuthGuard><Profil /></AuthGuard>} />
              <Route path="/login" element={<AuthGuard requireAuth={false}><Login /></AuthGuard>} />
              <Route path="/register" element={<AuthGuard requireAuth={false}><Register /></AuthGuard>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
