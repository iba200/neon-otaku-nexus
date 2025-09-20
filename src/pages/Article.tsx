import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { Calendar, User, Heart, Share2, MessageCircle } from "lucide-react";

const Article = () => {
  const { id } = useParams();

  // Mock article data
  const article = {
    id: id || "1",
    title: "Les meilleurs anime de la saison automne 2024",
    content: `
      <p>La saison d'automne 2024 nous réserve de véritables pépites dans le monde de l'animation japonaise. Après une saison d'été riche en émotions, les studios d'animation nous préparent des œuvres qui promettent de marquer l'histoire de l'anime.</p>
      
      <h3 class="text-neon-yellow font-orbitron font-bold text-xl my-6">1. Demon Slayer: Infinity Castle Arc</h3>
      <p>L'arc tant attendu de Demon Slayer arrive enfin ! Cette adaptation promet des combats époustouflants et une animation de qualité cinématographique. Studio Ufotable a encore repoussé les limites de l'animation 2D.</p>
      
      <blockquote class="border-l-4 border-neon-pink bg-card/50 p-4 my-6 italic">
      "L'animation de Ufotable transcende l'art traditionnel pour créer une expérience visuelle inégalée." - Critique Animation Weekly
      </blockquote>
      
      <h3 class="text-neon-yellow font-orbitron font-bold text-xl my-6">2. Chainsaw Man Saison 2</h3>
      <p>Après le succès retentissant de la première saison, Studio MAPPA revient avec la suite des aventures de Denji. Les fans attendent avec impatience de découvrir l'arc de l'École et ses nouveaux personnages charismatiques.</p>
      
      <h3 class="text-neon-yellow font-orbitron font-bold text-xl my-6">3. Jujutsu Kaisen Saison 3</h3>
      <p>L'arc Culling Game prend vie dans cette nouvelle saison qui promet d'être la plus intense de la série. Les enjeux n'ont jamais été aussi élevés pour Yuji et ses compagnons.</p>
      
      <p>Cette saison d'automne confirme que l'industrie de l'anime continue de repousser ses limites créatives et techniques. Chaque œuvre apporte sa propre vision artistique tout en respectant l'essence du manga original.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    author: "SakuraAdmin",
    date: "15 novembre 2024",
    category: "Anime",
    likes: 156,
    shares: 23,
    readTime: "5 min"
  };

  const comments = [
    {
      id: "1",
      author: "AnimeVetran",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50",
      content: "Excellent article ! J'ai hâte de voir le nouvel arc de Demon Slayer. Ufotable nous gâte vraiment.",
      date: "Il y a 2 heures",
      likes: 12
    },
    {
      id: "2", 
      author: "MangaReader99",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=50",
      content: "Chainsaw Man saison 2 va être epic ! Le manga devient de plus en plus intense.",
      date: "Il y a 4 heures",
      likes: 8
    },
    {
      id: "3",
      author: "JJKFan",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50", 
      content: "Enfin l'arc Culling Game animé ! Vivement les combats avec Hakari et Kashimo.",
      date: "Il y a 6 heures",
      likes: 15
    }
  ];

  return (
    <MainLayout>
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Image */}
        <div className="aspect-video relative overflow-hidden rounded-2xl mb-8 glow-blue">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="bg-neon-pink/90 text-white px-4 py-2 rounded-full text-sm font-semibold glow-pink">
              {article.category}
            </span>
          </div>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-orbitron font-bold text-neon-blue mb-6 glow-blue leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center space-x-2">
              <User size={18} />
              <span>Par {article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>{article.date}</span>
            </div>
            <div className="text-sm">
              📖 {article.readTime} de lecture
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button variant="neon" className="flex items-center space-x-2">
              <Heart size={18} />
              <span>{article.likes}</span>
            </Button>
            <Button variant="neon-outline" className="flex items-center space-x-2">
              <Share2 size={18} />
              <span>{article.shares}</span>
            </Button>
            <Button variant="cyber" className="flex items-center space-x-2">
              <MessageCircle size={18} />
              <span>Commenter</span>
            </Button>
          </div>
        </header>

        {/* Article Content */}
        <div className="glass-card rounded-xl p-8 mb-8">
          <div 
            className="prose prose-lg max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Comments Section */}
        <section className="glass-card rounded-xl p-8">
          <h3 className="text-2xl font-orbitron font-bold text-neon-yellow mb-6 flex items-center gap-2">
            <MessageCircle className="glow-yellow" />
            Commentaires ({comments.length})
          </h3>

          {/* Add Comment */}
          <div className="mb-8">
            <textarea
              placeholder="Ajouter un commentaire..."
              className="w-full p-4 bg-input rounded-lg border border-border/20 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 text-foreground resize-none"
              rows={4}
            />
            <div className="flex justify-end mt-4">
              <Button variant="neon">
                Publier le commentaire
              </Button>
            </div>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="flex space-x-4">
                <img 
                  src={comment.avatar} 
                  alt={comment.author}
                  className="w-10 h-10 rounded-full border-2 border-neon-blue glow-blue"
                />
                <div className="flex-1 bg-card/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-neon-blue">{comment.author}</h4>
                    <span className="text-sm text-muted-foreground">{comment.date}</span>
                  </div>
                  <p className="text-foreground mb-3">{comment.content}</p>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-neon-pink transition-colors">
                      <Heart size={14} />
                      <span>{comment.likes}</span>
                    </button>
                    <button className="text-sm text-muted-foreground hover:text-neon-blue transition-colors">
                      Répondre
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </MainLayout>
  );
};

export default Article;