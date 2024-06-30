import React from 'react';

interface SearchInputProps {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Pesquisar por nome, cargo ou telefone"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchInput;
