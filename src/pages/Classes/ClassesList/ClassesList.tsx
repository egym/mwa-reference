import type { FC } from 'react';
import {
  IonChip,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonPage,
} from '@ionic/react';
import { format } from 'date-fns';
import { filter } from 'ionicons/icons';
import { CommonPageHeader, Loader } from 'src/components';
import styles from './ClassesList.module.scss';
import type { ClassesListProps } from './ClassesListProps';
import ClassBookingItem from './components/ClassBookingItem';
import { weekDays } from './data';

const ClassesList: FC<ClassesListProps> = ({ groupedClasses, loading }) => {
  return (
    <IonPage>
      <CommonPageHeader title="Classes list" />
      <IonContent>
        <div className={styles.flex}>
          <div style={{ padding: '10px' }}>
            <IonChip color="primary" className={styles.chip}>
              <IonIcon icon={filter} />
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
                  {currentDay && <div className={styles.weekDayItemCurrentDot} />}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          {loading ? (
            <Loader />
          ) : (
            Object.keys(groupedClasses).map((classesDate) => {
              return (
                <IonList lines="none" key={classesDate} className={styles.list}>
                  <IonListHeader className={styles.listHeader}>
                    <h6>{classesDate}</h6>
                  </IonListHeader>
                  {groupedClasses[classesDate].map((currentClass) => {
                    return (
                      <IonItem
                        className={styles.listItem}
                        key={currentClass.id}
                        detail={false}
                        routerLink={`/classes/${currentClass.id}`}
                      >
                        <ClassBookingItem currentClass={currentClass} />
                      </IonItem>
                    );
                  })}
                </IonList>
              );
            })
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ClassesList;
