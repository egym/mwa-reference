import type { FC } from 'react';
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import type { IonSegmentCustomEvent } from '@ionic/core';
import type { SegmentChangeEventDetail } from '@ionic/react';
import { IonContent, IonPage, IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import { CommonPageHeader, Loader } from 'src/components';
import { LocationSegmentType } from '../../../types';
import useLocationList from '../hooks/useLocationList';
import LocationSegment from '../LocationSegment';

type LocationItem = {
  locationId: string;
};

const LocationDetail: FC = () => {
  const { t } = useTranslation();

  const { locationId } = useParams<LocationItem>();
  const { loading, locations } = useLocationList();

  const [selectedSegment, setSelectedSegment] = useState<LocationSegmentType>(LocationSegmentType.Location);

  const locationResult = useMemo(() => {
    if (!loading) {
      return locations.find((eachLocation) => eachLocation.uuid === locationId);
    }
    return undefined;
  }, [loading, locations, locationId]);

  const onSegmentChange = (e: IonSegmentCustomEvent<SegmentChangeEventDetail>) => {
    setSelectedSegment(e.detail.value as LocationSegmentType);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <CommonPageHeader title={locationResult?.name || t('locations.locationDetailDefault')} />
        <IonContent className="ion-padding">
          <IonSegment onIonChange={onSegmentChange} value={selectedSegment}>
            <IonSegmentButton value={LocationSegmentType.Location}>
              <IonLabel>{t('locations.tabLocation')}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value={LocationSegmentType.Hours}>
              <IonLabel>{t('locations.hours')}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {loading ? <Loader /> : <LocationSegment location={locationResult} locationSegment={selectedSegment} />}
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default LocationDetail;
