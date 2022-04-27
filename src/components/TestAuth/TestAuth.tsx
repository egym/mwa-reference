import React, {FC, useMemo} from 'react';
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonText} from "@ionic/react";
import {requestAuthToken, requestExerciserInfo} from "../../utils/nativeHandlers/requests";
import {usePortalsContext} from "../../hooks/usePortalsContext";

const TestAuth: FC = () => {
  const { authToken, exerciserInfo } = usePortalsContext();

  const exerciserStringified = useMemo(() => {
    try {
      return JSON.stringify(exerciserInfo);
    } catch (e) {
      return String(e);
    }
  }, [exerciserInfo])

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
          Current auth token - {authToken}
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
          Current exerciser info stringified - {exerciserStringified}
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default TestAuth;