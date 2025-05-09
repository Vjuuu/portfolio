import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import Card from '../ui/Card';
import { Poster } from '../../types';

interface PosterCardProps {
  poster: Poster;
}

const PosterCard: React.FC<PosterCardProps> = ({ poster }) => {
  const navigate = useNavigate();

  return (
    <Card className="group transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1">
      <div 
        className="relative cursor-pointer" 
        onClick={() => navigate(`/poster/${poster.id}`)}
      >
        <div className="aspect-[3/4] overflow-hidden">
          <img 
            src={poster.imageUrl} 
            alt={poster.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {poster.isPremium && (
          <div className="absolute top-2 right-2 bg-amber-500 text-white rounded-full p-1">
            <Lock size={16} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end">
          <div className="p-4 w-full">
            <span className="inline-block px-2 py-1 text-xs bg-blue-600 text-white rounded mb-2">
              {poster.category.charAt(0).toUpperCase() + poster.category.slice(1)}
            </span>
            <h3 className="text-white font-semibold">{poster.title}</h3>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PosterCard;