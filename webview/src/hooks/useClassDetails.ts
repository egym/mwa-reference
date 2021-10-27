import { useIonToast } from '@ionic/react';
import { getClassDetailsById } from '../utils/data';

const useClassDetails = (classId?: string) => {
  const [presentToast] = useIonToast();
  const classDetails = classId ? getClassDetailsById(classId) : undefined;

  const onBookClassClick = () => {
    if (classDetails) {
      console.log('onClassBookedClick', classDetails);

      if (window.AndroidInteractor) {
        presentToast({
          header: 'WEBVIEW TOAST',
          message: `Sending class details to Android`,
          duration: 5000
        });
        window.AndroidInteractor?.onClassBookedClick(Number(classId), classDetails.name);
      }

      if (window.IOSInteractor) {
        presentToast({
          header: 'WEBVIEW TOAST',
          message: `Sending class details to IOS`,
          duration: 5000
        });
        window.webkit.messageHandlers.onClassBookedClick.postMessage({ classId: Number(classId), className: classDetails.name });
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
