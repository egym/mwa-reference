import { getClassDetailsById } from '../utils/data';
import { onClassBookedClick } from '../utils/nativeHandlers';

const useClassDetails = (classId?: string) => {
  const classDetails = classId ? getClassDetailsById(classId) : undefined;

  const onBookClassClick = async () => {
    if (classDetails) {
      await onClassBookedClick(classDetails);
    }
  }

  return {
    classDetails: classDetails,
    loading: false,
    onBookClassClick,
  }
};

export default useClassDetails;
