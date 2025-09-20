import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { Eye, MessageCircle, Heart, Share2, Clock } from "lucide-react";

const Topic = () => {
  const { id } = useParams();

  // Mock topic data
  const topic = {
    id: id || "1",
    title: "Vos prédictions pour la fin de Attack on Titan ?",
    author: "ErenJaeger",
    createdAt: "Il y a 2 jours",
    views: 892,
    replies: 47,
    category: "Anime",
    isHot: true
  };

  const messages = [
    {
      id: "1",
      author: "ErenJaeger",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80",
      content: "Salut tout le monde ! Avec les derniers chapitres qui arrivent, qu'est-ce que vous pensez qu'il va se passer ? Moi je pense qu'Eren va...",
      date: "Il y a 2 jours",
      likes: 23,
      isOriginalPoster: true,
      rank: "Titan Shifter",
      rankEmoji: "⚡"
    },
    {
      id: "2",
      author: "MikasaAckerman",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=80",
      content: "Je pense que l'histoire va se terminer de manière tragique... Isayama nous a habitués aux fins sombres. Eren va sûrement sacrifier quelque chose d'important.",
      date: "Il y a 2 jours",
      likes: 18,
      isOriginalPoster: false,
      rank: "Scout Regiment",
      rankEmoji: "🗡️"
    },
    {
      id: "3",
      author: "ArminAlert",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80",
      content: "Moi j'espère qu'on aura enfin les réponses sur le basement d'Eren ! Et puis j'aimerais voir plus de développement sur le Titan Colossal.",
      date: "Il y a 1 jour",
      likes: 12,
      isOriginalPoster: false,
      rank: "Strategic Mind",
      rankEmoji: "🧠"
    },
    {
      id: "4",
      author: "LeviCaptain",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80",
      content: "Peu importe ce qui arrive, j'espère que les personnages qu'on aime vont survivre. Déjà qu'on en a perdu beaucoup... 😢",
      date: "Il y a 1 jour",
      likes: 31,
      isOriginalPoster: false,
      rank: "Humanity's Strongest",
      rankEmoji: "💪"
    },
    {
      id: "5",
      author: "HistoriaReiss",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80",
      content: "D'après les indices dans les derniers chapitres, je pense qu'on va avoir une révélation majeure sur les origines des Titans. Hâte de voir !",
      date: "Il y a 12 heures",
      likes: 15,
      isOriginalPoster: false,
      rank: "True Queen",
      rankEmoji: "👑"
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Topic Header */}
        <div className="glass-card rounded-xl p-6 mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-sm font-medium">
                  {topic.category}
                </span>
                {topic.isHot && (
                  <span className="bg-neon-pink/20 text-neon-pink px-3 py-1 rounded-full text-sm font-bold animate-pulse-neon">
                    🔥 HOT
                  </span>
                )}
              </div>
              
              <h1 className="text-2xl md:text-3xl font-orbitron font-bold text-neon-blue mb-3 glow-blue">
                {topic.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <span>Créé par <span className="text-neon-pink font-semibold">{topic.author}</span></span>
                <div className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>{topic.createdAt}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-1 text-neon-yellow">
                <Eye size={16} />
                <span className="font-semibold">{topic.views}</span>
                <span>vues</span>
              </div>
              <div className="flex items-center space-x-1 text-neon-pink">
                <MessageCircle size={16} />
                <span className="font-semibold">{topic.replies}</span>
                <span>réponses</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="neon-outline" size="sm" className="flex items-center space-x-1">
                <Heart size={14} />
                <span>Suivre</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <Share2 size={14} />
                <span>Partager</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-6 mb-8">
          {messages.map((message, index) => (
            <div key={message.id} className="glass-card rounded-xl p-6">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src={message.avatar} 
                    alt={message.author}
                    className="w-12 h-12 rounded-full border-2 border-neon-blue glow-blue"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <h3 className="font-semibold text-neon-blue">{message.author}</h3>
                      {message.isOriginalPoster && (
                        <span className="bg-neon-pink/20 text-neon-pink px-2 py-1 rounded text-xs font-bold">
                          OP
                        </span>
                      )}
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <span>{message.rankEmoji}</span>
                        <span>{message.rank}</span>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{message.date}</span>
                  </div>
                  
                  <p className="text-foreground leading-relaxed mb-4">
                    {message.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-neon-pink transition-colors">
                        <Heart size={14} />
                        <span>{message.likes}</span>
                      </button>
                      <button className="text-sm text-muted-foreground hover:text-neon-blue transition-colors">
                        Répondre
                      </button>
                      <button className="text-sm text-muted-foreground hover:text-neon-yellow transition-colors">
                        Citer
                      </button>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      #{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reply Form */}
        <div className="glass-card rounded-xl p-6">
          <h3 className="text-xl font-orbitron font-bold text-neon-yellow mb-4">
            💬 Répondre au topic
          </h3>
          
          <div className="space-y-4">
            <textarea
              placeholder="Écrivez votre réponse..."
              className="w-full p-4 bg-input rounded-lg border border-border/20 focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 text-foreground resize-none"
              rows={6}
            />
            
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">
                  📎 Fichier
                </Button>
                <Button variant="ghost" size="sm">
                  😊 Emoji
                </Button>
              </div>
              
              <Button variant="neon" className="glow-pink">
                Publier la réponse
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Topic;