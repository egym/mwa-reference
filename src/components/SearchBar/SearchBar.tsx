import { useState } from 'react';
import { IonSearchbar } from '@ionic/react';

interface Search {
  onSearch: (search: string) => void;
}

const SearchBar = ({ onSearch }: Search) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event: any) => {
    const text: string = event.target.value || '';
    setSearchText(text);
    onSearch(text);
  };

  return <IonSearchbar value={searchText} onIonChange={handleSearch} placeholder="Search by location" />;
};

export default SearchBar;
