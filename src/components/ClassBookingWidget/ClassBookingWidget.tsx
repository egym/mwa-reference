import { IonContent, IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useState } from 'react';
import { ClassItem } from '../../utils/data';
import ClassBookingItem from '../ClassBookingItem';
import styles from './ClassBookingWidget.module.scss';

enum ClassType {
  Upcoming = 'upcoming',
  Booked = 'booked'
}

type Props = {
  upcomingClasses: ClassItem[];
  bookedClasses: ClassItem[];
  handleClassItemClick: (classDetails: ClassItem) => void;
}

const ClassBookingWidget: React.FC<Props> = ({ upcomingClasses, bookedClasses, handleClassItemClick }) => {
  const [selectedSegment, setSelectedSegment] = useState<ClassType>(ClassType.Upcoming);

 return (
  <IonContent className={styles.content} style={{height: '100vh', width: '100vw'}}>
    <IonSegment mode="ios" onIonChange={e => setSelectedSegment(e.detail.value as ClassType)} value={selectedSegment}>
      <IonSegmentButton value={ClassType.Upcoming}>
        <IonLabel>Upcoming</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton value={ClassType.Booked}>
        <IonLabel>Booked</IonLabel>
      </IonSegmentButton>
    </IonSegment>
    {(selectedSegment === ClassType.Upcoming ? upcomingClasses : bookedClasses).map((classItem) => {
      return <ClassBookingItem key={classItem.id} currentClass={classItem} onClick={handleClassItemClick} />
    })}
  </IonContent>
 );
};

export default ClassBookingWidget;
