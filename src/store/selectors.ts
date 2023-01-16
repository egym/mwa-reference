import type { Store } from './index';

export const getPortalsContextSelector = (store: Store) => store.portalsContext;

export const getAuthTokenSelector = (store: Store) => {
  return getPortalsContextSelector(store)?.authToken || '';
};

export const getStartingRouteSelector = (store: Store) => {
  return getPortalsContextSelector(store)?.startingRoute || '';
};

export const getExerciserSelector = (store: Store) => store.exerciserInfo;
