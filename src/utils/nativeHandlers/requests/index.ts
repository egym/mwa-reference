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

export const publishSetWidgetHeight = async (data: { height: number }) => {
  await portalsPublish({
    topic: NativeRequestTopic.Subscription,
    data: {
      type: NativeRequestType.setWidgetHeight,
      data,
    },
  });
};

export const publishContentLoadingDidFinish = async () => {
  await portalsPublish({
    topic: NativeRequestTopic.Subscription,
    data: {
      type: NativeRequestType.contentLoadingDidFinish,
    },
  });
};

export const requestLinking = async () => {
  await portalsPublish({
    topic: NativeRequestTopic.Subscription,
    data: {
      type: NativeRequestType.linking,
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
