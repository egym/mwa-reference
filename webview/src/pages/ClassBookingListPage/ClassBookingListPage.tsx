import React from 'react';
import { IonPage } from '@ionic/react';
import ClassBookingList from '../../components/ClassBookingList';
import useClassList from '../../hooks/useClassList';

const ClassBookingListPage: React.FC = () => {
  const { gymName } = useClassList();

 return (
   <IonPage>
    <ClassBookingList gymName={gymName} />
   </IonPage>
 );
};

export default ClassBookingListPage;
