import React, {FC, useMemo} from 'react';
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonText} from "@ionic/react";
import {requestAuthToken, requestExerciserInfo} from "../../utils/nativeHandlers";
import {usePortalsContext} from "../../hooks/usePortalsContext";

const TestAuth: FC = () => {
  const { token, exerciserInfo } = usePortalsContext();

  const exerciserObjectEmail = useMemo(() => {
    try {
      return exerciserInfo?.email || 'undefined email or exerciser object';
    } catch (e) {
      return String(e);
    }
  }, [exerciserInfo])

  const exerciserEmail = useMemo(() => {
    try {
      const parsedExerciser = exerciserInfo ? JSON.parse(JSON.stringify(exerciserInfo)) : {};
      return parsedExerciser.email;
    } catch (e) {
      return `Parse error: ${String(e)}`;
    }
  }, [exerciserInfo]);

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
          Email from plain object - {exerciserObjectEmail}
        </IonText>
        <br/>
        <IonText>
          Current exerciser info stringified - {exerciserStringified}
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