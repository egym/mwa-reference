import React, { FC } from 'react';
import {
  IonContent,
  IonPage,
  IonRouterLink,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonCardContent,
  IonText
} from '@ionic/react';
import CommonPageHeader from "../../components/CommonPageHeader";
import TestCapacitorPlugins from '../../components/TestCapacitorPlugins';
import TestAuth from "../../components/TestAuth";

const Home: FC = () => {
  return (
    <IonPage>
      <CommonPageHeader title="Home page" />
      <IonContent fullscreen style={{ marginBottom: '100px' }}>
        <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
          <IonText>
            10 - {window.location.href}
          </IonText>
        </div>
        <TestAuth />
        <IonCard>

          <IonCardHeader>
            <IonCardTitle>Navigation</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonRouterLink routerLink={`/classes`}>Go to classes list - route "/classes"</IonRouterLink>
          </IonCardContent>

        </IonCard>
        <TestCapacitorPlugins />
      </IonContent>
    </IonPage>
  );
};

export default Home;
