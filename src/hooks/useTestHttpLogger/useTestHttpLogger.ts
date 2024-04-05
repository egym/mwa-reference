import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query';
import {
  getError500Request,
  getSuccessfulRequest,
  postError400Request,
  putError404Request,
} from '../../api/testLogger';
import { queryKeys } from '../../utils/queryKeys';

const useTestHttpLogger = () => {
  const successQuery = useQuery({
    queryKey: queryKeys.testLogger.success,
    queryFn: async () => getSuccessfulRequest(),
    enabled: false, // allows only manual trigger
    select: (result) => result.data,
    staleTime: 0,
    placeholderData: keepPreviousData,
    refetchOnMount: true,
  });

  const error500Query = useQuery({
    queryKey: queryKeys.testLogger.serverDown,
    queryFn: async () => getError500Request(),
    enabled: false, // allows only manual trigger
    select: (result) => result.data,
    staleTime: 0,
    placeholderData: keepPreviousData,
    refetchOnMount: true,
  });

  const error400Mutation = useMutation({
    mutationKey: queryKeys.testLogger.validationError,
    mutationFn: async () => postError400Request({ payload: { name: 'test', age: 333 } }),
  });

  const error404Mutation = useMutation({
    mutationKey: queryKeys.testLogger.editError,
    mutationFn: async () => {
      return putError404Request({ payload: { name: 'John', age: 23 }, urlParams: { id: '12' } });
    },
  });

  return {
    successQuery,
    error500Query,
    error400Mutation,
    error404Mutation,
  };
};
export default useTestHttpLogger;
