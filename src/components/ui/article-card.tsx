import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";

interface ArticleCardProps {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  author: string;
  date: string;
  category: string;
}

export const ArticleCard = ({ id, title, summary, imageUrl, author, date, category }: ArticleCardProps) => {
  return (
    <Link to={`/article/${id}`} className="block group">
      <div className="glass-card rounded-xl overflow-hidden hover-glow-pink transition-all duration-300 group-hover:scale-105">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-neon-pink/90 text-white px-3 py-1 rounded-full text-xs font-semibold glow-pink">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-orbitron font-bold text-xl mb-3 text-neon-blue group-hover:text-neon-pink transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
            {summary}
          </p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <User size={14} />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};