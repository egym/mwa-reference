import type { FC } from 'react';
import useTestCorsPage from './hooks/useTestCorsPage';
import TestCors from './TestCors';

const TestCorsContainer: FC = () => {
  const result = useTestCorsPage();

  return <TestCors {...result} />;
};

export default TestCorsContainer;
