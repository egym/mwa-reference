import React from 'react';
import { IonPage } from '@ionic/react';
import ClassBookingList from '../../components/ClassBookingList';
import useClassList from '../../hooks/useClassList';

const ClassBookingListPage: React.FC = () => {
  const { onClassItemClick, gymName } = useClassList();

 return (
   <IonPage>
    <ClassBookingList onClassItemClick={onClassItemClick} gymName={gymName} />
   </IonPage>
 );
};

export default ClassBookingListPage;
