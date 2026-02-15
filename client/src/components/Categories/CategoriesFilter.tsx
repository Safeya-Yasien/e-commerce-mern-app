import React from "react";

interface CategoriesFilterProps {
  categories: string[];
  active: string | null;
  onChange: (category: string | null) => void;
}

const CategoriesFilter = ({
  categories,
  active,
  onChange,
}: CategoriesFilterProps) => {
  const getButtonClasses = (isActive: boolean) =>
    `btn btn-sm md:btn-md rounded-full px-6 transition-all ${
      isActive
        ? "btn-primary shadow-lg scale-105"
        : "btn-ghost bg-base-200 hover:bg-base-300 border-none"
    }`;

  return (
    <div className="mb-14 max-w-7xl mx-auto flex justify-center gap-3 md:gap-4 flex-wrap">
      <button
        onClick={() => onChange(null)}
        className={getButtonClasses(active === null)}
      >
        All Products
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={getButtonClasses(active === category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
export default React.memo(CategoriesFilter);
