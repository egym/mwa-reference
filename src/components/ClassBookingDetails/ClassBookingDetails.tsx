import {
  IonButton, IonCard, IonCardContent, IonCardHeader,
  IonCardTitle, IonChip, IonContent,
  IonFooter,
  IonIcon, IonLabel, IonText, IonToolbar
} from '@ionic/react';
import React from 'react';
import { ClassItem } from '../../utils/data';
import styles from './ClassBookingDetails.module.scss';
import SpotsLeft from '../SpotsLeft';
import { format } from 'date-fns';
import { arrowForward, calendarOutline } from 'ionicons/icons';

type Props = {
  classDetails?: ClassItem;
  loading?: boolean;
  onBookClassClick: () => void;
};

const ClassBookingDetails: React.FC<Props> = ({ classDetails, loading, onBookClassClick }) => {
  if (!classDetails) return null;

  return (
    <>
      <IonContent fullscreen style={{height: '100vh', width: '100vw'}}>
        <IonCard className={styles.card} style={{ visibility: loading ? 'hidden' : 'visible' }}>
          <img src={classDetails.image}/>
          <IonCardHeader>
            <IonCardTitle>{classDetails.name}</IonCardTitle>
            <div className={styles.subHeader}>
              <IonChip color="primary" className={styles.chip}>
                <IonLabel>Open for booking</IonLabel>
              </IonChip>
              <SpotsLeft/>
            </div>
          </IonCardHeader>
          <IonCardContent>
            <div className={styles.contentItem}>
              <IonText className={styles.label}><h3>Schedule</h3></IonText>
              <div className={styles.scheduleBlock}>
                <div className={styles.scheduleBlockDate}>
                  <span>{format(classDetails.date, 'E')}</span>
                  <span>{format(classDetails.date, 'd')}</span>
                </div>
                <div className={styles.scheduleBlockContent}>
                  <div className={styles.scheduleBlockTime}>
                    <span>{classDetails.time}</span>
                  </div>
                  <div className={styles.iconWrapper}>
                    <IonIcon icon={calendarOutline}/>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contentItem}>
              <IonText className={styles.label}><h3>Location</h3></IonText>
              <div className={styles.flexRow}>
                <IonText className={styles.label}><h2>{classDetails.gymName}</h2></IonText>
                <div className={styles.iconWrapper} style={{ marginTop: '-25px' }}>
                  <IonIcon color="" icon={arrowForward} size="large"/>
                </div>
              </div>
            </div>
            <div className={styles.contentItem}>
              <IonText className={styles.label}><h3>Description</h3></IonText>
              <IonText className={styles.label}><h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
                aperiam delectus ducimus magni optio ratione reiciendis repellat tempore ullam. Cumque earum ex mollitia
                odio, provident sequi velit? Fugit, maxime?</h2></IonText>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton color="primary" fill="solid" size="default" expand="block" className={styles.bookBtn} onClick={onBookClassClick}>
            Book Class
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </>
  );
};

export default ClassBookingDetails;
