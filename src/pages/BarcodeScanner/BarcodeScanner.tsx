import type { FC } from 'react';
import React from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonPage,
  IonText,
} from '@ionic/react';
import { CommonPageHeader } from 'src/components';
import type { BarcodeScannerProps } from './BarcodeScannerProps';

const BarcodeScanner: FC<BarcodeScannerProps> = ({ startScan, scanResult, error }) => {
  return (
    <IonPage>
      <CommonPageHeader title="Barcode Scanner" />
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Scan result</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText color={!error ? 'success' : 'danger'}>{scanResult}</IonText>
          </IonCardContent>
          <IonButton fill="clear" onClick={startScan}>
            Start scan
          </IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default BarcodeScanner;
