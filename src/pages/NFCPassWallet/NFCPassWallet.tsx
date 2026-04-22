import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Capacitor } from '@capacitor/core';
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
  IonTextarea,
  IonText,
} from '@ionic/react';
import { CapacitorNFCPassWallet } from '@egym/capacitor-nfc-pass-wallet';
import { logDebug } from '@egym/mwa-logger';
import { CommonPageHeader } from '../../components';

type WalletPayloadState = {
  iosPkPassBase64: string;
  googlePayJwt: string;
  saveToGooglePayUrl: string;
  androidPassJwt: string;
};

type ActionStatus = 'idle' | 'success' | 'error';

type ActionResult = {
  title: string;
  status: ActionStatus;
  detail: string;
};

const defaultPayloads: WalletPayloadState = {
  iosPkPassBase64: '',
  googlePayJwt: '',
  saveToGooglePayUrl: '',
  androidPassJwt: '',
};

const initialResult: ActionResult = {
  title: 'Waiting for action',
  status: 'idle',
  detail: 'Run one of the wallet actions below to see the plugin response.',
};

const getAvailabilityLabel = (isWalletAvailable: boolean | null): string => {
  if (isWalletAvailable === null) {
    return 'Availability unknown';
  }

  return isWalletAvailable ? 'Wallet available' : 'Wallet unavailable';
};

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  return 'Unknown wallet error';
};

