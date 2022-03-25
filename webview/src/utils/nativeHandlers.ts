import Portals from '@ionic/portals';
import {SubscriptionCallback} from "@ionic/portals/types/definitions";
import { ClassItem } from './data';
import {NativeRequestTopic, NativeRequestType, SubscribeTopic} from "./constants";
import {logIonicPublish} from "./helpers";

export const onClassBookedClick = async (classDetails: ClassItem) => {
  logIonicPublish('onClassBookedClick');
  return Portals.publish({
    topic: 'book-class', data: {
      className: classDetails.name
    }
  });
}

export const publishDismiss = async () => {
  logIonicPublish('dismiss');
  await Portals.publish({
    topic: NativeRequestTopic.Subscription,
    data: {
      type: NativeRequestType.dismiss,
    }
  });
}

export const requestAuthToken = async () => {
  logIonicPublish('requestAuthToken');
  await Portals.publish({
    topic: NativeRequestTopic.Subscription,
    data: {
      type: NativeRequestType.provideAuthToken,
      data: {
        message: 'Hallo'
      }
    }
  })
}

export const requestExerciserInfo = async () => {
  logIonicPublish('requestExerciserInfo');
  await Portals.publish({
    topic: NativeRequestTopic.Subscription,
    data: {
      type: NativeRequestType.provideExerciserInfo
    }
  })
}

export const requestOpenFeature = async (data: { startingRoute: string }) => {
  logIonicPublish('requestOpenFeature', '::', JSON.stringify(data));
  await Portals.publish({
    topic: NativeRequestTopic.Subscription,
    data: {
      type: NativeRequestType.openFeature,
      data
    }
  })
}

export const getAuthTokenSubscription = async (callback: SubscriptionCallback<string>) => {
  return Portals.subscribe<string>({ topic: SubscribeTopic.authToken }, callback);
}

export const getExerciserInfoSubscription = async (callback: SubscriptionCallback<Exerciser>) => {
  return Portals.subscribe<Exerciser>({ topic: SubscribeTopic.exerciserInfo }, callback)
}