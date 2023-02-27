import type { FC } from 'react';
import React from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonPage,
  IonText,
  IonToolbar,
} from '@ionic/react';
import { CommonPageHeader } from 'src/components';
import type { BarcodeScannerProps } from './BarcodeScannerProps';

const BarcodeScanner: FC<BarcodeScannerProps> = ({ barcodeActive, startScan, stopScan, scanResult, error }) => {
  return (
    <IonPage>
      {!barcodeActive && <CommonPageHeader title="Barcode Scanner" />}
      <IonContent fullscreen>
        {!barcodeActive && (
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
        )}
      </IonContent>
      {barcodeActive && (
        <IonFooter>
          <IonToolbar>
            <IonButton expand="full" onClick={stopScan}>
              Stop
            </IonButton>
          </IonToolbar>
        </IonFooter>
      )}
    </IonPage>
  );
};

export default BarcodeScanner;
