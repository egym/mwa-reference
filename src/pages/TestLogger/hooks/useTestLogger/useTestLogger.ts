import useTestHttpLogger from 'src/hooks/useTestHttpLogger';
import type { UseTestLoggerPropsResult } from '../../TestLoggerProps';

const useTestLogger = (): UseTestLoggerPropsResult => {
  const { successQuery, error500Query, error400Mutation, error404Mutation } = useTestHttpLogger();

  return {
    successQuery,
    error500Query,
    error400Mutation,
    error404Mutation,
  };
};

export default useTestLogger;
