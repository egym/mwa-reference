import { useState, useEffect } from 'react';
import type { IonSearchbarCustomEvent } from '@ionic/core';
import type { SearchbarChangeEventDetail } from '@ionic/react';
import type { Location } from '../../../types';

const useLocationsPage = (initialLocations: Location[]) => {
  const [locationResult, setLocationResult] = useState<Location[]>(initialLocations);

  useEffect(() => {
    setLocationResult(initialLocations);
  }, [initialLocations]);

  const handleSearch = (event: IonSearchbarCustomEvent<SearchbarChangeEventDetail>) => {
    const searchText: string = event.target.value || '';
    const regex = new RegExp(searchText, 'i');
    const filteredResults: Location[] = initialLocations.filter((location) => regex.test(location.name));
    setLocationResult(filteredResults);
  };

  return { locationResult, handleSearch };
};

export default useLocationsPage;
