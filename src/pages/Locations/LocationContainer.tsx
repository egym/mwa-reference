import type { FC } from 'react';
import useLocationList from './hooks/useLocationList';
import Locations from './Locations';

const LocationContainer: FC = () => {
  const result = useLocationList();

  return <Locations {...result} />;
};

export default LocationContainer;
