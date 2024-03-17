import type { FC } from 'react';
import React from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonPage,
  IonText,
} from '@ionic/react';
import CommonPageHeader from '../../components/CommonPageHeader';
import type { TestCorsProps } from './TestCorsProps';

const TestCors: FC<TestCorsProps> = ({
  testCorsQuerySuccess,
  capacitorV4Result,
  browserFetchResult,
  testCorsWithCapacitorV4,
  testCorsWithBrowserFetch,
}) => {
  return (
    <IonPage>
      <CommonPageHeader title="Test CORS" />
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>With Capacitor v4+ API</IonCardSubtitle>
            <IonCardTitle>Bypass CORS</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText color={testCorsQuerySuccess ? 'success' : 'danger'}>{capacitorV4Result}</IonText>
          </IonCardContent>
          <IonButton fill="clear" onClick={testCorsWithCapacitorV4}>
            Make a call
          </IonButton>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>With Browser fetch API</IonCardSubtitle>
            <IonCardTitle>Fail CORS</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText color={!browserFetchResult?.includes('Error') ? 'success' : 'danger'}>
              {browserFetchResult}
            </IonText>
          </IonCardContent>
          <IonButton fill="clear" onClick={testCorsWithBrowserFetch}>
            Make a call
          </IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default TestCors;
