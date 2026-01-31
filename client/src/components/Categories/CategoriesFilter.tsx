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
    `btn rounded-lg transition-colors ${
      isActive
        ? "bg-primary text-primary-content border-none"
        : "bg-base-200 dark:bg-base-300 text-base-content hover:bg-primary hover:text-primary-content border-none"
    }`;

  return (
    <div className="mb-14 max-w-7xl mx-auto flex justify-center gap-6 flex-wrap">
      <button
        onClick={() => onChange(null)}
        className={getButtonClasses(active === null)}
      >
        All
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
