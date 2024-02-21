import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IonList, IonItem, IonText } from '@ionic/react';
import styles from 'src/styles/Locations.scss';
import type { Location } from 'src/types';
import { routeUrls } from 'src/utils/constants';

interface LocationListProps {
  locations: Location[];
}

const LocationList: FC<LocationListProps> = ({ locations }: LocationListProps) => {
  const { t } = useTranslation();

  return (
    <>
      {locations.length > 0 ? (
        <IonList lines="full" className={styles.list}>
          {locations.map((eachLocation: Location) => (
            <IonItem
              detail={false}
              key={eachLocation.uuid}
              routerLink={routeUrls.locationById({ locationId: eachLocation.uuid })}
              button
            >
              <IonText class="ion-text-wrap">
                <h4>{eachLocation.name}</h4>
                <p>{eachLocation.address.addressLine1}</p>
                <p>
                  {eachLocation.address.city}, {eachLocation.address.country}
                </p>
              </IonText>
            </IonItem>
          ))}
        </IonList>
      ) : (
        <IonText className={styles.banner}>
          <p>{t('locations.gymNotFound')}</p>
        </IonText>
      )}
    </>
  );
};

export default LocationList;
