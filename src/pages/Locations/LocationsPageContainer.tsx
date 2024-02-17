import type { FC } from 'react';
import useLocationList from './hooks/useLocationList';
import LocationsPage from './LocationsPage';

const LocationsPageContainer: FC = () => {
  const result = useLocationList();

  return <LocationsPage {...result} />;
};

export default LocationsPageContainer;
