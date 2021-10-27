import { IonContent, IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useState } from 'react';
import { ClassItem } from '../../utils/data';
import ClassBookingItem from '../ClassBookingItem';

enum ClassType {
  Upcoming = 'upcoming',
  Booked = 'booked'
}

type Props = {
  upcomingClasses: ClassItem[];
  bookedClasses: ClassItem[];
  onClassItemClick: (classDetails: ClassItem) => void;
}

const ClassBookingWidget: React.FC<Props> = ({ upcomingClasses, bookedClasses, onClassItemClick }) => {
  const [selectedSegment, setSelectedSegment] = useState<ClassType>(ClassType.Upcoming);

 return (
  <IonContent>
    <IonSegment color="primary" onIonChange={e => setSelectedSegment(e.detail.value as ClassType)} value={selectedSegment}>
      <IonSegmentButton color="primary" value={ClassType.Upcoming}>
        <IonLabel>Upcoming</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton color="primary" value={ClassType.Booked}>
        <IonLabel>Booked</IonLabel>
      </IonSegmentButton>
    </IonSegment>
    {(selectedSegment === ClassType.Upcoming ? upcomingClasses : bookedClasses).map((classItem) => {
      return <ClassBookingItem key={classItem.id} currentClass={classItem} onClick={onClassItemClick} />
    })}
  </IonContent>
 );
};

export default ClassBookingWidget;
