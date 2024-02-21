import type { FC } from 'react';
import { IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';
import styles from 'src/styles/Locations.scss';
import type { LocationInfoContent } from 'src/types';

interface LocationInfoProps {
  locationFeed: LocationInfoContent[];
}

const LocationInfo: FC<LocationInfoProps> = ({ locationFeed }: LocationInfoProps) => {
  return (
    <IonList lines="full" className={styles.list}>
      {locationFeed.map((eachLocationLabel) => (
        <IonItem detail={false}>
          <IonIcon icon={eachLocationLabel.icon} color={`${eachLocationLabel.class || 'dark'}`} slot="start"></IonIcon>
          <IonLabel color={`${eachLocationLabel.class || 'dark'}`}>{eachLocationLabel.label}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default LocationInfo;
