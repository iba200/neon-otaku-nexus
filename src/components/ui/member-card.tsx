import { Link } from "react-router-dom";
import { Star } from "lucide-react";

interface MemberCardProps {
  id: string;
  username: string;
  avatar: string;
  rank: string;
  rankEmoji: string;
  points: number;
  position: number;
}

export const MemberCard = ({ id, username, avatar, rank, rankEmoji, points, position }: MemberCardProps) => {
  const getRankColor = (rank: string) => {
    switch (rank) {
      case "Hokage": return "text-neon-pink";
      case "Super Saiyan": return "text-neon-yellow";
      case "Kawaii Master": return "text-neon-blue";
      case "Otaku Master": return "text-neon-purple";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Link to={`/profil/${id}`} className="block group">
      <div className="glass-card rounded-lg p-4 hover-glow-purple transition-all duration-300">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <span className="absolute -top-1 -left-1 text-lg font-bold text-neon-yellow">
              #{position}
            </span>
            <img 
              src={avatar} 
              alt={username}
              className="w-12 h-12 rounded-full border-2 border-neon-blue glow-blue"
            />
          </div>
          
          <div className="flex-1">
            <h4 className="font-semibold text-foreground group-hover:text-neon-blue transition-colors duration-300">
              {username}
            </h4>
            <div className={`flex items-center space-x-1 text-sm ${getRankColor(rank)}`}>
              <span>{rankEmoji}</span>
              <span className="font-medium">{rank}</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <Star size={12} />
              <span>{points.toLocaleString()} pts</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};