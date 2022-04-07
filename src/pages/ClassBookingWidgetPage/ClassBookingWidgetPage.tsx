import React from 'react';
import { IonPage } from '@ionic/react';
import ClassBookingWidget from '../../components/ClassBookingWidget';
import useClassBookingWidget from '../../hooks/useClassBookingWidget';

const ClassBookingWidgetPage: React.FC = () => {
  const { handleClassItemClick, upcomingClasses, bookedClasses } = useClassBookingWidget();

 return (
  <IonPage>
   <ClassBookingWidget handleClassItemClick={handleClassItemClick} upcomingClasses={upcomingClasses} bookedClasses={bookedClasses} />
  </IonPage>
 );
};

export default ClassBookingWidgetPage;
