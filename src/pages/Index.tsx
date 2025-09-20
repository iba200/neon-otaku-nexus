import { MainLayout } from "@/components/layout/main-layout";
import { ArticleCard } from "@/components/ui/article-card";
import { ForumTopicCard } from "@/components/ui/forum-topic-card";
import { MemberCard } from "@/components/ui/member-card";
import { Button } from "@/components/ui/button";
import { TrendingUp, MessageSquare, Users } from "lucide-react";

const Index = () => {
  // Mock data
  const latestArticles = [
    {
      id: "1",
      title: "Les meilleurs anime de la saison automne 2024",
      summary: "Découvrez notre sélection des anime les plus prometteurs de cette nouvelle saison avec des analyses détaillées...",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      author: "SakuraAdmin",
      date: "Il y a 2 heures",
      category: "Anime"
    },
    {
      id: "2", 
      title: "Guide complet du cosplay débutant",
      summary: "Tout ce que vous devez savoir pour commencer dans le cosplay : matériaux, techniques, budgets...",
      imageUrl: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=400",
      author: "CosplayKing",
      date: "Il y a 5 heures",
      category: "Cosplay"
    },
    {
      id: "3",
      title: "Top 10 des manga à lire absolument",
      summary: "Notre sélection exclusive des manga incontournables qui ont marqué l'histoire de cet art...",
      imageUrl: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400", 
      author: "MangaExpert",
      date: "Il y a 1 jour",
      category: "Manga"
    }
  ];

  const latestTopics = [
    {
      id: "1",
      title: "Vos prédictions pour la fin de Attack on Titan ?",
      author: "ErenJaeger",
      replies: 47,
      views: 892,
      lastActivity: "Il y a 30 min",
      category: "Anime",
      isHot: true
    },
    {
      id: "2", 
      title: "Meilleur jeu de combat anime 2024 ?",
      author: "FightingOtaku",
      replies: 23,
      views: 456,
      lastActivity: "Il y a 1 heure",
      category: "Gaming"
    },
    {
      id: "3",
      title: "Aide pour mon cosplay de Nezuko",
      author: "DemonSlayerFan",
      replies: 15,
      views: 234,
      lastActivity: "Il y a 2 heures", 
      category: "Cosplay"
    }
  ];

  const topMembers = [
    {
      id: "1",
      username: "SakuraAdmin",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
      rank: "Hokage",
      rankEmoji: "🔥",
      points: 15420,
      position: 1
    },
    {
      id: "2",
      username: "AnimeLord",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100", 
      rank: "Super Saiyan",
      rankEmoji: "⚡",
      points: 12890,
      position: 2
    },
    {
      id: "3",
      username: "MangaQueen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100",
      rank: "Kawaii Master", 
      rankEmoji: "🌸",
      points: 11234,
      position: 3
    },
    {
      id: "4",
      username: "CosplayNinja",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      rank: "Otaku Master",
      rankEmoji: "🎭", 
      points: 9876,
      position: 4
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-orbitron font-black mb-4 text-neon-pink animate-pulse-neon">
            ⚡ OTAKU FORUM
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La communauté ultime pour les passionnés d'anime, manga et culture japonaise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="neon" size="lg" className="text-lg px-8">
              Rejoindre la communauté
            </Button>
            <Button variant="neon-outline" size="lg" className="text-lg px-8">
              Explorer le forum
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Latest Articles */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-orbitron font-bold text-neon-blue flex items-center gap-2">
                  <TrendingUp className="glow-blue" />
                  Derniers Articles
                </h2>
                <Button variant="cyber" size="sm">
                  Voir tous
                </Button>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {latestArticles.map((article) => (
                  <ArticleCard key={article.id} {...article} />
                ))}
              </div>
            </section>

            {/* Latest Forum Topics */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-orbitron font-bold text-neon-yellow flex items-center gap-2">
                  <MessageSquare className="glow-yellow" />
                  Topics Récents du Forum
                </h2>
                <Button variant="cyber" size="sm">
                  Voir le forum
                </Button>
              </div>
              <div className="space-y-4">
                {latestTopics.map((topic) => (
                  <ForumTopicCard key={topic.id} {...topic} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-orbitron font-bold text-neon-purple mb-6 flex items-center gap-2">
                <Users className="glow-purple" />
                Top Membres
              </h3>
              <div className="space-y-3">
                {topMembers.map((member) => (
                  <MemberCard key={member.id} {...member} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
