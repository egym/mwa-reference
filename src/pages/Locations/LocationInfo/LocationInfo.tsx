import type { FC } from 'react';
import { IonList, IonItem, IonIcon, IonLabel, IonText } from '@ionic/react';
import { callOutline, globeOutline, locationOutline, mailOutline } from 'ionicons/icons';
import type { Location } from '../../../types';
import styles from '../LocationItem.module.scss';

interface LocationProp {
  location: Location | undefined;
}

const LocationInfo: FC<LocationProp> = ({ location }: LocationProp) => {
  return (
    <>
      {location ? (
        <IonList lines="none" className={styles.listBackground}>
          {(location.address.addressLine1 || location.address.city || location.address.postalCode) && (
            <IonItem className={styles.itemCursor} detail={false}>
              <IonIcon icon={locationOutline} slot="start"></IonIcon>
              <IonLabel>
                {location.address.addressLine1} {location.address.city} {location.address.postalCode}
              </IonLabel>
            </IonItem>
          )}
          {location.email && (
            <IonItem className={styles.itemCursor} detail={false}>
              <IonIcon icon={mailOutline} slot="start"></IonIcon>
              <IonLabel>{location.email}</IonLabel>
            </IonItem>
          )}

          {location.phone && (
            <IonItem className={styles.itemCursor} detail={false}>
              <IonIcon icon={callOutline} slot="start"></IonIcon>
              <IonLabel>{location.phone}</IonLabel>
            </IonItem>
          )}

          {location.url && (
            <IonItem className={`${styles.itemCursor} ${styles.redText}`} detail={false}>
              <IonIcon icon={globeOutline} slot="start"></IonIcon>
              <IonLabel>{location.url}</IonLabel>
            </IonItem>
          )}
        </IonList>
      ) : (
        <IonText className={styles.banner}>
          <p>Not Information Found</p>
        </IonText>
      )}
    </>
  );
};

export default LocationInfo;
