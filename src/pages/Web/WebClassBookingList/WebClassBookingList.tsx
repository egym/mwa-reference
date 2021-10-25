import React from 'react';
import { IonPage } from '@ionic/react';
import ClassBookingList from '../../../components/ClassBookingList';

type Props = {

};

const WebClassBookingList: React.FC<Props> = props => {
 return (
   <IonPage>
    <ClassBookingList variant="web" />
   </IonPage>
 );
};

export default WebClassBookingList;
