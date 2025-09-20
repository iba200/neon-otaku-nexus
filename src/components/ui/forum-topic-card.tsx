import { Link } from "react-router-dom";
import { MessageCircle, Eye, Clock } from "lucide-react";

interface ForumTopicCardProps {
  id: string;
  title: string;
  author: string;
  replies: number;
  views: number;
  lastActivity: string;
  category: string;
  isHot?: boolean;
}

export const ForumTopicCard = ({ 
  id, 
  title, 
  author, 
  replies, 
  views, 
  lastActivity, 
  category,
  isHot = false 
}: ForumTopicCardProps) => {
  return (
    <Link to={`/topic/${id}`} className="block group">
      <div className="glass-card rounded-lg p-4 hover-glow-blue transition-all duration-300 border-l-4 border-neon-blue">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-neon-blue/20 text-neon-blue px-2 py-1 rounded text-xs font-medium">
                {category}
              </span>
              {isHot && (
                <span className="bg-neon-pink/20 text-neon-pink px-2 py-1 rounded text-xs font-bold animate-pulse-neon">
                  🔥 HOT
                </span>
              )}
            </div>
            
            <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-neon-blue transition-colors duration-300">
              {title}
            </h3>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Par {author}</span>
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{lastActivity}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-2 ml-4">
            <div className="flex items-center space-x-1 text-neon-yellow">
              <MessageCircle size={16} />
              <span className="font-semibold">{replies}</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Eye size={14} />
              <span className="text-xs">{views}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};