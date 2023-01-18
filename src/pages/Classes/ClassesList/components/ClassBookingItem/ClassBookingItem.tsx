import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRippleEffect } from '@ionic/react';
import type { ClassItem } from 'src/types';
import SpotsLeft from '../../../components/SpotsLeft';
import styles from './ClassBookingItem.module.scss';

type Props = {
  currentClass: ClassItem;
  onClick?: (classDetails: ClassItem) => void;
};

const ClassBookingItem: React.FC<Props> = ({ currentClass, onClick }) => {
  const handleClick = () => {
    if (!onClick) return;

    onClick(currentClass);
  };

  return (
    <IonCard className={styles.card} button onClick={handleClick}>
      <IonCardHeader className={styles.cardHeader}>
        <IonCardSubtitle className={styles.cardSubtitle}>
          {currentClass.time}
          <SpotsLeft />
        </IonCardSubtitle>
        <IonCardTitle className={styles.cardTitle}>{currentClass.name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className={styles.cardContent}>
        <p>{currentClass.trainer}</p>
        <p>{currentClass.gymName}</p>
      </IonCardContent>
      <IonRippleEffect type="bounded" />
    </IonCard>
  );
};

export default ClassBookingItem;
