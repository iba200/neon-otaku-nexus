import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/ui/article-card";
import { ForumTopicCard } from "@/components/ui/forum-topic-card";
import { Edit, Star, MessageCircle, FileText, Trophy, Calendar } from "lucide-react";
import { useParams } from "react-router-dom";

const Profil = () => {
  const { id } = useParams();

  // Mock user data
  const user = {
    id: id || "1",
    username: "SakuraAdmin",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
    coverImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    bio: "Passionné d'anime depuis plus de 10 ans, administrateur de la communauté et grand fan de Demon Slayer. Toujours prêt à discuter des dernières sorties !",
    rank: "Hokage",
    rankEmoji: "🔥",
    points: 15420,
    joinDate: "Janvier 2020",
    stats: {
      articles: 89,
      topics: 234,
      likes: 2341,
      followers: 1567
    }
  };

  const userArticles = [
    {
      id: "1",
      title: "Les meilleurs anime de la saison automne 2024",
      summary: "Découvrez notre sélection des anime les plus prometteurs de cette nouvelle saison...",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      author: user.username,
      date: "Il y a 2 heures",
      category: "Anime"
    },
    {
      id: "2",
      title: "Guide complet du cosplay débutant",
      summary: "Tout ce que vous devez savoir pour commencer dans le cosplay...",
      imageUrl: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=400",
      author: user.username,
      date: "Il y a 1 semaine",
      category: "Cosplay"
    }
  ];

  const userTopics = [
    {
      id: "1",
      title: "Discussion sur les nouveautés anime de cette saison",
      author: user.username,
      replies: 47,
      views: 892,
      lastActivity: "Il y a 1 heure",
      category: "Anime",
      isHot: true
    },
    {
      id: "2",
      title: "Conseils pour débuter dans l'administration communautaire",
      author: user.username,
      replies: 23,
      views: 456,
      lastActivity: "Il y a 3 heures",
      category: "Communauté"
    }
  ];

  const achievements = [
    { name: "Premier Article", icon: "📝", description: "A publié son premier article" },
    { name: "Contributeur Actif", icon: "⭐", description: "100+ messages sur le forum" },
    { name: "Mentor", icon: "🎓", description: "A aidé 50+ nouveaux membres" },
    { name: "Expert Anime", icon: "📺", description: "Spécialiste reconnu en anime" },
    { name: "Légende", icon: "👑", description: "Plus de 15000 points" },
    { name: "Administrateur", icon: "🛡️", description: "Membre de l'équipe" }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Profile Header */}
        <div className="glass-card rounded-xl overflow-hidden mb-8">
          {/* Cover Image */}
          <div className="h-48 relative">
            <img
              src={user.coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          </div>

          {/* Profile Info */}
          <div className="p-6 relative">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-16 md:-mt-20">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-neon-blue glow-blue bg-card relative z-10"
              />
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-orbitron font-bold text-neon-blue mb-2">
                      {user.username}
                    </h1>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-2xl">{user.rankEmoji}</span>
                      <span className="text-neon-pink font-semibold text-lg">{user.rank}</span>
                      <span className="text-neon-yellow font-bold">{user.points.toLocaleString()} pts</span>
                    </div>
                    <p className="text-muted-foreground max-w-2xl">
                      {user.bio}
                    </p>
                  </div>
                  
                  <Button variant="neon-outline" className="flex items-center space-x-2">
                    <Edit size={16} />
                    <span>Modifier le profil</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-pink">{user.stats.articles}</div>
                <div className="text-sm text-muted-foreground">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-blue">{user.stats.topics}</div>
                <div className="text-sm text-muted-foreground">Topics</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-yellow">{user.stats.likes}</div>
                <div className="text-sm text-muted-foreground">Likes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-purple">{user.stats.followers}</div>
                <div className="text-sm text-muted-foreground">Abonnés</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* User Articles */}
            <section>
              <h2 className="text-2xl font-orbitron font-bold text-neon-pink mb-6 flex items-center gap-2">
                <FileText className="glow-pink" />
                Articles Récents
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {userArticles.map((article) => (
                  <ArticleCard key={article.id} {...article} />
                ))}
              </div>
            </section>

            {/* User Topics */}
            <section>
              <h2 className="text-2xl font-orbitron font-bold text-neon-blue mb-6 flex items-center gap-2">
                <MessageCircle className="glow-blue" />
                Topics Récents
              </h2>
              <div className="space-y-4">
                {userTopics.map((topic) => (
                  <ForumTopicCard key={topic.id} {...topic} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* User Info */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-orbitron font-bold text-neon-yellow mb-4 flex items-center gap-2">
                <Calendar className="glow-yellow" />
                Informations
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Membre depuis:</span>
                  <span className="text-foreground">{user.joinDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rang:</span>
                  <span className="text-neon-pink">{user.rank}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Points totaux:</span>
                  <span className="text-neon-yellow font-bold">{user.points.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-orbitron font-bold text-neon-purple mb-4 flex items-center gap-2">
                <Trophy className="glow-purple" />
                Succès
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.name}
                    className="bg-card/30 rounded-lg p-3 text-center hover-glow-purple transition-all duration-300"
                  >
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className="text-xs font-semibold text-foreground">{achievement.name}</div>
                    <div className="text-xs text-muted-foreground">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-orbitron font-bold text-neon-cyan mb-4 flex items-center gap-2">
                <Star className="glow-cyan" />
                Activité Récente
              </h3>
              <div className="space-y-3 text-sm">
                <div className="border-l-2 border-neon-pink pl-3">
                  <div className="text-foreground">A publié un nouvel article</div>
                  <div className="text-muted-foreground">Il y a 2 heures</div>
                </div>
                <div className="border-l-2 border-neon-blue pl-3">
                  <div className="text-foreground">A répondu à un topic</div>
                  <div className="text-muted-foreground">Il y a 4 heures</div>
                </div>
                <div className="border-l-2 border-neon-yellow pl-3">
                  <div className="text-foreground">A reçu 15 nouveaux likes</div>
                  <div className="text-muted-foreground">Il y a 1 jour</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profil;