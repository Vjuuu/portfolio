import React from 'react';
import PosterCard from './PosterCard';
import { Poster, PosterCategory } from '../../types';

interface PosterGridProps {
  posters: Poster[];
  category?: PosterCategory | 'all';
}

const PosterGrid: React.FC<PosterGridProps> = ({ posters, category = 'all' }) => {
  const filteredPosters = category === 'all' 
    ? posters 
    : posters.filter(poster => poster.category === category);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      {filteredPosters.map(poster => (
        <PosterCard key={poster.id} poster={poster} />
      ))}
      {filteredPosters.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500">No posters found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default PosterGrid;