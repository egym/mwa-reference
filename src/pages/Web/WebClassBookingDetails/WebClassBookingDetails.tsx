import React from 'react';
import { RouteComponentProps } from 'react-router';
import { IonPage } from '@ionic/react';
import ClassBookingDetails from '../../../components/ClassBookingDetails';
import useClassDetails from '../../../hooks/useClassDetails';

type Props = RouteComponentProps<{ id: string }>;

const WebClassBookingDetails: React.FC<Props> = ({ match }) => {
  const { classDetails, loading, onBookClassClick } = useClassDetails(match.params.id);

  return (
    <IonPage>
      <ClassBookingDetails variant="portals" classDetails={classDetails} loading={loading} onBookClassClick={onBookClassClick} />
    </IonPage>
  );
};

export default WebClassBookingDetails;
