import { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import useClasses from 'src/hooks/useClasses';
import type { UseClassesListResultProps } from '../ClassesListProps';

const useClassesList = (): UseClassesListResultProps => {
  const { classesQuery } = useClasses();

  const groupedClasses = useMemo(() => {
    if (!classesQuery.isSuccess) return {};

    return classesQuery.data.reduce((acc, classItem) => {
      const formattedDay = format(parseISO(classItem.date), 'eee, LLL d');

      return {
        ...acc,
        [formattedDay]: [
          // @ts-ignore
          ...(acc[formattedDay] || []),
          classItem,
        ],
      };
    }, {});
  }, [classesQuery.data, classesQuery.isSuccess]);

  return {
    groupedClasses,
    loading: classesQuery.isLoading,
  };
};

export default useClassesList;
