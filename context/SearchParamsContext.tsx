"use client";
import React, { createContext, useContext, useState } from "react";

type SearchParamsContextType = {
  role: string;
  level: string;
  tool: string;
  language: string;
  searchQuery: string;
  setRole: (role: string) => void;
  setLevel: (level: string) => void;
  setTool: (tools: string) => void;
  setLanguage: (languages: string) => void;
  setSearchQuery: (searchQuery: string) => void;
};

const SearchParamsContext = createContext<SearchParamsContextType>(
  {} as SearchParamsContextType,
);

export const useSearchParamsContext = () => useContext(SearchParamsContext);

interface SearchParamsProviderProps {
  children: React.ReactNode;
}

export const SearchParamsProvider: React.FC<SearchParamsProviderProps> = ({
  children,
}) => {
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [tool, setTool] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

  console.log("renderizado");

  return (
    <SearchParamsContext.Provider
      value={{
        role,
        level,
        tool,
        language,
        searchQuery,
        setRole,
        setLevel,
        setTool,
        setLanguage,
        setSearchQuery,
      }}
    >
      {children}
    </SearchParamsContext.Provider>
  );
};
