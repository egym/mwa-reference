import type { PortalsPlugin } from '@ionic/portals';
import Portals from '@ionic/portals';
import { logPortalsRequest } from '@egym/mwa-logger';
import { NativeRequestTopic, NativeRequestType } from 'src/types';

export const portalsPublish: PortalsPlugin['publish'] = async (message) => {
  logPortalsRequest(`${message.topic} ${message.data.type}`, message.data);

  await Portals.publish(message);
};

export const publishDismiss = async () => {
  await portalsPublish({
    topic: NativeRequestTopic.Subscription,
    data: {
      type: NativeRequestType.dismiss,
    },
  });
};

export const requestAuthToken = async () => {
  await portalsPublish({
    topic: NativeRequestTopic.Subscription,
    data: {
      type: NativeRequestType.authToken,
      data: null,
    },
  });
};

export const requestExerciserInfo = async () => {
  await portalsPublish({
    topic: NativeRequestTopic.Subscription,
    data: {
      type: NativeRequestType.exerciserInfo,
    },
  });
};

export const requestOpenFeature = async (data: { startingRoute: string }) => {
  await portalsPublish({
    topic: NativeRequestTopic.Subscription,
    data: {
      type: NativeRequestType.openFeature,
      data,
    },
  });
};
