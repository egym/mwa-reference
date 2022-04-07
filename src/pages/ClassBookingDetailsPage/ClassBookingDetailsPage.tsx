import React from 'react';
import { IonPage } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import useClassDetails from '../../hooks/useClassDetails';
import ClassBookingDetails from '../../components/ClassBookingDetails';
import CommonPageHeader from "../../components/CommonPageHeader";

type Props = RouteComponentProps<{ id: string }>

const ClassBookingDetailsPage: React.FC<Props> = ({ match}) => {
  const { classDetails, loading, onBookClassClick } = useClassDetails(match.params.id);

 return (
   <IonPage>
     {classDetails?.name && <CommonPageHeader title={classDetails.name} />}
     <ClassBookingDetails classDetails={classDetails} loading={loading} onBookClassClick={onBookClassClick}/>
   </IonPage>
 );
};

export default ClassBookingDetailsPage;
