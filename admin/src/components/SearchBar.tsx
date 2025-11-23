import { useSearch } from "@/context/useSearchContext";

const SearchBar = () => {
  const { search, handleChange, handleSubmit } = useSearch();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20"
    >
      <input
        onChange={handleChange}
        value={search}
        type="text"
        placeholder="Search..."
        className="px-4 py-2 w-64 bg-transparent text-white placeholder-gray-300 focus:outline-none"
      />
      <button
        type="submit"
        className="cursor-pointer bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-2 text-white font-medium"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
