import React from 'react';
import { useParams } from 'react-router-dom';
import PosterGrid from '../components/poster/PosterGrid';
import CategoryTabs from '../components/poster/CategoryTabs';
import { posters } from '../data/posters';
import { PosterCategory } from '../types';

const CategoriesPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const activeCategory = category || 'all';
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Browse Poster Templates
      </h1>
      
      <div className="mb-8">
        <CategoryTabs activeCategory={activeCategory} />
      </div>
      
      <PosterGrid 
        posters={posters}  
        category={activeCategory as PosterCategory | 'all'} 
      />
    </div>
  );
};

export default CategoriesPage;