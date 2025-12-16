import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <form className="flex items-center bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20">
      <input
        type="text"
        placeholder="Search..."
        className="hidden sm:flex px-4 py-2 w-64 bg-transparent text-white placeholder-gray-300 focus:outline-none
        "
      />
      <button
        type="submit"
        onClick={(e) => e.preventDefault()}
        className="cursor-pointer bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-2 text-white font-medium"
      >
        <Search className="w-4 h-4 text-white sm:hidden" />
        <span className="hidden sm:flex"> Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
