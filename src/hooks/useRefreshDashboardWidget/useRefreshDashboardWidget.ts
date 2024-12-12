import { useCallback, useRef } from 'react';
import { useEffectOnce } from 'react-use';
import { App } from '@capacitor/app';
import type { PluginListenerHandle } from '@capacitor/core';
import { logPortalsRequest } from '@egym/mwa-logger';
import { portalsSubscribe } from '@egym/mwa-utils';
import { SubscribeTopic } from '../../types';

type Props = {
  onRefresh: () => Promise<void>;
};

const useRefreshDashboardWidget = ({ onRefresh }: Props) => {
  const resumeListener = useRef<PluginListenerHandle>();
  const refreshListener = useRef<PluginListenerHandle>();

  const callback = useCallback(
    async (refreshEventSource: 'capacitorResume' | 'ionicPortalsRefresh') => {
      logPortalsRequest(`Widget refresh ${refreshEventSource}`);

      onRefresh();
    },
    [onRefresh]
  );

  useEffectOnce(() => {
    (async () => {
      if (!resumeListener.current) {
        resumeListener.current = await App.addListener('resume', () => callback('capacitorResume'));
      }

      if (!refreshListener.current) {
        refreshListener.current = await portalsSubscribe<string>(SubscribeTopic.refresh, () =>
          callback('ionicPortalsRefresh')
        );
      }
    })();
  });
};

export default useRefreshDashboardWidget;
