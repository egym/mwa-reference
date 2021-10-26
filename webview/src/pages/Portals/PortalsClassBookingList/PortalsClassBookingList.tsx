import React from 'react';
import { IonPage } from '@ionic/react';
import ClassBookingList from '../../../components/ClassBookingList';


type Props = {
  context: {
    startingRoute: string;
    gymName?: string
  };
};

const PortalsClassBookingList: React.FC<Props> = ({ context }) => {
 return (
   <IonPage>
    <ClassBookingList variant="portals" context={context} />
   </IonPage>
 );
};

export default PortalsClassBookingList;
