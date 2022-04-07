import React from 'react';
import {IonPage} from '@ionic/react';
import ClassBookingList from '../../components/ClassBookingList';
import useClassList from '../../hooks/useClassList';
import CommonPageHeader from "../../components/CommonPageHeader";

const ClassBookingListPage: React.FC = () => {
  const {gymName} = useClassList();

  return (
    <IonPage>
      <CommonPageHeader title="Classes list" />
      <ClassBookingList gymName={gymName}/>
    </IonPage>
  );
};

export default ClassBookingListPage;
