import { useMemo } from 'react';
import { DateTime } from 'luxon';
import useClasses from 'src/hooks/useClasses';
import { getWeekRangeByDay } from '../../../../utils/helpers';
import type { UseClassesListResultProps } from '../ClassesListProps';

const useClassesList = (): UseClassesListResultProps => {
  const { classesQuery } = useClasses();

  const groupedClasses = useMemo(() => {
    if (!classesQuery.isSuccess) return {};

    return classesQuery.data.reduce((acc, classItem) => {
      const formattedDay = DateTime.fromISO(classItem.date).toLocaleString({
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });

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

  const weekDays = useMemo(() => {
    const today = DateTime.now();

    return getWeekRangeByDay(today);
  }, []);

  return {
    groupedClasses,
    loading: classesQuery.isLoading,
    weekDays,
  };
};

export default useClassesList;
