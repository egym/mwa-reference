import type { FC } from 'react';
import React from 'react';
import { IonContent, IonItem, IonList, IonPage } from '@ionic/react';
import { CommonPageHeader } from '../../components';
import type { GeolocationProps } from './GeolocationProps';

const Geolocation: FC<GeolocationProps> = ({ checkPermissions, requestPermissions, showCurrentCoordinates }) => {
  return (
    <IonPage>
      <CommonPageHeader title="Geolocation" />
      <IonContent>
        <IonList>
          <IonItem button onClick={requestPermissions}>
            Request permissions
          </IonItem>
          <IonItem button onClick={checkPermissions}>
            Check permissions
          </IonItem>
          <IonItem button onClick={showCurrentCoordinates}>
            Current coordinates
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Geolocation;
