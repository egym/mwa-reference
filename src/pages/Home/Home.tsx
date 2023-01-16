import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonPage, IonRouterLink } from '@ionic/react';
import CommonPageHeader from 'src/components/CommonPageHeader';

const Home: React.FC = () => {
  return (
    <IonPage>
      <CommonPageHeader root title="Home" />
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Navigation</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="flex-column">
              <IonRouterLink routerLink={`/classes`}>Classes</IonRouterLink>
              <IonRouterLink routerLink={`/test-cors`}>Test Cors</IonRouterLink>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
