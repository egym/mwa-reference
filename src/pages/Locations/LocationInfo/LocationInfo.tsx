import type { FC } from 'react';
import { IonList, IonItem, IonIcon, IonLabel, IonText } from '@ionic/react';
import '../LocationItem.css';
import { callOutline, globeOutline, locationOutline, mailOutline } from 'ionicons/icons';
import type { Location } from '../../../types';

interface LocationProp {
  location: Location | undefined;
}

const LocationInfo: FC<LocationProp> = ({ location }: LocationProp) => {
  return (
    <>
      {location ? (
        <IonList lines="none" className="custom-list">
          {(location.address.addressLine1 || location.address.city || location.address.postalCode) && (
            <IonItem className="custom-item" detail={false}>
              <IonIcon icon={locationOutline} slot="start"></IonIcon>
              <IonLabel>
                {location.address.addressLine1} {location.address.city} {location.address.postalCode}
              </IonLabel>
            </IonItem>
          )}
          {location.email && (
            <IonItem className="custom-item" detail={false}>
              <IonIcon icon={mailOutline} slot="start"></IonIcon>
              <IonLabel>{location.email}</IonLabel>
            </IonItem>
          )}

          {location.phone && (
            <IonItem className="custom-item" detail={false}>
              <IonIcon icon={callOutline} slot="start"></IonIcon>
              <IonLabel>{location.phone}</IonLabel>
            </IonItem>
          )}

          {location.url && (
            <IonItem className="custom-item redOne" detail={false}>
              <IonIcon icon={globeOutline} slot="start"></IonIcon>
              <IonLabel>{location.url}</IonLabel>
            </IonItem>
          )}
        </IonList>
      ) : (
        <IonText className="ion-text-micro-wrap">
          <p>Not Information Found</p>
        </IonText>
      )}
    </>
  );
};

export default LocationInfo;
