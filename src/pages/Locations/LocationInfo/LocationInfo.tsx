import type { FC } from 'react';
import { IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';
import type { LocationInfoContent } from '../../../types/locations';
import styles from '../Locations.module.scss';

interface LocationInfoProps {
  locationFeed: LocationInfoContent[];
}

const LocationInfo: FC<LocationInfoProps> = ({ locationFeed }: LocationInfoProps) => {
  return (
    <IonList lines="none" className={styles.customListBackground}>
      {locationFeed.map((eachLocationLabel) => (
        <IonItem className={styles.customItemBorder} detail={false}>
          <IonIcon icon={eachLocationLabel.icon} color={`${eachLocationLabel.class || 'dark'}`} slot="start"></IonIcon>
          <IonLabel color={`${eachLocationLabel.class || 'dark'}`}>{eachLocationLabel.label}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default LocationInfo;
