import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from '@ionic/react';
import { calendar, calendarOutline, caretForwardOutline, documentLockOutline } from 'ionicons/icons';
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
            <IonList>
              <IonItem routerLink="/classes" button detail={true} detailIcon={caretForwardOutline}>
                <IonIcon icon={calendarOutline} slot="start"></IonIcon>
                <IonLabel>Classes</IonLabel>
              </IonItem>
              <IonItem routerLink="/classes-widget" button detail={true} detailIcon={caretForwardOutline}>
                <IonIcon icon={calendar} slot="start"></IonIcon>
                <IonLabel>Classes widget</IonLabel>
              </IonItem>
              <IonItem routerLink="/test-cors" button detail={true} detailIcon={caretForwardOutline}>
                <IonIcon icon={documentLockOutline} slot="start"></IonIcon>
                <IonLabel>Test CORS</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
