import { useCallback, useMemo } from 'react';
import useClasses from 'src/hooks/useClasses';
import { requestOpenFeature } from 'src/utils/nativeHandlers/requests';
import type { UseClassesWidgetResultProps } from '../../ClassesWidgetProps';

const useClassesWidget = (): UseClassesWidgetResultProps => {
  const { classesQuery } = useClasses();

  const upcomingClasses = useMemo(() => {
    if (!classesQuery.isSuccess) return [];

    return classesQuery.data.filter((classItem) => !classItem.booked).slice(0, 2);
  }, [classesQuery.data, classesQuery.isSuccess]);

  const bookedClasses = useMemo(() => {
    if (!classesQuery.isSuccess) return [];

    return classesQuery.data.filter((classItem) => classItem.booked).slice(0, 2);
  }, [classesQuery.data, classesQuery.isSuccess]);

  const handleClassItemClick = useCallback(async (classId: number) => {
    await requestOpenFeature({
      startingRoute: `/classes/${classId}`,
    });
  }, []);

  return {
    loading: classesQuery.isLoading,
    upcomingClasses,
    bookedClasses,
    handleClassItemClick,
  };
};

export default useClassesWidget;
