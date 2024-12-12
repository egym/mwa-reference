import type { FC } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonText,
} from '@ionic/react';
import { motion, AnimatePresence } from 'framer-motion';
import { addOutline } from 'ionicons/icons';
import FeatureWidgetTitle from '../../components/FeatureWidgetTitle';
import styles from './LatestActivityWidgetPage.module.scss';
import type { LatestActivityWidgetPageProps } from './LatestActivityWidgetPageProps';

const LatestActivityWidgetPage: FC<LatestActivityWidgetPageProps> = ({
  isEmptyState,
  viewAllClick,
  title,
  isLoading,
  contentRef,
  shouldShowLogWorkoutButton,
  handleLogWorkoutClick,
  latestWorkoutsHistory,
}) => {
  const { t } = useTranslation();

  return (
    <IonPage className={styles.page}>
      <IonContent scrollY={false} className={styles.ionContent}>
        <AnimatePresence>
          {isLoading && (
            <motion.iframe
              key="latest-activity-widget-skeleton"
              className={styles.iframeSkeleton}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              title="Training Plans Widget Skeleton"
              src="/widgets-skeletons/workouts/latest-activity-widget.html"
              style={{ border: 'none', width: '100%', height: '100%' }}
            />
          )}

          <div className={`${styles.widget} ${isLoading && styles.widgetLoading}`} ref={contentRef}>
            <FeatureWidgetTitle title={title} buttonHandler={!isEmptyState && !isLoading ? viewAllClick : undefined} />
            <IonCard className={`${styles.card} ${isEmptyState && styles.cardEmptyState}`}>
              <IonCardContent className={styles.cardContent}>
                {isEmptyState ? (
                  <div className="flex-column justify-center align-center text-center w-100 h-100 fade-in-05">
                    <IonText color="black80" className="inline-block mt-16 mb-8">
                      {t('workoutsHistory.widget.emptyState.title')}
                    </IonText>
                    <IonText color="black80">{t('workoutsHistory.widget.emptyState.description')}</IonText>
                  </div>
                ) : (
                  <IonList className="p-0 fade-in-05">
                    {latestWorkoutsHistory.map((workout) => {
                      return (
                        <IonItem key={workout.completedAt}>
                          <div style={{ padding: '12px 0', display: 'flex', flexDirection: 'column' }}>
                            <IonText color="black80" className="inline-block mb-8">
                              {workout.completedAt}
                            </IonText>
                            <IonText color="black">{workout.exercises[0].label}</IonText>
                          </div>
                        </IonItem>
                      );
                    })}
                  </IonList>
                )}
              </IonCardContent>
            </IonCard>

            {shouldShowLogWorkoutButton && (
              <IonButton size="large" className="w-100 mt-16" onClick={handleLogWorkoutClick} disabled={isLoading}>
                <IonIcon icon={addOutline} className={styles.logWorkoutButtonIcon} />
                {t('logWorkout')}
              </IonButton>
            )}
          </div>
        </AnimatePresence>
      </IonContent>
    </IonPage>
  );
};

export default LatestActivityWidgetPage;
