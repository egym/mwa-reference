import React, {FC} from 'react';
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItemDivider, IonText} from "@ionic/react";
import {requestAuthToken, requestExerciserInfo} from "../../utils/nativeHandlers";
import {usePortalsContext} from "../../hooks/usePortalsContext";

const TestAuth: FC = () => {
  const { token, exerciserInfo } = usePortalsContext();

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Auth</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonButton
          onClick={requestAuthToken}
          color="primary"
          fill="solid"
          size="default"
          expand="block"
          style={{margin: '16px', marginTop: 0}}
        >
          Request auth token
        </IonButton>
        <IonText>
          Current token - {token}
        </IonText>

        <IonButton
          onClick={requestExerciserInfo}
          color="primary"
          fill="solid"
          size="default"
          expand="block"
          style={{margin: '16px', marginTop: '32px'}}
        >
          Request exerciser info
        </IonButton>
        <IonText>
          Current exerciser info - {JSON.stringify(exerciserInfo)}
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default TestAuth;