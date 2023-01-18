import type { FC } from 'react';
import useTestAuth from './hooks/useTestAuth';
import TestAuth from './TestAuth';

const TestAuthContainer: FC = () => {
  const result = useTestAuth();

  return <TestAuth {...result} />;
};

export default TestAuthContainer;
