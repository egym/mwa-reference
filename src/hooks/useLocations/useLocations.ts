import { useQuery } from 'react-query';
import { createApiRequest } from 'src/utils/api';

const LOCATION_REQUEST = '/children';

const getLocationRequest = createApiRequest<any>(
  LOCATION_REQUEST,
  'get',
  undefined,
  'https://egymidp.netpulse.com/np/company'
);

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
