import type { FC } from 'react';
import { useState } from 'react';
import { IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton } from '@ionic/react';
import { Loader } from 'src/components';
import ClassBookingItem from '../ClassesList/components/ClassBookingItem';
import styles from './ClassesWidget.module.scss';
import type { ClassesWidgetProps } from './ClassesWidgetProps';

enum ClassType {
  Upcoming = 'upcoming',
  Booked = 'booked',
}

const ClassesWidget: FC<ClassesWidgetProps> = ({ handleClassItemClick, upcomingClasses, loading, bookedClasses }) => {
  const [selectedSegment, setSelectedSegment] = useState<ClassType>(ClassType.Upcoming);

  return (
    <IonPage>
      <IonContent className={styles.content}>
        <IonSegment
          mode="ios"
          onIonChange={(e) => setSelectedSegment(e.detail.value as ClassType)}
          value={selectedSegment}
        >
          <IonSegmentButton value={ClassType.Upcoming}>
            <IonLabel>Upcoming</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value={ClassType.Booked}>
            <IonLabel>Booked</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {loading ? (
          <Loader />
        ) : (
          (selectedSegment === ClassType.Upcoming ? upcomingClasses : bookedClasses).map((classItem) => {
            return <ClassBookingItem key={classItem.id} currentClass={classItem} onClick={handleClassItemClick} />;
          })
        )}
      </IonContent>
    </IonPage>
  );
};

export default ClassesWidget;
