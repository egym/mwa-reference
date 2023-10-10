import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonContent,
  IonFooter,
  IonIcon,
  IonLabel,
  IonPage,
  IonText,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { arrowForward, calendarOutline } from 'ionicons/icons';
import { CommonPageHeader, Loader } from 'src/components';
import SpotsLeft from '../components/SpotsLeft';
import styles from './ClassDetails.module.scss';
import type { ClassDetailsProps } from './ClassDetailsProps';

const ClassDetails: FC<ClassDetailsProps> = ({ classDetails, loading, dayFormatted, weekDayFormatted }) => {
  const { t } = useTranslation();
  const { routeInfo } = useIonRouter();

  const fromOpenFeature = new URLSearchParams(routeInfo.search).get('openFeature');

  return (
    <IonPage>
      <CommonPageHeader
        // @ts-ignore (for testing <ErrorBoundary> and wsod logs, uncomment second line to see the page)
        // title={classDetails?.detail.throwerror || '...'}
        root={Boolean(fromOpenFeature)}
        title={classDetails?.name || '...'}
      />
      <IonContent>
        {loading ? (
          <Loader />
        ) : (
          <IonCard className={styles.card}>
            <img src={classDetails.image} alt={classDetails.image} />
            <IonCardHeader>
              <IonCardTitle>{classDetails.name}</IonCardTitle>
              <div className={styles.subHeader}>
                <IonChip color="primary" className={styles.chip}>
                  <IonLabel>Open for booking</IonLabel>
                </IonChip>
                <SpotsLeft />
              </div>
            </IonCardHeader>
            <IonCardContent>
              <div className={styles.contentItem}>
                <IonText className={styles.label}>
                  <h3>Schedule</h3>
                </IonText>
                <div className={styles.scheduleBlock}>
                  <div className={styles.scheduleBlockDate}>
                    <span>{weekDayFormatted}</span>
                    <span>{dayFormatted}</span>
                  </div>
                  <div className={styles.scheduleBlockContent}>
                    <div className={styles.scheduleBlockTime}>
                      <span>{classDetails.time}</span>
                    </div>
                    <div className={styles.iconWrapper}>
                      <IonIcon icon={calendarOutline} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contentItem}>
                <IonText className={styles.label}>
                  <h3>Location</h3>
                </IonText>
                <div className={styles.flexRow}>
                  <IonText className={styles.label}>
                    <h2>{classDetails.gymName}</h2>
                  </IonText>
                  <div className={styles.iconWrapper} style={{ marginTop: '-25px' }}>
                    <IonIcon color="" icon={arrowForward} size="large" />
                  </div>
                </div>
              </div>
              <div className={styles.contentItem}>
                <IonText className={styles.label}>
                  <h3>Description</h3>
                </IonText>
                <IonText className={styles.label}>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi aperiam delectus ducimus magni
                    optio ratione reiciendis repellat tempore ullam. Cumque earum ex mollitia odio, provident sequi
                    velit? Fugit, maxime?
                  </h2>
                </IonText>
              </div>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton
            color="primary"
            fill="solid"
            size="default"
            expand="block"
            className={styles.bookBtn}
            onClick={() => alert('Book a class')}
          >
            {t('classes.bookClass')}
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ClassDetails;
