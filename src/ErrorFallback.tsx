import type { FC } from 'react';
import { IonApp, IonContent, IonPage } from '@ionic/react';
import { CommonPageHeader } from './components';

const ErrorFallback: FC = () => {
  return (
    <IonApp>
      <IonPage>
        <CommonPageHeader title="Oops..." />
        <IonContent fullscreen className="ion-padding">
          Something went wrong...
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default ErrorFallback;
