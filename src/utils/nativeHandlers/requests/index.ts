import { portalsPublish } from '@egym/mwa-utils';
import { NativeRequestTopic, NativeRequestType } from 'src/types';

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
