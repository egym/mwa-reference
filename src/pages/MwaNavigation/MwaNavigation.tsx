import type { FC } from 'react';
import { useCallback, useState } from 'react';
import { Capacitor, registerPlugin } from '@capacitor/core';
import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonText,
} from '@ionic/react';
import { logDebug } from '@egym/mwa-logger';
import { CommonPageHeader } from '../../components';
import { useStore } from '../../store';
import { getPortalsContextSelector } from '../../store/selectors';

// The contract of the EgymMwaNavigation plugin, which the EGYM MWA package registers on the MWAs that it opens.
type OpenMwaOptions = {
  appId: string;
  channel: string;
  startingRoute: string;
  initialContext: Record<string, unknown>;
};

type OpenMwaResult = {
  closedBy: 'dismiss' | 'back' | 'loadFailed';
};

type EgymMwaNavigationPlugin = {
  open(options: OpenMwaOptions): Promise<OpenMwaResult>;
};

type ActionStatus = 'idle' | 'success' | 'error';

type ActionResult = {
  title: string;
  status: ActionStatus;
  detail: string;
};

const PLUGIN_NAME = 'EgymMwaNavigation';

const EgymMwaNavigation = registerPlugin<EgymMwaNavigationPlugin>(PLUGIN_NAME);

// The plugin opens only the NFC MWA.
const NFC_APP_ID = 'dcbe378a';
const NFC_STARTING_ROUTE = '/nfc/home';
const DEFAULT_NFC_CHANNEL = 'reference';

const initialResult: ActionResult = {
  title: 'Waiting for action',
  status: 'idle',
  detail: 'Open the NFC MWA to see how the plugin answers.',
};

const getErrorCode = (error: unknown): string =>
  typeof error === 'object' && error !== null && 'code' in error && typeof error.code === 'string'
    ? error.code
    : 'UNKNOWN';

const getErrorMessage = (error: unknown): string => (error instanceof Error ? error.message : String(error));

const MwaNavigation: FC = () => {
  const [portalsContext] = useStore(getPortalsContextSelector);
  const [channel, setChannel] = useState(DEFAULT_NFC_CHANNEL);
  const [result, setResult] = useState<ActionResult>(initialResult);

  const isPluginAvailable = Capacitor.isPluginAvailable(PLUGIN_NAME);

  const openNfc = useCallback(async () => {
    setResult({
      title: 'NFC MWA opened',
      status: 'idle',
      detail: 'Close NFC with its back arrow to see how it was closed.',
    });

    try {
      const { closedBy } = await EgymMwaNavigation.open({
        appId: NFC_APP_ID,
        channel: channel.trim(),
        startingRoute: NFC_STARTING_ROUTE,
        initialContext: { ...portalsContext, startingRoute: NFC_STARTING_ROUTE },
      });

      setResult({
        title: 'NFC MWA closed',
        status: 'success',
        detail: `closedBy: ${closedBy}`,
      });
      logDebug('MwaNavigation - open', { closedBy });
    } catch (error) {
      const code = getErrorCode(error);

      setResult({
        title: 'NFC MWA did not open',
        status: 'error',
        detail: `${code}: ${getErrorMessage(error)}`,
      });
      logDebug('MwaNavigation - open', { code });
    }
  }, [channel, portalsContext]);

  return (
    <IonPage>
      <CommonPageHeader title="MWA Navigation" />
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Plugin status</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <p>Platform: {Capacitor.getPlatform()}</p>
            </IonText>
            <IonBadge color={isPluginAvailable ? 'success' : 'medium'}>
              {isPluginAvailable ? 'Plugin available' : 'Plugin unavailable'}
            </IonBadge>
            <IonText>
              <p>
                <strong>EgymMwaNavigation.open</strong> lets this MWA open another MWA full screen. The host app writes
                no code for it: the EGYM MWA package loads the other MWA, shows it, and closes it on{' '}
                <strong>dismiss</strong>.
              </p>
            </IonText>
            <IonNote color="medium">
              The plugin is available only when a host opens this MWA with the EGYM MWA package. In a browser it is
              unavailable.
            </IonNote>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Open the NFC MWA</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList inset={true}>
              <IonItem>
                <IonInput
                  label="Channel"
                  labelPlacement="stacked"
                  placeholder="The Appflow channel that the host uses for NFC"
                  value={channel}
                  onIonChange={(event) => setChannel(event.detail.value ?? '')}
                />
              </IonItem>
            </IonList>
            <IonButton expand="block" onClick={openNfc} disabled={!isPluginAvailable}>
              Open NFC MWA
            </IonButton>
            <IonNote color="medium">
              NFC gets the initial context of this MWA with its own starting route. The call resolves when NFC closes,
              and rejects at once with BUSY, NOT_ALLOWED, INVALID_ARGUMENT or UNAVAILABLE.
            </IonNote>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Latest result</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonLabel>
              <h2>{result.title}</h2>
              <p>{result.detail}</p>
            </IonLabel>
            <IonBadge color={result.status === 'error' ? 'danger' : result.status === 'success' ? 'success' : 'medium'}>
              {result.status}
            </IonBadge>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default MwaNavigation;
