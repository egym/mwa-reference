import type { FC } from 'react';
import React, { useCallback, useMemo, useState } from 'react';
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
  IonText,
} from '@ionic/react';
import CommonPageHeader from '../../components/CommonPageHeader';
import { useTestCors } from '../../hooks';

const TestCors: FC = () => {
  const { testCorsQuery } = useTestCors();

  const [communityHttpPluginResult, setCommunityHttpPluginResult] = useState<string>();
  const [browserFetchResult, setBrowserFetchResult] = useState<string>();
  const capacitorV4Result = useMemo<string>(() => {
    if (testCorsQuery.isFetching) return 'Fetching...';

    return testCorsQuery.data?.message || String(testCorsQuery.error || '');
  }, [testCorsQuery.data?.message, testCorsQuery.error, testCorsQuery.isFetching]);

  const testCorsWithCapacitorV4 = useCallback(async () => {
    await testCorsQuery.refetch();
  }, [testCorsQuery]);

  const testCorsWithCommunityHttpPlugin = useCallback(async () => {
    try {
      setCommunityHttpPluginResult('Fetching...');
      const response = await Http.get({
        url: 'https://mwa-test-be.herokuapp.com/test-cors',
      });

      setCommunityHttpPluginResult(response.data.message);
    } catch (e) {
      // @ts-ignore
      console.log(e.message);
      // @ts-ignore
      setCommunityHttpPluginResult(`Error: ${e.message}`);
    }
  }, []);

  const testCorsWithBrowserFetch = useCallback(async () => {
    try {
      setBrowserFetchResult('Fetching...');
      const test = await fetch('https://mwa-test-be.herokuapp.com/test-cors');
      const data = await test.json();

      setBrowserFetchResult(data.data.message);
    } catch (e) {
      // @ts-ignore
      setBrowserFetchResult(`Error: ${e.message}`);
    }
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
            <IonText color={testCorsQuery.data?.message ? 'success' : 'danger'}>{capacitorV4Result}</IonText>
          </IonCardContent>
          <IonButton fill="clear" onClick={testCorsWithCapacitorV4}>
            Make a call
          </IonButton>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>With HTTP Community API</IonCardSubtitle>
            <IonCardTitle>Bypass CORS</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText color={!communityHttpPluginResult?.includes('Error') ? 'success' : 'danger'}>
              {communityHttpPluginResult}
            </IonText>
          </IonCardContent>
          <IonButton fill="clear" onClick={testCorsWithCommunityHttpPlugin}>
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
