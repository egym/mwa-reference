import {logIonicPublish} from "../../helpers";
import Portals from "@ionic/portals";
import {NativeRequestTopic, NativeRequestType} from "../../constants";

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
      type: NativeRequestType.authToken,
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
      type: NativeRequestType.exerciserInfo
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