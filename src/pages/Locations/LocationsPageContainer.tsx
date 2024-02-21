import type { FC } from 'react';
import useLocationList from 'src/hooks/useLocations';
import LocationsPage from './LocationsPage';

const LocationsPageContainer: FC = () => {
  const result = useLocationList();

  return <LocationsPage {...result} />;
};

export default LocationsPageContainer;
