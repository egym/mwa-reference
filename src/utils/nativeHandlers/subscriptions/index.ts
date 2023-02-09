import Portals from '@ionic/portals';
import type { SubscriptionCallback, PortalSubscription, SubscribeOptions } from '@ionic/portals/types/definitions';
import { logPortalsResponse } from '@egym/mwa-logger';

export const portalsSubscribe = async <T>(
  options: SubscribeOptions,
  callback: SubscriptionCallback<T>
): Promise<PortalSubscription> => {
  return Portals.subscribe<T>(options, (...args) => {
    logPortalsResponse(options.topic, {
      ...options,
      ...args,
    });
    callback(...args);
  });
};
