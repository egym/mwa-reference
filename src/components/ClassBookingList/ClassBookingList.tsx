import React from 'react';
import {
  IonBackButton,
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonCheckbox,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { format } from 'date-fns';
import { filter } from 'ionicons/icons';
import { groupedClasses } from '../../utils/data';
import styles from './ClassBookingList.module.scss';
import SpotsLeft from '../SpotsLeft';
import { weekDays } from './data';


type Props = {
  variant: 'portals' | 'plain-webview' | 'web';
  context?: {
    startingRoute: string;
    gymName?: string
  };
};

const ClassBookingList: React.FC<Props> = ({ variant, context }) => {
  return (
    <>
      {/*<IonHeader translucent>*/}
      {/*  <IonToolbar>*/}
      {/*    <IonButtons slot="start">*/}
      {/*      <IonBackButton defaultHref="/home"/>*/}
      {/*    </IonButtons>*/}
      {/*    <IonTitle>Bookings</IonTitle>*/}
      {/*  </IonToolbar>*/}
      {/*</IonHeader>*/}
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
                        <div className={styles.weekDayItemCurrentDot} />
                      )}
                    </div>
                  );
                })}
              </div>
            </IonCol>
          </IonRow>
          {context?.gymName && <IonRow>
            <IonCol>
              <IonText color="primary" style={{ paddingLeft: '9px' }}>
                Gym Name (data from native) - {context?.gymName}
              </IonText>
            </IonCol>
          </IonRow>}
        </IonGrid>
        {Object.keys(groupedClasses).map(classesDate => {
          return <IonList lines="none" key={classesDate} className={styles.list}>
            <IonListHeader>{classesDate}</IonListHeader>
            {groupedClasses[classesDate].map(currentClass => {
              return <IonItem key={currentClass.id} detail={false} routerLink={`/${variant}/classes/${currentClass.id}`}>
                <IonCard className={styles.card}>
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
                </IonCard>
              </IonItem>
            })}

          </IonList>
        })}
      </IonContent>
    </>

  );
};

export default ClassBookingList;
