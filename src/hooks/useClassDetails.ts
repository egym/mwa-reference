import { getClassDetailsById } from '../utils/data';
import {usePortalsContext} from "./usePortalsContext";

const useClassDetails = (classId?: string) => {
  const classDetails = classId ? getClassDetailsById(classId) : undefined;
  const { url: backendUrl } = usePortalsContext();

  const onBookClassClick = async () => {
    if (classDetails && backendUrl) {
      alert(`make an api call to ${backendUrl} url to book a class`)
    }
  }

  return {
    classDetails: classDetails,
    loading: false,
    onBookClassClick,
  }
};

export default useClassDetails;
