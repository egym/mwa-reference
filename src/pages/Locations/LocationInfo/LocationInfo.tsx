import type { FC } from 'react';
import { IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';
import type { LocationInfoProps } from '../../../types/locations';
import styles from '../Locations.module.scss';

interface LocationProp {
  locationFeed: LocationInfoProps[];
}

const LocationInfo: FC<LocationProp> = ({ locationFeed }: LocationProp) => {
  return (
    <IonList lines="none" className={styles.listBackground}>
      {locationFeed.map((eachLocationLabel) => (
        <IonItem className={`${styles.itemCursor} ${eachLocationLabel.class || ''}`} detail={false}>
          <IonIcon icon={eachLocationLabel.icon} slot="start"></IonIcon>
          <IonLabel>{eachLocationLabel.label}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default LocationInfo;
