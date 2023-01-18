import type { FC } from 'react';
import ClassesWidget from './ClassesWidget';
import useClassesWidget from './hooks/useClassesWidget';

const ClassesWidgetContainer: FC = () => {
  const result = useClassesWidget();

  return <ClassesWidget {...result} />;
};

export default ClassesWidgetContainer;
