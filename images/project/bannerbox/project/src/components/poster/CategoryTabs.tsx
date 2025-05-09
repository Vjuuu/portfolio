import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../data/posters';

interface CategoryTabsProps {
  activeCategory: string;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory }) => {
  const navigate = useNavigate();

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === 'all') {
      navigate('/categories');
    } else {
      navigate(`/categories/${categoryId}`);
    }
  };

  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex space-x-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;