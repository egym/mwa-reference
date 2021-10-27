import { useIonToast } from '@ionic/react';
import { getClassDetailsById } from '../utils/data';
import { onClassBookedClick } from '../utils/nativeHandlers';

const useClassDetails = (classId?: string) => {
  const [presentToast] = useIonToast();
  const classDetails = classId ? getClassDetailsById(classId) : undefined;

  const onBookClassClick = () => {
    if (classDetails) {
      console.log('onClassBookedClick', classDetails);

      presentToast({
        header: 'WEBVIEW TOAST',
        message: `Sending class details`,
        duration: 5000
      });

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
