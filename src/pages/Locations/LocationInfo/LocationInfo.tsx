import type { FC } from 'react';
import { IonList, IonItem, IonIcon, IonLabel, IonText } from '@ionic/react';
import type { LocationInfoProps } from '../../../types/locations';
import styles from '../Locations.module.scss';

interface LocationProp {
  locationFeed: LocationInfoProps[];
}

const LocationInfo: FC<LocationProp> = ({ locationFeed }: LocationProp) => {
  return (
    <IonList lines="none" className={styles.listBackground}>
      {locationFeed.map((eachLocationLabel) => (
        <IonItem className={styles.itemCursor} detail={false}>
          <IonIcon icon={eachLocationLabel.icon} color={`${eachLocationLabel.class || 'dark'}`} slot="start"></IonIcon>
          <IonLabel color={`${eachLocationLabel.class || 'dark'}`}>{eachLocationLabel.label}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default LocationInfo;
