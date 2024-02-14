import type { FC } from 'react';
import { useState } from 'react';
import { IonSearchbar } from '@ionic/react';

interface SearchBarProps {
  onSearchProp: (search: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearchProp }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event: any) => {
    const text: string = event.target.value || '';
    setSearchText(text);
    onSearchProp(text);
  };

  return <IonSearchbar value={searchText} onIonChange={handleSearch} placeholder="Search by location" />;
};

export default SearchBar;
