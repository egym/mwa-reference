import type { FC } from 'react';
import React, { useCallback } from 'react';
import { Share as CapacitorShare } from '@capacitor/share';
import { IonContent, IonItem, IonList, IonPage } from '@ionic/react';
import { logDebug } from '@egym/mwa-logger';
import { CommonPageHeader } from '../../components';

const Share: FC = () => {
  const shareLink = useCallback(async () => {
    try {
      await CapacitorShare.share({
        title: 'See cool stuff',
        text: 'Really awesome thing you need to see right meow',
        url: 'http://ionicframework.com/',
        dialogTitle: 'Share with buddies',
      });
    } catch (e) {
      logDebug('Share - shareLink', e);
    }
  }, []);

  const checkCanShare = useCallback(async () => {
    const result = await CapacitorShare.canShare();
    alert(result.value ? 'Can share' : 'Cannot share');
    logDebug('Share - checkCanShare', result);
  }, []);

  return (
    <IonPage>
      <CommonPageHeader title="Share" />
      <IonContent>
        <IonList>
          <IonItem button onClick={checkCanShare}>
            Check can share
          </IonItem>
          <IonItem button onClick={shareLink}>
            Share link
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Share;
