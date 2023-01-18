import Portals from '@ionic/portals';
import { NativeRequestTopic, NativeRequestType } from 'src/types';

export const publishDismiss = async () => {
  await Portals.publish({
    topic: NativeRequestTopic.Subscription,
    data: {
      type: NativeRequestType.dismiss,
    },
  });
};

export const requestAuthToken = async () => {
  await Portals.publish({
    topic: NativeRequestTopic.Subscription,
    data: {
      type: NativeRequestType.authToken,
      data: null,
    },
  });
};

export const requestExerciserInfo = async () => {
  await Portals.publish({
    topic: NativeRequestTopic.Subscription,
    data: {
      type: NativeRequestType.exerciserInfo,
    },
  });
};

export const requestOpenFeature = async (data: { startingRoute: string }) => {
  await Portals.publish({
    topic: NativeRequestTopic.Subscription,
    data: {
      type: NativeRequestType.openFeature,
      data,
    },
  });
};
