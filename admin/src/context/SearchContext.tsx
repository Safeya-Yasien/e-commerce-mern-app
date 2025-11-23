import { createContext, useState } from "react";

interface ISearchContextType {
  search: string;
  shouldSearch: boolean;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setShouldSearch: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchContextState = {
  search: "",
  shouldSearch: false,
  setSearchTerm: () => {},
  setShouldSearch: () => {},
  handleChange: () => {},
  handleSubmit: () => {},
};

const SearchContext = createContext<ISearchContextType>(SearchContextState);

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [shouldSearch, setShouldSearch] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm.trim().length) return;
    setShouldSearch(true);
  };

  return (
    <SearchContext.Provider
      value={{
        search: searchTerm,
        setSearchTerm,
        handleChange,
        handleSubmit,
        shouldSearch,
        setShouldSearch: () => {},
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
