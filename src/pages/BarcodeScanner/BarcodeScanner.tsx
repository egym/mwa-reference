import type { FC } from 'react';
import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonPage } from '@ionic/react';
import CommonPageHeader from 'src/components/CommonPageHeader/CommonPageHeader';
import type { BarcodeScannerProps } from './BarcodeScannerProps';

const BarcodeScanner: FC<BarcodeScannerProps> = ({ scanBarcode, scannerResult }) => {
  return (
    <IonPage>
      <CommonPageHeader title="Barcode Scanner" />
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Scan result</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>{scannerResult}</p>
            <IonButton fill="clear" onClick={scanBarcode}>
              Start scan
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default BarcodeScanner;
