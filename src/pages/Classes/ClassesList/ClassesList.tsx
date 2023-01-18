import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IonChip, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonPage } from '@ionic/react';
import { filter } from 'ionicons/icons';
import { CommonPageHeader, Loader } from 'src/components';
import styles from './ClassesList.module.scss';
import type { ClassesListProps } from './ClassesListProps';
import ClassBookingItem from './components/ClassBookingItem';

const ClassesList: FC<ClassesListProps> = ({ groupedClasses, loading, weekDays }) => {
  const { t } = useTranslation();

  return (
    <IonPage>
      <CommonPageHeader title={t('classes.listTitle')} />
      <IonContent>
        <div className={styles.flex}>
          <div style={{ padding: '10px' }}>
            <IonChip color="primary" className={styles.chip}>
              <IonIcon icon={filter} />
              <IonLabel>{t('common.filters')}</IonLabel>
            </IonChip>
            <IonChip color="primary" outline className={styles.chipOutline}>
              <IonLabel>{t('classes.allClasses')}</IonLabel>
            </IonChip>
            <IonChip color="primary" outline className={styles.chipOutline}>
              <IonLabel>{t('classes.allClassTypes')}</IonLabel>
            </IonChip>
          </div>
          <div className={styles.weekDaysWrapper}>
            {weekDays.map(({ key, date, selected }) => {
              return (
                <div className={[styles.weekDayItem, selected ? styles.weekDayItemCurrent : ''].join(' ')} key={key}>
                  <span style={{ fontSize: '12px', lineHeight: '16px', fontWeight: 500 }}>
                    {date.toLocaleString({ weekday: 'short' })}
                  </span>
                  <span style={{ fontSize: '16px', lineHeight: '20px', fontWeight: 700 }}>
                    {date.toLocaleString({ day: '2-digit' })}
                  </span>
                  {selected && <div className={styles.weekDayItemCurrentDot} />}
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
