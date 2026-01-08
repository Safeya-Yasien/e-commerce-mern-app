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
  return (
    <div className="mb-14 max-w-7xl mx-auto flex justify-center gap-6 flex-wrap">
      <button
        onClick={() => onChange(null)}
        className={`btn rounded-lg ${
          active === null
            ? "bg-primary-light text-base-light"
            : "bg-primary-dark text-base-light"
        }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`btn rounded-lg ${
            active === category
              ? "bg-primary-light text-base-light"
              : "bg-primary-dark text-base-light"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoriesFilter;
