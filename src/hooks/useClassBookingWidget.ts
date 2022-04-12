import { useCallback, useMemo } from 'react';
import { ClassItem, getBookedClasses, getUpcomingClasses } from '../utils/data';
import { requestOpenFeature } from '../utils/nativeHandlers/requests';

const useClassBookingWidget = () => {
  const handleClassItemClick = useCallback(async (classDetails: ClassItem) => {
    await requestOpenFeature({
      startingRoute: `/classes/${classDetails.id}`
    })
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
