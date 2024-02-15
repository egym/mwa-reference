import type { FC } from 'react';
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { IonContent, IonPage, IonSegment, IonSegmentButton, IonLabel, IonText } from '@ionic/react';
import { CommonPageHeader, Loader } from 'src/components';
import useLocationList from '../hooks/useLocationList';
import styles from '../Location.module.scss';
import LocationHours from '../LocationHours';
import LocationInfo from '../LocationInfo';

enum ClassType {
  Location = 'location',
  Hours = 'hours',
}

type LocationItem = {
  locationId: string;
};

const LocationDetail: FC = () => {
  const { t } = useTranslation();

  const { locationId } = useParams<LocationItem>();
  const { loading, locations } = useLocationList();

  const [selectedSegment, setSelectedSegment] = useState<ClassType>(ClassType.Location);

  const locationResult = useMemo(() => {
    if (!loading) {
      return locations.find((eachLocation) => eachLocation.uuid === locationId);
    }
    return undefined;
  }, [loading, locations, locationId]);

  const generateSegment = (tab: ClassType): JSX.Element => {
    if (tab === ClassType.Location) {
      return <LocationInfo location={locationResult} />;
    } else if (tab === ClassType.Hours) {
      return (
        <>
          <IonText className={styles.banner}>
            <p>{t('locations.contactHours')}</p>
          </IonText>
          <LocationHours location={locationResult} />
        </>
      );
    } else {
      return <></>;
    }
  };

  const onSegmentChange = (e: any) => {
    setSelectedSegment(e.detail.value as ClassType);
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <CommonPageHeader title={locationResult?.name || 'Location Detail'} />
        <IonContent className="ion-padding">
          <IonSegment onIonChange={onSegmentChange} value={selectedSegment}>
            <IonSegmentButton value={ClassType.Location}>
              <IonLabel>{t('locations.tabLocation')}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value={ClassType.Hours}>
              <IonLabel>{t('locations.hours')}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {loading ? <Loader /> : generateSegment(selectedSegment)}
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default LocationDetail;
