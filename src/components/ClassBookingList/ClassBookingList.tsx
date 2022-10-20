import React from 'react';
import {
  IonChip,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonText,
} from '@ionic/react';
import { format } from 'date-fns';
import { filter } from 'ionicons/icons';
import { groupedClasses } from '../../utils/data';
import styles from './ClassBookingList.module.scss';
import { weekDays } from './data';
import ClassBookingItem from '../ClassBookingItem';

const ClassBookingList: React.FC = () => {
  return (
    <IonContent fullscreen style={{height: '100vh', width: '100vw'}}>
      <div className={styles.flex}>
        <div style={{ padding: '10px' }}>
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
        </div>
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
      </div>
      <div className={styles.listWrapper}>
        {Object.keys(groupedClasses).map(classesDate => {
          return <IonList lines="none" key={classesDate} className={styles.list}>
            <IonListHeader className={styles.listHeader}><h6>{classesDate}</h6></IonListHeader>
            {groupedClasses[classesDate].map(currentClass => {
              return <IonItem
                className={styles.listItem}
                key={currentClass.id}
                detail={false}
                routerLink={`/classes/${currentClass.id}`}
              >
                <ClassBookingItem currentClass={currentClass} />
              </IonItem>
            })}
          </IonList>
        })}
      </div>
    </IonContent>
  );
};

export default ClassBookingList;
