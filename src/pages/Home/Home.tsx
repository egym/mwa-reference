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
import {
  barcodeOutline,
  bugOutline,
  calendar,
  calendarOutline,
  caretForwardOutline,
  documentLockOutline,
  lockOpenOutline,
  navigateCircleOutline,
  shareOutline,
} from 'ionicons/icons';
import CommonPageHeader from 'src/components/CommonPageHeader';
import { routeUrls } from '../../utils/constants';

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
              <IonItem routerLink={routeUrls.classes} button detail={true} detailIcon={caretForwardOutline}>
                <IonIcon icon={calendarOutline} slot="start"></IonIcon>
                <IonLabel>Classes</IonLabel>
              </IonItem>
              <IonItem routerLink={routeUrls.classesWidget} button detail={true} detailIcon={caretForwardOutline}>
                <IonIcon icon={calendar} slot="start"></IonIcon>
                <IonLabel>Classes widget</IonLabel>
              </IonItem>
              <IonItem routerLink={routeUrls.testCors} button detail={true} detailIcon={caretForwardOutline}>
                <IonIcon icon={documentLockOutline} slot="start"></IonIcon>
                <IonLabel>Test CORS</IonLabel>
              </IonItem>
              <IonItem routerLink={routeUrls.testAuth} button detail={true} detailIcon={caretForwardOutline}>
                <IonIcon icon={lockOpenOutline} slot="start"></IonIcon>
                <IonLabel>Test Auth</IonLabel>
              </IonItem>
              <IonItem routerLink={routeUrls.testLogger} button detail={true} detailIcon={caretForwardOutline}>
                <IonIcon icon={bugOutline} slot="start"></IonIcon>
                <IonLabel>Test Logger</IonLabel>
              </IonItem>
              <IonItem routerLink={routeUrls.barcodeScanner} button detail={true} detailIcon={caretForwardOutline}>
                <IonIcon icon={barcodeOutline} slot="start"></IonIcon>
                <IonLabel>Test Barcode Scanner</IonLabel>
              </IonItem>
              <IonItem routerLink={routeUrls.geolocation} button detail={true} detailIcon={caretForwardOutline}>
                <IonIcon icon={navigateCircleOutline} slot="start"></IonIcon>
                <IonLabel>Test Geolocation</IonLabel>
              </IonItem>
              <IonItem routerLink={routeUrls.share} button detail={true} detailIcon={caretForwardOutline}>
                <IonIcon icon={shareOutline} slot="start"></IonIcon>
                <IonLabel>Test Share Plugin</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
