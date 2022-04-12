import {SubscriptionCallback} from "@ionic/portals/types/definitions";
import Portals from "@ionic/portals";
import {SubscribeTopic} from "../../constants";

export const getAuthTokenSubscription = async (callback: SubscriptionCallback<string>) => {
  return Portals.subscribe<string>({ topic: SubscribeTopic.authToken }, callback);
}

export const getExerciserInfoSubscription = async (callback: SubscriptionCallback<Exerciser>) => {
  return Portals.subscribe<Exerciser>({ topic: SubscribeTopic.exerciserInfo }, callback)
}