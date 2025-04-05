
import React from 'react';
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (id: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          className={cn(
            "flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:shadow-md w-32",
            selectedCategory === category.id 
              ? "bg-primary/10 border-2 border-primary" 
              : "bg-white border border-gray-200"
          )}
          onClick={() => onSelectCategory(category.id)}
        >
          <div className={`p-3 rounded-full ${category.color} mb-2`}>
            {category.icon}
          </div>
          <span className="font-medium text-sm">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
