import { useMutation, useQuery } from 'react-query';
import {
  getError500Request,
  getSuccessfulRequest,
  postError400Request,
  putError404Request,
} from '../../api/testLogger';
import { queryKeys } from '../../utils/queryKeys';

const useTestHttpLogger = () => {
  const successQuery = useQuery(
    queryKeys.testLogger.success,
    async () => {
      return getSuccessfulRequest();
    },
    {
      enabled: false, // allows only manual trigger
      select: (result) => result.data,
      staleTime: 0,
      keepPreviousData: true,
      refetchOnMount: true,
    }
  );

  const error500Query = useQuery(
    queryKeys.testLogger.serverDown,
    async () => {
      return getError500Request();
    },
    {
      enabled: false, // allows only manual trigger
      select: (result) => result.data,
      staleTime: 0,
      keepPreviousData: true,
      refetchOnMount: true,
    }
  );

  const error400Mutation = useMutation(queryKeys.testLogger.validationError, async () => {
    return postError400Request({ payload: { name: 'test', age: 333 } });
  });

  const error404Mutation = useMutation(queryKeys.testLogger.editError, async () => {
    return putError404Request({ payload: { name: 'John', age: 23 }, urlParams: { id: '12' } });
  });

  return {
    successQuery,
    error500Query,
    error400Mutation,
    error404Mutation,
  };
};

export default useTestHttpLogger;
