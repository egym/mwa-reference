import type { FC } from 'react';
import ClassDetails from './ClassDetails';
import useClassDetails from './hooks/useClassDetails';

const ClassDetailsContainer: FC = () => {
  const result = useClassDetails();

  return <ClassDetails {...result} />;
};

export default ClassDetailsContainer;
