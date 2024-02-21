import type { FC } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { IonSegmentCustomEvent } from '@ionic/core';
import type { SegmentChangeEventDetail } from '@ionic/react';
import { IonContent, IonPage, IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import { CommonPageHeader, Loader } from 'src/components';
import type { LocationsDetailProps } from 'src/hooks/useLocations/LocationsPageProps';
import { LocationSegmentType } from 'src/types';
import LocationSegment from '../LocationSegment';

const LocationDetail: FC<LocationsDetailProps> = ({ locationDetail, loading }) => {
  const { t } = useTranslation();
  const [selectedSegment, setSelectedSegment] = useState<LocationSegmentType>(LocationSegmentType.Location);

  const onSegmentChange = (e: IonSegmentCustomEvent<SegmentChangeEventDetail>) => {
    setSelectedSegment(e.detail.value as LocationSegmentType);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <CommonPageHeader title={locationDetail?.name || t('locations.locationDetailDefault')} />
        <IonContent className="ion-padding">
          <IonSegment onIonChange={onSegmentChange} value={selectedSegment}>
            <IonSegmentButton value={LocationSegmentType.Location}>
              <IonLabel>{t('locations.tabLocation')}</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value={LocationSegmentType.Hours}>
              <IonLabel>{t('locations.hours')}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {loading ? <Loader /> : <LocationSegment location={locationDetail} locationSegment={selectedSegment} />}
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default LocationDetail;
