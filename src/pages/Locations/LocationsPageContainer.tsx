import type { FC } from 'react';
import useLocations from 'src/hooks/useLocations';
import LocationsPage from './LocationsPage';

const LocationsPageContainer: FC = () => {
  const result = useLocations();

  return <LocationsPage {...result} />;
};

export default LocationsPageContainer;
