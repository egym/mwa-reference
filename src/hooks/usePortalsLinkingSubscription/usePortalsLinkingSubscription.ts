import { useCallback, useRef } from 'react';
import type { PluginListenerHandle } from '@capacitor/core';
import { logDebug } from '@egym/mwa-logger';
import { portalsSubscribe } from '@egym/mwa-utils';
import { useStore } from '../../store';
import { getPortalsContextSelector } from '../../store/selectors';
import { SubscribeTopic } from '../../types';
import { setGlobalPortalsContext } from '../../utils/helpers';

const usePortalsLinkingSubscription = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, set] = useStore(getPortalsContextSelector);
  const subscription = useRef<PluginListenerHandle>();

  const subscribe = useCallback(async () => {
    await portalsSubscribe<string>(SubscribeTopic.linking, ({ data }) => {
      logDebug('SubscribeTopic.linking', data);

      if (data) {
        const linking = typeof data === 'string' ? JSON.parse(data) : data;
        const newPortalsContext = { ...window.portalsContext, linking } as PortalsContext;

        setGlobalPortalsContext(newPortalsContext);
        set({ portalsContext: newPortalsContext });
      }
    });
  }, [set]);

  const unsubscribe = useCallback(async () => {
    if (subscription.current) {
      subscription.current.remove();
    }
  }, []);

  return {
    subscribe,
    unsubscribe,
  };
};

export default usePortalsLinkingSubscription;
