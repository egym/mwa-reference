import { FC } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterLink, IonList, IonItem } from '@ionic/react';

const Home: FC = () => {
  const variant = window.AndroidInteractor ? '/plain-webview' : '/portals'
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList lines="none">
          <IonItem>
            <IonRouterLink routerLink={`${variant}/classes`}>Classes list</IonRouterLink>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
