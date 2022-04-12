import React from 'react';
import {IonPage} from '@ionic/react';
import ClassBookingList from '../../components/ClassBookingList';
import CommonPageHeader from "../../components/CommonPageHeader";

const ClassBookingListPage: React.FC = () => {

  return (
    <IonPage>
      <CommonPageHeader title="Classes list" />
      <ClassBookingList />
    </IonPage>
  );
};

export default ClassBookingListPage;
