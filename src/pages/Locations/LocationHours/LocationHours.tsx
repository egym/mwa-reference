import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IonList, IonItem, IonText, IonLabel } from '@ionic/react';
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
        <IonList lines="full" className={styles.customListBackground}>
          {Object.entries(location.workingHours).map((eachHour) => {
            return (
              <IonItem key={eachHour[0]} detail={false}>
                <IonLabel>
                  <b>{eachHour[0]}</b>
                </IonLabel>
                <IonLabel>
                  {amPmFormat(eachHour[1].split('-')[0])}-{amPmFormat(eachHour[1].split('-')[1])}
                </IonLabel>
              </IonItem>
            );
          })}
        </IonList>
      ) : (
        <IonText className={styles.banner}>
          <p>{t('locations.notHours')}</p>
        </IonText>
      )}
    </>
  );
};

export default LocationHours;
