import React, {FC} from 'react';
import {IonButton, IonHeader, IonIcon, IonTitle, IonToolbar} from "@ionic/react";
import {chevronBackOutline} from "ionicons/icons";
import {publishDismiss} from "../../utils/nativeHandlers/requests";

type Props = {
  title: string
}

const CommonPageHeader: FC<Props> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButton fill="clear" onClick={publishDismiss}>
          <IonIcon icon={chevronBackOutline} />
          Back
        </IonButton>
        <IonTitle className="title">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default CommonPageHeader;