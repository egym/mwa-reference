import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getTestCors } from '../../api';
import { queryKeys } from '../../utils/queryKeys';

const useTestCors = () => {
  const testCorsQuery = useQuery({
    queryKey: queryKeys.testCors,
    queryFn: async () => getTestCors(),
    enabled: false, // allows only manual trigger
    select: (result) => result.data,
    staleTime: 0,
    placeholderData: keepPreviousData,
    refetchOnMount: true,
  });

  return {
    testCorsQuery,
  };
};

export default useTestCors;
