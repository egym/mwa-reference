import { useQuery } from 'react-query';
import { getTestCors } from '../../api';
import { queryKeys } from '../../utils/queryKeys';

const useTestCors = () => {
  const testCorsQuery = useQuery(
    queryKeys.testCors,
    async () => {
      return getTestCors();
    },
    {
      enabled: false, // allows only manual trigger
      select: (result) => result.data,
      staleTime: 0,
      keepPreviousData: true,
      refetchOnMount: true,
    }
  );

  return {
    testCorsQuery,
  };
};

export default useTestCors;
