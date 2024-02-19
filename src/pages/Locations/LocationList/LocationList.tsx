import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IonList, IonItem, IonText } from '@ionic/react';
import type { Location } from '../../../types';
import { routeUrls } from '../../../utils/constants';
import styles from '../Locations.module.scss';

interface LocationListProps {
  locations: Location[];
}

const LocationList: FC<LocationListProps> = ({ locations }: LocationListProps) => {
  const { t } = useTranslation();

  return (
    <>
      {locations.length > 0 ? (
        locations.map((eachLocation: Location) => (
          <IonList lines="none" key={eachLocation.uuid} className={styles.customListBackground}>
            <IonItem
              className={styles.customItemBorder}
              detail={false}
              routerLink={`${routeUrls.locations}/${eachLocation.uuid}`}
              button
            >
              <IonText className={styles.textWrapper} class="ion-text-wrap">
                <h4>{eachLocation.name}</h4>
                <p>{eachLocation.address.addressLine1}</p>
                <p>
                  {eachLocation.address.city}, {eachLocation.address.country}
                </p>
              </IonText>
            </IonItem>
          </IonList>
        ))
      ) : (
        <IonText className={styles.banner}>
          <p>{t('locations.gymNotFound')}</p>
        </IonText>
      )}
    </>
  );
};

export default LocationList;
