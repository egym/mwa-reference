import React from 'react';
import { IonPage } from '@ionic/react';
import ClassBookingList from '../../../components/ClassBookingList';

type Props = {

};

const PlainWebviewClassBookingList: React.FC<Props> = props => {
 return (
   <IonPage>
    <ClassBookingList variant="plain-webview" />
   </IonPage>
 );
};

export default PlainWebviewClassBookingList;
