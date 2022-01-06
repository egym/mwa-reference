import { getClassDetailsById } from '../utils/data';
import { onClassBookedClick } from '../utils/nativeHandlers';

const useClassDetails = (classId?: string) => {
  const classDetails = classId ? getClassDetailsById(classId) : undefined;

  const onBookClassClick = () => {
    if (classDetails) {
      console.log('onClassBookedClick', classDetails);

      onClassBookedClick(classDetails)
    }
  }

  return {
    classDetails: classDetails,
    loading: false,
    onBookClassClick,
  }
};

export default useClassDetails;
