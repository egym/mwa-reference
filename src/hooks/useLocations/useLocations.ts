import { useQuery } from 'react-query';
import { getLocationRequest } from 'src/api/locations';

const useLocations = () => {
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

export default useLocations;
