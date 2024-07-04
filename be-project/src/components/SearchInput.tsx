import React from 'react';
import styles from '../styles/Searchinput.module.css';
import iconeBusca from '../images/iconeBusca.svg'

interface SearchInputProps {
  searchTerm: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchTerm, handleSearch }) => {
  return (
    <div className={styles.searchInput}>
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleSearch}
      />
      <img src={iconeBusca} alt='icone de buscar'/>
    </div>
  );
};

export default SearchInput;
