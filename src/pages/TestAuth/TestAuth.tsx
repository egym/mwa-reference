import type { FC } from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonPage,
  IonText,
} from '@ionic/react';
import { CommonPageHeader } from 'src/components';
import type { TestAuthProps } from './TestAuthProps';

const TestAuth: FC<TestAuthProps> = ({
  authToken,
  handleRequestAuthToken,
  exerciserInfo,
  handleRequestExerciserInfo,
}) => {
  return (
    <IonPage>
      <CommonPageHeader title="Test Auth" />
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Auth Token</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonButton
              onClick={handleRequestAuthToken}
              color="primary"
              fill="solid"
              size="default"
              expand="block"
              style={{ margin: '16px', marginTop: 0 }}
            >
              Request auth token
            </IonButton>
            <IonText>{authToken}</IonText>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Exerciser Info</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonButton
              onClick={handleRequestExerciserInfo}
              color="primary"
              fill="solid"
              size="default"
              expand="block"
              style={{ margin: '16px', marginTop: '32px' }}
            >
              Request exerciser info
            </IonButton>
            <IonText>{exerciserInfo}</IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default TestAuth;
