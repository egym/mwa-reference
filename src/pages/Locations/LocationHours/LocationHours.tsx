import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IonList, IonItem, IonText } from '@ionic/react';
import type { Location } from '../../../types';
import styles from '../Locations.module.scss';

interface LocationHoursProps {
  location?: Location;
}

const amPmFormat = (hour24: string) => {
  const onDate = new Date(`2021-01-01T${hour24}:00`);
  const hours = onDate.getHours() % 12 || 12;
  const ampm = onDate.getHours() < 12 ? 'AM' : 'PM';
  return hours + ' ' + ampm;
};

const LocationHours: FC<LocationHoursProps> = ({ location }: LocationHoursProps) => {
  const { t } = useTranslation();

  return (
    <>
      {location?.workingHours ? (
        Object.entries(location.workingHours).map((eachHour) => {
          return (
            <IonList lines="none" key={eachHour[0]} className={styles.customListBackground}>
              <IonItem className={styles.customItemBorder} detail={false}>
                <IonText className={styles.textWrapper} class="ion-text-wrap">
                  <div className={styles.minorLeft}>
                    <h4>{eachHour[0]}</h4>
                  </div>
                  <div className={styles.minorRight}>
                    <p>
                      {amPmFormat(eachHour[1].split('-')[0])}-{amPmFormat(eachHour[1].split('-')[1])}
                    </p>
                  </div>
                </IonText>
              </IonItem>
            </IonList>
          );
        })
      ) : (
        <IonText className={styles.banner}>
          <p>{t('locations.notHours')}</p>
        </IonText>
      )}
    </>
  );
};

export default LocationHours;
