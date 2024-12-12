import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffectOnce } from 'react-use';
import { useIonAlert } from '@ionic/react';
import { portalsSubscribe } from '@egym/mwa-utils';
import { useStore } from 'src/store';
import { getExerciserSelector, getPortalsContextSelector } from 'src/store/selectors';
import { SubscribeTopic } from 'src/types';
import type { PortalsError } from 'src/types/error';
import { decodeToken } from 'src/utils/api/refreshPortalsToken';
import { parseJson } from 'src/utils/helpers';
import usePortalsLinkingSubscription from '../usePortalsLinkingSubscription';

const usePortalsSubscriptions = () => {
  const [portalsContext, set] = useStore(getPortalsContextSelector);
  const [exerciserInfo] = useStore(getExerciserSelector);
  const [presentAlert] = useIonAlert();
  const { t } = useTranslation();
  const { subscribe: linkingSubscribe, unsubscribe: linkingUnsubscribe } = usePortalsLinkingSubscription();

  useEffectOnce(() => {
    (async () => {
      await linkingSubscribe();
    })();

    return () => {
      linkingUnsubscribe();
    };
  });

  useEffect(() => {
    (async () => {
      console.log('Portals Subscribed!');

      await portalsSubscribe<string>(SubscribeTopic.authToken, ({ data }) => {
        if (data) {
          decodeToken(data);
          set({ portalsContext: { ...portalsContext, authToken: data } as PortalsContext });
        }
      });

      await portalsSubscribe<string>(SubscribeTopic.exerciserInfo, ({ data }) => {
        if (data) {
          const newExerciser: Exerciser = parseJson(data);

          set({ exerciserInfo: { ...exerciserInfo, ...newExerciser } });
        }
      });

      await portalsSubscribe<string>('error', ({ data }) => {
        if (data) {
          const error = parseJson(data) as PortalsError;

          presentAlert({
            header: t('errors.oops'),
            subHeader: error.type,
            message:
              error.code || error.message || error.url ? `${error.code} ${error.message} ${error.url}` : undefined,
            buttons: [{ text: 'Refresh', handler: () => window.location.reload() }],
            backdropDismiss: false,
            translucent: true,
            animated: true,
          });
        }
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePortalsSubscriptions;
