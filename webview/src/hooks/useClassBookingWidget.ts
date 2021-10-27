import { useCallback, useMemo } from 'react';
import { ClassItem, getBookedClasses, getUpcomingClasses } from '../utils/data';
import { onClassItemClick } from '../utils/nativeHandlers';

const useClassBookingWidget = () => {
  const handleClassItemClick = useCallback((classDetails: ClassItem) => {
    console.log('useClassBookingWidget classDetails', classDetails);
    onClassItemClick(classDetails);
  }, []);

  const upcomingClasses = useMemo(() => {
    const items = getUpcomingClasses();

    return items.slice(0, 2);
  }, []);

  const bookedClasses = useMemo(() => {
    const items = getBookedClasses();

    return items.slice(0, 2);
  }, []);

  return {
    handleClassItemClick,
    upcomingClasses,
    bookedClasses,
  }
};

export default useClassBookingWidget;
