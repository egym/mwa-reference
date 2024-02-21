import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getLocationRequest } from 'src/api/locations';
import type { LocationsPageProps } from './LocationsPageProps';

const useLocationQuery = () => {
  const locationsQuery = useQuery(
    ['children'],
    async () => {
      return getLocationRequest();
    },
    {
      enabled: true,
      select: (result) => result.data,
      staleTime: 0,
      keepPreviousData: true,
      refetchOnMount: true,
    }
  );

  return {
    locationsQuery,
  };
};

const useLocations = (): LocationsPageProps => {
  const { locationsQuery } = useLocationQuery();

  const locations = useMemo(() => {
    if (!locationsQuery.isSuccess) return [];

    return locationsQuery.data;
  }, [locationsQuery.data, locationsQuery.isSuccess]);

  return {
    locations,
    loading: locationsQuery.isLoading,
  };
};

export default useLocations;
