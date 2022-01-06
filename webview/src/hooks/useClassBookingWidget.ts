import { useCallback, useMemo } from 'react';
import { ClassItem, getBookedClasses, getUpcomingClasses } from '../utils/data';
import { onClassItemClick } from '../utils/nativeHandlers';

const useClassBookingWidget = () => {
  const handleClassItemClick = useCallback(async (classDetails: ClassItem) => {
    // here native side should redirect to the class details page
    await onClassItemClick(classDetails);
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
