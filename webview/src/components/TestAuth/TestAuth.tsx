import React, {FC, useMemo} from 'react';
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItemDivider, IonText} from "@ionic/react";
import {requestAuthToken, requestExerciserInfo} from "../../utils/nativeHandlers";
import {usePortalsContext} from "../../hooks/usePortalsContext";

const TestAuth: FC = () => {
  const { token, exerciserInfo } = usePortalsContext();

  const exerciserEmail = useMemo(() => {
    try {
      const parsedExerciser = exerciserInfo ? JSON.parse(JSON.stringify(exerciserInfo)) : {};
      return parsedExerciser.email;
    } catch {
      return "Parse error";
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
          Current exerciser info as is - {exerciserInfo}
        </IonText>
        <br/>
        <IonText>
          Current exerciser info stringified - {JSON.stringify(exerciserInfo)}
        </IonText>
        <br/>
        <IonText>
          Current exerciser email - {exerciserEmail}
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default TestAuth;