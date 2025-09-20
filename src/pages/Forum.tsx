import { MainLayout } from "@/components/layout/main-layout";
import { ForumTopicCard } from "@/components/ui/forum-topic-card";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter } from "lucide-react";
import { useState } from "react";

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  
  const categories = [
    { name: "Tous", icon: "🌟", color: "text-neon-pink" },
    { name: "Anime", icon: "📺", color: "text-neon-blue" },
    { name: "Manga", icon: "📚", color: "text-neon-yellow" },
    { name: "Gaming", icon: "🎮", color: "text-neon-purple" },
    { name: "Cosplay", icon: "🎭", color: "text-neon-cyan" }
  ];
  
  const topics = [
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
    },
    {
      id: "4",
      title: "Quel manga lisez-vous en ce moment ?",
      author: "MangaAddict",
      replies: 89,
      views: 1234,
      lastActivity: "Il y a 3 heures",
      category: "Manga",
      isHot: true
    },
    {
      id: "5",
      title: "Discussion One Piece chapitre 1095",
      author: "PirateKing",
      replies: 156,
      views: 2341,
      lastActivity: "Il y a 4 heures",
      category: "Manga",
      isHot: true
    },
    {
      id: "6",
      title: "Conseils pour commencer le cosplay",
      author: "CosplayNewbie",
      replies: 34,
      views: 567,
      lastActivity: "Il y a 5 heures",
      category: "Cosplay"
    }
  ];

  const filteredTopics = selectedCategory === "Tous" 
    ? topics 
    : topics.filter(topic => topic.category === selectedCategory);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-orbitron font-bold text-neon-yellow mb-4 glow-yellow">
            🎌 Forum Communauté
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rejoignez les discussions passionnées de la communauté otaku
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`glass-card rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover-glow-pink ${
                selectedCategory === category.name ? "glow-pink border-neon-pink border-2" : ""
              }`}
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <h3 className={`font-orbitron font-bold ${category.color}`}>
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {topics.filter(t => category.name === "Tous" || t.category === category.name).length} topics
              </p>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="glass-card rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher dans les discussions..."
                className="w-full pl-10 pr-4 py-2 bg-input rounded-lg border border-border/20 focus:border-neon-yellow focus:outline-none focus:ring-2 focus:ring-neon-yellow/20 text-foreground"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Filter size={16} />
                Filtrer
              </Button>
              <Button variant="neon" size="sm" className="flex items-center gap-2 glow-pink">
                <Plus size={16} />
                Nouveau Topic
              </Button>
            </div>
          </div>
        </div>

        {/* Topics List */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-orbitron font-bold text-foreground">
              {selectedCategory === "Tous" ? "Toutes les discussions" : `Catégorie: ${selectedCategory}`}
            </h2>
            <div className="text-sm text-muted-foreground">
              {filteredTopics.length} discussion{filteredTopics.length > 1 ? "s" : ""}
            </div>
          </div>
          
          {filteredTopics.map((topic) => (
            <ForumTopicCard key={topic.id} {...topic} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4">
          <Button variant="ghost" disabled>
            Précédent
          </Button>
          <div className="flex space-x-2">
            <Button variant="neon" size="sm">1</Button>
            <Button variant="ghost" size="sm">2</Button>
            <Button variant="ghost" size="sm">3</Button>
          </div>
          <Button variant="ghost">
            Suivant
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Forum;