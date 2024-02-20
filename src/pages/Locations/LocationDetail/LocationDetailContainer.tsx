import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'src/components';
import useLocationDetail from '../hooks/useLocationDetail';
import LocationDetail from './LocationDetail';

type LocationQueryParam = {
  locationId: string;
};

const LocationDetailContainer: FC = () => {
  const { locationId } = useParams<LocationQueryParam>();
  const result = useLocationDetail(locationId);

  if (result.loading) {
    return <Loader />;
  }

  return <LocationDetail {...result} />;
};

export default LocationDetailContainer;
