import type { FC } from 'react';
import React from 'react';
import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonPage } from '@ionic/react';
import type { BarcodeScannerProps } from './BarcodeScannerProps';

const BarcodeScanner: FC<BarcodeScannerProps> = ({ scanBarcode }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Scan result</IonCardTitle>
          </IonCardHeader>
          <IonButton fill="clear" onClick={scanBarcode}>
            Start scan
          </IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default BarcodeScanner;
