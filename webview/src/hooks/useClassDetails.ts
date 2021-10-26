import { useIonToast } from '@ionic/react';
import { getClassDetailsById } from '../utils/data';

const useClassDetails = (classId?: string) => {
  const [presentToast] = useIonToast();
  const classDetails = classId ? getClassDetailsById(classId) : undefined;

  const onBookClassClick = () => {
    if (classDetails) {
      console.log('onClassBookedClick', classDetails);

      if (window.AndroidInteractor) {
        window.AndroidInteractor?.onClassBookedClick(classDetails.name)
        presentToast({
          header: 'WEBVIEW TOAST',
          message: `Sending class name - "${classDetails.name}" message to Android`,
          duration: 5000
        })
      }
    }
  }

  return {
    classDetails: classDetails,
    loading: false,
    onBookClassClick,
  }
};

export default useClassDetails;
