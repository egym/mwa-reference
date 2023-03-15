import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useIonAlert } from '@ionic/react';
import { useStore } from 'src/store';
import { getExerciserSelector, getPortalsContextSelector } from 'src/store/selectors';
import { SubscribeTopic } from 'src/types';
import type { PortalsError } from 'src/types/error';
import { scheduleRefreshPortalsToken } from 'src/utils/api/refreshPortalsToken';
import { parseJson } from 'src/utils/helpers';
import { portalsSubscribe } from 'src/utils/nativeHandlers/subscriptions';

const usePortalsSubscriptions = () => {
  const [portalsContext, set] = useStore(getPortalsContextSelector);
  const [exerciserInfo] = useStore(getExerciserSelector);
  const [presentAlert] = useIonAlert();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      console.log('Portals Subscribed!');

      await portalsSubscribe<string>({ topic: SubscribeTopic.authToken }, ({ data }) => {
        scheduleRefreshPortalsToken(data);
        set({ portalsContext: { ...portalsContext, authToken: data } as PortalsContext });
      });

      await portalsSubscribe<string>({ topic: SubscribeTopic.exerciserInfo }, ({ data }) => {
        const newExerciser: Exerciser = parseJson(data);

        set({ exerciserInfo: { ...exerciserInfo, ...newExerciser } });
      });

      await portalsSubscribe<string>({ topic: 'error' }, ({ data }) => {
        const error = parseJson(data) as PortalsError;

        presentAlert({
          header: t('errors.oops'),
          subHeader: error.type,
          message: error.code || error.message || error.url ? `${error.code} ${error.message} ${error.url}` : undefined,
          buttons: [{ text: 'Refresh', handler: () => window.location.reload() }],
          backdropDismiss: false,
          translucent: true,
          animated: true,
        });
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePortalsSubscriptions;
