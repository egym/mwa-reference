import type { FC } from 'react';
import React, { useCallback } from 'react';
import { Http } from '@capacitor-community/http';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonPage,
} from '@ionic/react';
import CommonPageHeader from '../../components/CommonPageHeader';
import { useTestCors } from '../../hooks';

const TestCors: FC = () => {
  const { testCorsQuery } = useTestCors();

  console.log('testCorsQuery', testCorsQuery);

  const testCorsWithCapacitorV4 = useCallback(async () => {
    try {
      const response = await testCorsQuery.refetch();
      console.log('response cap v4+', response);
    } catch (e) {
      console.log(e);
    }
  }, [testCorsQuery]);

  const testCorsWithCommunityHttpPlugin = useCallback(async () => {
    try {
      const response = await Http.get({
        url: 'https://mwa-test-be.herokuapp.com/test-cors',
      });

      console.log('response community http', response);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const testCorsWithBrowserFetch = useCallback(async () => {
    const test = await fetch('https://floating-bayou-00569.herokuapp.com/test-cors');
    const data = await test.json();

    console.log('data', data);
  }, []);

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
            <IonButton onClick={testCorsWithCapacitorV4}>Make a call</IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>With HTTP Community API</IonCardSubtitle>
            <IonCardTitle>Bypass CORS</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton onClick={testCorsWithCommunityHttpPlugin}>Make a call</IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>With Browser fetch API</IonCardSubtitle>
            <IonCardTitle>Fail CORS</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton onClick={testCorsWithBrowserFetch}>Make a call</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default TestCors;
