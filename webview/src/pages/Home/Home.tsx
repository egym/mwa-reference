import { FC } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterLink, IonList, IonItem } from '@ionic/react';

const Home: FC = () => {
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
            <IonRouterLink routerLink={`/classes`}>Classes list</IonRouterLink>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
