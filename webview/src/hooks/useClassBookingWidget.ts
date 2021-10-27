import { useCallback, useMemo } from 'react';
import { ClassItem, getBookedClasses, getUpcomingClasses } from '../utils/data';

const useClassBookingWidget = () => {
  const onClassItemClick = useCallback((classDetails: ClassItem) => {
    console.log('useClassBookingWidget classDetails', classDetails);
    if (window.AndroidInteractor?.onClassItemClick) {
      window.AndroidInteractor?.onClassItemClick(classDetails.id);
    }
    if (window.IOSInteractor) {
      window.webkit.messageHandlers.onClassItemClick.postMessage({ classId: classDetails.id });
    }
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
    onClassItemClick,
    upcomingClasses,
    bookedClasses,
  }
};

export default useClassBookingWidget;
