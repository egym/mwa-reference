import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IonList, IonItem, IonText } from '@ionic/react';
import '../LocationItem.css';
import type { Location } from '../../../types';

interface LocationProp {
  location: Location | undefined;
}

const LocationHours: FC<LocationProp> = ({ location }: LocationProp) => {
  const { t } = useTranslation();
  const amPmFormat = (hour24: string) => {
    const onDate = new Date(`2021-01-01T${hour24}:00`);
    const hours = onDate.getHours() % 12 || 12;
    const ampm = onDate.getHours() < 12 ? 'AM' : 'PM';

    return hours + ' ' + ampm;
  };

  return (
    <>
      {location?.workingHours ? (
        Object.entries(location.workingHours).map((eachHour) => {
          return (
            <IonList lines="none" key={eachHour[0]} className="custom-list">
              <IonItem className="custom-item" detail={false}>
                <IonText class="ion-text-wrap">
                  <div className="minorLeft">
                    <h4>{eachHour[0]}</h4>
                  </div>
                  <div className="minorRight">
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
        <IonText className="ion-text-micro-wrap">
          <p>{t('locations.notHours')}</p>
        </IonText>
      )}
    </>
  );
};

export default LocationHours;
