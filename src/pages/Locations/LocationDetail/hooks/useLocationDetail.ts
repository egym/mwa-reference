import { useMemo } from 'react';
import useLocationList from 'src/hooks/useLocations';
import type { LocationsDetailProps } from 'src/hooks/useLocations/LocationsPageProps';

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
