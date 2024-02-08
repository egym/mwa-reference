import type { FC } from 'react';
import { useCallback, useMemo } from 'react';
import type { IonSegmentCustomEvent } from '@ionic/core/dist/types/components';
import type { SegmentChangeEventDetail } from '@ionic/react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { publishDismiss } from '../../utils/nativeHandlers/requests';

type Props = {
  title: string;
  root?: boolean;
};

const CommonPageHeader: FC<Props> = ({ root, title }) => {
  const currentMode = useMemo(() => document.getElementsByTagName('html')[0].getAttribute('mode'), []);

  const onModeChange = useCallback((event: IonSegmentCustomEvent<SegmentChangeEventDetail>) => {
    const newMode = event.detail.value;

    window.location.replace(`${window.location.origin}${window.location.pathname}?mode=${newMode}`);
  }, []);

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          {root ? (
            <IonButton fill="clear" onClick={publishDismiss}>
              Exit MWA
            </IonButton>
          ) : (
            <IonBackButton text="Back" defaultHref="/home" />
          )}
        </IonButtons>
      </IonToolbar>

      <IonToolbar>
        <IonTitle size="large" slot="start">
          {title}
        </IonTitle>
      </IonToolbar>

      <IonToolbar>
        <IonButtons slot="start">
          <IonSegment value={currentMode} onIonChange={onModeChange}>
            <IonSegmentButton value="ios">iOS</IonSegmentButton>
            <IonSegmentButton value="md">Android</IonSegmentButton>
          </IonSegment>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default CommonPageHeader;
