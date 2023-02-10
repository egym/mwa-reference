import type { FC } from 'react';
import useTestLogger from './hooks/useTestLogger';
import TestLogger from './TestLogger';

const TestLoggerContainer: FC = () => {
  const result = useTestLogger();

  return <TestLogger {...result} />;
};

export default TestLoggerContainer;
