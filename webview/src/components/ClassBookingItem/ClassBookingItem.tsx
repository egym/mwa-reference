import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import styles from './ClassBookingItem.module.scss';
import SpotsLeft from '../SpotsLeft';
import { ClassItem } from '../../utils/data';

type Props = {
  currentClass: ClassItem;
  onClick?: (classDetails: ClassItem) => void;
};

const ClassBookingItem: React.FC<Props> = ({ currentClass, onClick }) => {

  const handleClick = () => {
    if (!onClick) return;

    onClick(currentClass);
  }

 return (
   <IonCard className={styles.card} onClick={handleClick}>
     <IonCardHeader className={styles.cardHeader}>
       <IonCardSubtitle className={styles.cardSubtitle}>
         {currentClass.time}
         <SpotsLeft/>
       </IonCardSubtitle>
       <IonCardTitle className={styles.cardTitle}>{currentClass.name}</IonCardTitle>
     </IonCardHeader>
     <IonCardContent className={styles.cardContent}>
       <p>{currentClass.trainer}</p>
       <p>{currentClass.gymName}</p>
     </IonCardContent>
   </IonCard>
 );
};

export default ClassBookingItem;
