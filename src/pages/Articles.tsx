import { MainLayout } from "@/components/layout/main-layout";
import { ArticleCard } from "@/components/ui/article-card";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

const Articles = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  
  const categories = ["Tous", "Anime", "Manga", "Gaming", "Cosplay"];
  
  const articles = [
    {
      id: "1",
      title: "Les meilleurs anime de la saison automne 2024",
      summary: "Découvrez notre sélection des anime les plus prometteurs de cette nouvelle saison avec des analyses détaillées de chaque série.",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      author: "SakuraAdmin",
      date: "Il y a 2 heures",
      category: "Anime"
    },
    {
      id: "2",
      title: "Guide complet du cosplay débutant",
      summary: "Tout ce que vous devez savoir pour commencer dans le cosplay : matériaux, techniques, budgets et conseils d'experts.",
      imageUrl: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=400",
      author: "CosplayKing",
      date: "Il y a 5 heures",
      category: "Cosplay"
    },
    {
      id: "3",
      title: "Top 10 des manga à lire absolument",
      summary: "Notre sélection exclusive des manga incontournables qui ont marqué l'histoire de cet art narratif japonais.",
      imageUrl: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400",
      author: "MangaExpert",
      date: "Il y a 1 jour",
      category: "Manga"
    },
    {
      id: "4",
      title: "Les jeux indés inspirés de l'anime",
      summary: "Exploration des jeux vidéo indépendants qui s'inspirent de l'esthétique et des codes de l'animation japonaise.",
      imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400",
      author: "IndieGamer",
      date: "Il y a 2 jours",
      category: "Gaming"
    },
    {
      id: "5",
      title: "L'évolution du style manga moderne",
      summary: "Comment le style artistique des manga a évolué au fil des décennies, des influences occidentales aux nouvelles techniques.",
      imageUrl: "https://images.unsplash.com/photo-1606114057264-83e6a8c50a69?w=400",
      author: "ArtCritic",
      date: "Il y a 3 jours",
      category: "Manga"
    },
    {
      id: "6",
      title: "Techniques de maquillage pour cosplay",
      summary: "Guide avancé des techniques de maquillage spécialisées pour transformer votre cosplay au niveau supérieur.",
      imageUrl: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=400",
      author: "MakeupMaster",
      date: "Il y a 4 jours",
      category: "Cosplay"
    }
  ];

  const filteredArticles = selectedCategory === "Tous" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-orbitron font-bold text-neon-blue mb-4 glow-blue">
            📰 Articles & Guides
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos articles, guides et analyses sur l'univers otaku
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="glass-card rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full pl-10 pr-4 py-2 bg-input rounded-lg border border-border/20 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 text-foreground"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "neon" : "ghost"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
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

export default Articles;