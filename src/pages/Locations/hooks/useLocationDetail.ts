import { useMemo } from 'react';
import type { LocationsDetailProps } from './LocationsPageProps';
import useLocationList from './useLocationList';

const useLocationDetail = (locationId: string): LocationsDetailProps => {
  const { loading, locations } = useLocationList();

  const locationDetail = useMemo(() => {
    if (!loading) {
      return locations.find((eachLocation) => eachLocation.uuid === locationId);
    }
    return undefined;
  }, [loading, locations, locationId]);

  return { loading, locationDetail };
};

export default useLocationDetail;
