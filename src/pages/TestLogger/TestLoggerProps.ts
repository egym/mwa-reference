import type { UseMutationResult, UseQueryResult } from 'react-query';

// eslint-disable-next-line @typescript-eslint/ban-types
export type TestLoggerContainerProps = {};

export type UseTestLoggerPropsResult = {
  successQuery: UseQueryResult;
  error500Query: UseQueryResult;
  error400Mutation: UseMutationResult<any, any, any, any>;
  error404Mutation: UseMutationResult<any, any, any, any>;
};

export type TestLoggerProps = TestLoggerContainerProps & UseTestLoggerPropsResult;
