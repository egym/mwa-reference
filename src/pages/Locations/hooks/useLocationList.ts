import { useMemo } from 'react';
import useLocations from 'src/hooks/useLocations';
import type { UseLocationResultProps } from './LocationsProps';

const useLocationList = (): UseLocationResultProps => {
  const { locationsQuery } = useLocations();

  const locations = useMemo(() => {
    if (!locationsQuery.isSuccess) return {};

    return locationsQuery.data;
  }, [locationsQuery.data, locationsQuery.isSuccess]);

  return {
    locations,
    loading: locationsQuery.isLoading,
  };
};

export default useLocationList;
