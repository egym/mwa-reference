import React from 'react';
import { IonPage } from '@ionic/react';
import ClassBookingList from '../../components/ClassBookingList';

type Props = {

};

const ClassBookingListPage: React.FC<Props> = props => {
 return (
   <IonPage>
    <ClassBookingList />
   </IonPage>
 );
};

export default ClassBookingListPage;