const NFCPassWallet: FC = () => {
  const [payloads, setPayloads] = useState<WalletPayloadState>(defaultPayloads);
  const [isWalletAvailable, setIsWalletAvailable] = useState<boolean | null>(null);
  const [result, setResult] = useState<ActionResult>(initialResult);

  const platform = Capacitor.getPlatform();
  const isIos = platform === 'ios';
  const isAndroid = platform === 'android';

  const updateField = useCallback((field: keyof WalletPayloadState, value: string) => {
    setPayloads((currentPayloads) => ({
      ...currentPayloads,
      [field]: value,
    }));
  }, []);

  const refreshAvailability = useCallback(async () => {
    try {
      const availability = await CapacitorNFCPassWallet.isWalletAvailable();

      setIsWalletAvailable(availability.result);
      setResult({
        title: 'Wallet availability checked',
        status: 'success',
        detail: availability.result ? 'Wallet is available on this device.' : 'Wallet is not available on this device.',
      });
      logDebug('NFCPassWallet - refreshAvailability', availability);
    } catch (error) {
      const message = getErrorMessage(error);

      setResult({
        title: 'Wallet availability failed',
        status: 'error',
        detail: message,
      });
      logDebug('NFCPassWallet - refreshAvailability', error);
    }
  }, []);

  useEffect(() => {
    void refreshAvailability();
  }, [refreshAvailability]);

  const readPassFromWallet = useCallback(async () => {
    const iosPkPassBase64 = payloads.iosPkPassBase64.trim();

    if (!iosPkPassBase64) {
      setResult({
        title: 'Missing Apple Wallet payload',
        status: 'error',
        detail: 'Paste a Base64-encoded .pkpass payload before reading from Apple Wallet.',
      });

      return;
    }

    try {
      const passState = await CapacitorNFCPassWallet.readPassFromWallet({
        iosPkPassBase64,
      });

      setResult({
        title: 'Apple Wallet read complete',
        status: 'success',
        detail: passState.result
          ? 'The pass already exists in Apple Wallet.'
          : 'The pass was not found in Apple Wallet.',
      });
      logDebug('NFCPassWallet - readPassFromWallet', passState);
    } catch (error) {
      const message = getErrorMessage(error);

      setResult({
        title: 'Apple Wallet read failed',
        status: 'error',
        detail: message,
      });
      logDebug('NFCPassWallet - readPassFromWallet', error);
    }
  }, [payloads.iosPkPassBase64]);

  const savePassToWallet = useCallback(async () => {
    const options = {
      iosPkPassBase64: payloads.iosPkPassBase64.trim() || undefined,
      googlePayJwt: payloads.googlePayJwt.trim() || undefined,
      saveToGooglePayUrl: payloads.saveToGooglePayUrl.trim() || undefined,
      androidPassJwt: payloads.androidPassJwt.trim() || undefined,
    };

    if (!options.iosPkPassBase64 && !options.googlePayJwt && !options.saveToGooglePayUrl && !options.androidPassJwt) {
      setResult({
        title: 'Missing wallet payload',
        status: 'error',
        detail: 'Add at least one valid wallet payload before calling savePassToWallet.',
      });

      return;
    }

    try {
      await CapacitorNFCPassWallet.savePassToWallet(options);

      setResult({
        title: 'Wallet save flow launched',
        status: 'success',
        detail: isIos
          ? 'Apple Wallet flow was opened. The device will decide whether the pass can be added.'
          : 'Google Wallet flow was opened. The device will decide whether the pass can be added.',
      });
      logDebug('NFCPassWallet - savePassToWallet', options);
    } catch (error) {
      const message = getErrorMessage(error);

      setResult({
        title: 'Wallet save failed',
        status: 'error',
        detail: message,
      });
      logDebug('NFCPassWallet - savePassToWallet', error);
    }
  }, [isIos, payloads.androidPassJwt, payloads.googlePayJwt, payloads.iosPkPassBase64, payloads.saveToGooglePayUrl]);

  return (
    <IonPage>
      <CommonPageHeader title="NFC Pass Wallet" />
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Plugin status</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <p>Platform: {platform}</p>
            </IonText>
            <IonBadge color={isWalletAvailable ? 'success' : 'medium'}>
              {getAvailabilityLabel(isWalletAvailable)}
            </IonBadge>
            <IonText>
              <p>
                Use this page to exercise <strong>isWalletAvailable</strong>, <strong>readPassFromWallet</strong>, and
                <strong> savePassToWallet</strong> with real partner payloads.
              </p>
            </IonText>
            <IonNote color="medium">
              The web fallback always reports unavailable. Run the app on iOS or Android to test the native flow.
            </IonNote>
            <IonButton expand="block" fill="outline" onClick={refreshAvailability}>
              Refresh wallet availability
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Wallet payloads</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList inset={true}>
              <IonItem>
                <IonTextarea
                  autoGrow={true}
                  label="Apple Wallet .pkpass Base64"
                  labelPlacement="stacked"
                  placeholder="Paste the Base64-encoded .pkpass you want to read or add on iOS"
                  value={payloads.iosPkPassBase64}
                  onIonChange={(event) => updateField('iosPkPassBase64', event.detail.value ?? '')}
                />
              </IonItem>
              <IonItem>
                <IonTextarea
                  autoGrow={true}
                  label="Google Wallet JWT"
                  labelPlacement="stacked"
                  placeholder="Preferred Android payload. Paste the JWT issued for Google Wallet."
                  value={payloads.googlePayJwt}
                  onIonChange={(event) => updateField('googlePayJwt', event.detail.value ?? '')}
                />
              </IonItem>
              <IonItem>
                <IonInput
                  label="Save to Google Pay URL"
                  labelPlacement="stacked"
                  placeholder="Optional Android fallback URL"
                  value={payloads.saveToGooglePayUrl}
                  onIonChange={(event) => updateField('saveToGooglePayUrl', event.detail.value ?? '')}
                />
              </IonItem>
              <IonItem>
                <IonTextarea
                  autoGrow={true}
                  label="Legacy Android pass JWT"
                  labelPlacement="stacked"
                  placeholder="Backward-compatible Android payload"
                  value={payloads.androidPassJwt}
                  onIonChange={(event) => updateField('androidPassJwt', event.detail.value ?? '')}
                />
              </IonItem>
            </IonList>
            <IonNote color="medium">
              Android precedence is Google Wallet JWT, then Save to Google Pay URL, then legacy Android JWT.
            </IonNote>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Actions</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton expand="block" onClick={savePassToWallet}>
              Save pass to wallet
            </IonButton>
            <IonButton expand="block" fill="outline" onClick={readPassFromWallet} disabled={!isIos}>
              Read pass from wallet (iOS only)
            </IonButton>
            <IonButton
              expand="block"
              fill="clear"
              onClick={() => {
                setPayloads(defaultPayloads);
                setResult(initialResult);
              }}
            >
              Clear payloads
            </IonButton>
            {!isIos && isAndroid && (
              <IonNote color="medium">
                Google Wallet does not support reading pass existence through this plugin.
              </IonNote>
            )}
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

export default NFCPassWallet;
