import { MemberCard } from "@/components/ui/member-card";
import { Trophy, Medal, Award, Star } from "lucide-react";

const Classement = () => {
  const topMembers = [
    {
      id: "1",
      username: "SakuraAdmin",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
      rank: "Hokage",
      rankEmoji: "🔥",
      points: 15420,
      position: 1,
      articles: 89,
      topics: 234,
      likes: 2341
    },
    {
      id: "2",
      username: "AnimeLord",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100",
      rank: "Super Saiyan",
      rankEmoji: "⚡",
      points: 12890,
      position: 2,
      articles: 67,
      topics: 189,
      likes: 1876
    },
    {
      id: "3",
      username: "MangaQueen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100",
      rank: "Kawaii Master",
      rankEmoji: "🌸",
      points: 11234,
      position: 3,
      articles: 45,
      topics: 156,
      likes: 1654
    },
    {
      id: "4",
      username: "CosplayNinja",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      rank: "Otaku Master",
      rankEmoji: "🎭",
      points: 9876,
      position: 4,
      articles: 34,
      topics: 123,
      likes: 1234
    },
    {
      id: "5",
      username: "DragonSlayer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      rank: "Elite Warrior",
      rankEmoji: "⚔️",
      points: 8765,
      position: 5,
      articles: 28,
      topics: 98,
      likes: 987
    },
    {
      id: "6",
      username: "TokyoGamer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      rank: "Pixel Master",
      rankEmoji: "🎮",
      points: 7654,
      position: 6,
      articles: 23,
      topics: 87,
      likes: 876
    },
    {
      id: "7",
      username: "SenpaiNoticed",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      rank: "Senpai Level",
      rankEmoji: "🎌",
      points: 6543,
      position: 7,
      articles: 19,
      topics: 76,
      likes: 765
    },
    {
      id: "8",
      username: "WaifuProtector",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
      rank: "Guardian",
      rankEmoji: "🛡️",
      points: 5432,
      position: 8,
      articles: 15,
      topics: 65,
      likes: 654
    }
  ];

  const rankCategories = [
    {
      name: "🔥 Hokage",
      description: "Maîtres absolus de la communauté",
      color: "text-neon-pink",
      minPoints: 15000,
      members: 1
    },
    {
      name: "⚡ Super Saiyan",
      description: "Guerriers légendaires du forum",
      color: "text-neon-yellow",
      minPoints: 10000,
      members: 3
    },
    {
      name: "🌸 Kawaii Master",
      description: "Experts en culture mignonne",
      color: "text-neon-blue",
      minPoints: 7500,
      members: 8
    },
    {
      name: "🎭 Otaku Master",
      description: "Passionnés confirmés",
      color: "text-neon-purple",
      minPoints: 5000,
      members: 15
    },
    {
      name: "⚔️ Elite Warrior",
      description: "Combattants expérimentés",
      color: "text-neon-cyan",
      minPoints: 2500,
      members: 32
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-orbitron font-bold text-neon-yellow mb-4 glow-yellow">
            🏆 Classement des Membres
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les légendes de notre communauté otaku
          </p>
        </div>

        {/* Rank Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {rankCategories.map((category) => (
            <div key={category.name} className="glass-card rounded-xl p-6 text-center hover-glow-purple">
              <h3 className={`text-xl font-orbitron font-bold mb-2 ${category.color}`}>
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {category.description}
              </p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  {category.minPoints.toLocaleString()}+ pts
                </span>
                <span className="bg-neon-blue/20 text-neon-blue px-2 py-1 rounded">
                  {category.members} membre{category.members > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {topMembers.slice(0, 3).map((member, index) => {
            const podiumIcons = [
              { icon: Trophy, color: "text-neon-yellow", glow: "glow-yellow" },
              { icon: Medal, color: "text-muted-foreground", glow: "glow-blue" },
              { icon: Award, color: "text-amber-600", glow: "glow-purple" }
            ];
            const PodiumIcon = podiumIcons[index].icon;

            return (
              <div
                key={member.id}
                className={`glass-card rounded-xl p-6 text-center hover-glow-pink ${
                  index === 0 ? "transform scale-105 border-2 border-neon-yellow" : ""
                }`}
              >
                <div className={`text-4xl mb-4 ${podiumIcons[index].glow}`}>
                  <PodiumIcon className={`mx-auto ${podiumIcons[index].color}`} size={48} />
                </div>
                <img
                  src={member.avatar}
                  alt={member.username}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-neon-blue glow-blue"
                />
                <h3 className="text-xl font-orbitron font-bold text-neon-blue mb-2">
                  {member.username}
                </h3>
                <div className={`flex items-center justify-center space-x-1 mb-3 ${
                  member.rank === "Hokage" ? "text-neon-pink" :
                  member.rank === "Super Saiyan" ? "text-neon-yellow" : "text-neon-blue"
                }`}>
                  <span className="text-2xl">{member.rankEmoji}</span>
                  <span className="font-semibold">{member.rank}</span>
                </div>
                <div className="text-2xl font-bold text-neon-yellow mb-4">
                  {member.points.toLocaleString()} pts
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <div className="text-neon-pink font-semibold">{member.articles}</div>
                    <div className="text-muted-foreground">Articles</div>
                  </div>
                  <div>
                    <div className="text-neon-blue font-semibold">{member.topics}</div>
                    <div className="text-muted-foreground">Topics</div>
                  </div>
                  <div>
                    <div className="text-neon-yellow font-semibold">{member.likes}</div>
                    <div className="text-muted-foreground">Likes</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Ranking */}
        <div className="glass-card rounded-xl p-6">
          <h2 className="text-2xl font-orbitron font-bold text-neon-purple mb-6 flex items-center gap-2">
            <Star className="glow-purple" />
            Classement Complet
          </h2>
          
          <div className="space-y-4">
            {topMembers.map((member) => (
              <div
                key={member.id}
                className="bg-card/30 rounded-lg p-4 hover-glow-blue transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold text-neon-yellow min-w-[3rem]">
                      #{member.position}
                    </div>
                    <img
                      src={member.avatar}
                      alt={member.username}
                      className="w-12 h-12 rounded-full border-2 border-neon-blue"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{member.username}</h3>
                      <div className="flex items-center space-x-1 text-sm">
                        <span>{member.rankEmoji}</span>
                        <span className="text-muted-foreground">{member.rank}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="text-center">
                      <div className="text-neon-yellow font-bold">{member.points.toLocaleString()}</div>
                      <div className="text-muted-foreground">Points</div>
                    </div>
                    <div className="text-center">
                      <div className="text-neon-pink font-semibold">{member.articles}</div>
                      <div className="text-muted-foreground">Articles</div>
                    </div>
                    <div className="text-center">
                      <div className="text-neon-blue font-semibold">{member.topics}</div>
                      <div className="text-muted-foreground">Topics</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Classement;