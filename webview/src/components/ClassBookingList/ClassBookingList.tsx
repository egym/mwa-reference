import React from 'react';
import {
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow,
  IonText,
} from '@ionic/react';
import { format } from 'date-fns';
import { filter } from 'ionicons/icons';
import { ClassItem, groupedClasses } from '../../utils/data';
import styles from './ClassBookingList.module.scss';
import SpotsLeft from '../SpotsLeft';
import { weekDays } from './data';

type Props = {
  onClassItemClick: (classDetails: ClassItem) => void;
  gymName?: string
};

const ClassBookingList: React.FC<Props> = ({ onClassItemClick, gymName }) => {
  return (
    <IonContent fullscreen>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonChip color="primary" className={styles.chip}>
              <IonIcon icon={filter}/>
              <IonLabel>Filters</IonLabel>
            </IonChip>
            <IonChip color="primary" outline className={styles.chip}>
              <IonLabel>All Classes</IonLabel>
            </IonChip>
            <IonChip color="primary" outline className={styles.chip}>
              <IonLabel>All Class Types</IonLabel>
            </IonChip>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <div className={styles.weekDaysWrapper}>
              {weekDays.map(({ date, currentDay }) => {
                return (
                  <div
                    className={[styles.weekDayItem, currentDay ? styles.weekDayItemCurrent : ''].join(' ')}
                    key={String(date)}
                  >
                    <span style={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500 }}>{format(date, 'eee')}</span>
                    <span style={{ fontSize: '16px', lineHeight: '20px', fontWeight: 700 }}>{format(date, 'd')}</span>
                    {currentDay && (
                      <div className={styles.weekDayItemCurrentDot}/>
                    )}
                  </div>
                );
              })}
            </div>
          </IonCol>
        </IonRow>
        {gymName && <IonRow>
          <IonCol>
            <IonText color="primary" style={{ paddingLeft: '9px' }}>
              Gym Name (data from native) - {gymName}
            </IonText>
          </IonCol>
        </IonRow>}
      </IonGrid>
      {Object.keys(groupedClasses).map(classesDate => {
        return <IonList lines="none" key={classesDate} className={styles.list}>
          <IonListHeader>{classesDate}</IonListHeader>
          {groupedClasses[classesDate].map(currentClass => {
            return <IonItem key={currentClass.id} detail={false} onClick={() => onClassItemClick(currentClass)}>
              <IonCard className={styles.card}>
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
            </IonItem>
          })}

        </IonList>
      })}
    </IonContent>
  );
};

export default ClassBookingList;
