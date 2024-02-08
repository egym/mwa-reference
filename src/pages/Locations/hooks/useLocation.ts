import { useMemo } from 'react';
import useLocations from 'src/hooks/useLocations';
import type { UseLocationResultProps } from './LocationsProps';

const useLocation = (): UseLocationResultProps => {
  const { locationsQuery } = useLocations();

  const groupedLocations = useMemo(() => {
    if (!locationsQuery.isSuccess) return {};

    return locationsQuery.data;
  }, [locationsQuery.data, locationsQuery.isSuccess]);

  return {
    groupedLocations,
    loading: locationsQuery.isLoading,
  };
};

export default useLocation;
