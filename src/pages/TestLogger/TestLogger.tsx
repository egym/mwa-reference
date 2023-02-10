import type { FC } from 'react';
import React from 'react';
import { IonContent, IonItem, IonLabel, IonPage } from '@ionic/react';
import CommonPageHeader from '../../components/CommonPageHeader';
import type { TestLoggerProps } from './TestLoggerProps';

const TestLogger: FC<TestLoggerProps> = ({ successQuery, error500Query, error404Mutation, error400Mutation }) => {
  return (
    <IonPage>
      <CommonPageHeader title="Test Logger" />
      <IonContent fullscreen>
        <IonItem button detail={true} onClick={() => successQuery.refetch()}>
          <IonLabel>
            <h3>Make a success request</h3>
            <p>
              successQuery -{' '}
              {successQuery.isFetching
                ? 'Fetching..'
                : (successQuery.isFetched && 'Open debug view and see logs') || 'Click me'}
            </p>
          </IonLabel>
        </IonItem>

        <IonItem button detail={true} onClick={() => error500Query.refetch()}>
          <IonLabel>
            <h3>Make a 500 error request</h3>
            <p>
              error500Query -{' '}
              {error500Query.isFetching
                ? 'Fetching..'
                : (error500Query.isFetched && 'Open debug view and see logs') || 'Click me'}
            </p>
          </IonLabel>
        </IonItem>

        <IonItem button detail={true} onClick={() => error400Mutation.mutateAsync({})}>
          <IonLabel>
            <h3>POST request</h3>
            <p>
              error400Mutation -{' '}
              {error400Mutation.isLoading
                ? 'Loading..'
                : ((error400Mutation.isSuccess || error400Mutation.isError) && 'Open debug view and see logs') ||
                  'Click me'}
            </p>
          </IonLabel>
        </IonItem>

        <IonItem button detail={true} onClick={() => error404Mutation.mutateAsync({})}>
          <IonLabel>
            <h3>PUT request</h3>
            <p>
              error404Mutation -{' '}
              {error404Mutation.isLoading
                ? 'Loading..'
                : ((error404Mutation.isSuccess || error404Mutation.isError) && 'Open debug view and see logs') ||
                  'Click me'}
            </p>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default TestLogger;
