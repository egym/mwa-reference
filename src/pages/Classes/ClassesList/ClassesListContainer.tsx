import type { FC } from 'react';
import ClassesList from './ClassesList';
import useClassesList from './hooks/useClassesList';

const ClassesListContainer: FC = () => {
  const result = useClassesList();

  return <ClassesList {...result} />;
};

export default ClassesListContainer;
