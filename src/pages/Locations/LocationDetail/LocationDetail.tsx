import type { FC } from 'react';
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import type { IonSegmentCustomEvent } from '@ionic/core';
import type { SegmentChangeEventDetail } from '@ionic/react';
import { IonContent, IonPage, IonSegment, IonSegmentButton, IonLabel, IonText } from '@ionic/react';
import { callOutline, globeOutline, locationOutline, mailOutline } from 'ionicons/icons';
import { CommonPageHeader, Loader } from 'src/components';
import type { LocationInfoContent } from '../../../types/locations';
import useLocationList from '../hooks/useLocationList';
import LocationHours from '../LocationHours';
import LocationInfo from '../LocationInfo';
import styles from '../Locations.module.scss';

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
      if (locationResult) {
        const locationFeed: LocationInfoContent[] = [
          {
            icon: locationOutline,
            label: `${locationResult.address.addressLine1} ${locationResult.address.city} ${locationResult.address.postalCode}`,
          },
          {
            icon: mailOutline,
            label: locationResult.email,
          },
          {
            icon: callOutline,
            label: locationResult.phone,
          },
          {
            icon: globeOutline,
            label: locationResult.url,
            class: 'danger',
          },
        ];
        return <LocationInfo locationFeed={locationFeed} />;
      }
    } else if (tab === ClassType.Hours) {
      return (
        <>
          <IonText className={styles.banner}>
            <p>{t('locations.contactHours')}</p>
          </IonText>
          <LocationHours location={locationResult} />
        </>
      );
    }
    return (
      <IonText className={styles.banner}>
        <p>{t('locations.notInformation')}</p>
      </IonText>
    );
  };

  const onSegmentChange = (e: IonSegmentCustomEvent<SegmentChangeEventDetail>) => {
    setSelectedSegment(e.detail.value as ClassType);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <CommonPageHeader title={locationResult?.name || t('locations.locationDetailDefault')} />
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
