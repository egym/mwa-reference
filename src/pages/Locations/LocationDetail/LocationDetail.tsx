import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { IonContent, IonPage, IonSegment, IonSegmentButton, IonLabel, IonText } from '@ionic/react';
import { CommonPageHeader, Loader } from 'src/components';
import type { Location } from '../../../types';
import useLocation from '../hooks/useLocation';
import LocationHours from '../LocationHours';
import LocationInfo from '../LocationInfo';
import '../LocationItem.css';

enum ClassType {
  Location = 'location',
  Hours = 'hours',
}

const LocationDetail: FC = () => {
  const { t } = useTranslation();

  // @ts-ignore
  const { locationId } = useParams();
  const [selectedSegment, setSelectedSegment] = useState<ClassType>(ClassType.Location);
  const [locationResult, setLocationResult] = useState<Location>();
  const { loading, groupedLocations } = useLocation();

  useEffect(() => {
    if (!loading) {
      const location: Location = groupedLocations.filter((eachLocation) => eachLocation.uuid === locationId)[0];
      setLocationResult(location);
    }
  }, [loading, groupedLocations, locationId]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <CommonPageHeader title={locationResult?.name || 'Location Detail'} />
        <IonContent className="ion-padding">
          <IonSegment onIonChange={(e) => setSelectedSegment(e.detail.value as ClassType)} value={selectedSegment}>
            <IonSegmentButton value={ClassType.Location}>
              <IonLabel>{t('locations.tabLocation')}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value={ClassType.Hours}>
              <IonLabel>{t('locations.hours')}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {loading ? (
            <Loader />
          ) : selectedSegment === ClassType.Location ? (
            <LocationInfo location={locationResult} />
          ) : (
            <>
              <IonText className="ion-text-micro-wrap">
                <p>{t('locations.contactHours')}</p>
              </IonText>
              <LocationHours location={locationResult} />
            </>
          )}
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default LocationDetail;
