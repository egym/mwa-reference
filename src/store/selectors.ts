import { createSelector } from 'reselect';
import type { Store } from './Store';

export const getPortalsContextSelector = (store: Store) => store.portalsContext!;
export const getExerciserSelector = (store: Store) => store.exerciserInfo;
export const getAuthTokenSelector = createSelector(getPortalsContextSelector, ({ authToken }) => authToken);
export const getStartingRouteSelector = createSelector(
  getPortalsContextSelector,
  ({ startingRoute = '' }) => startingRoute
);
export const getShowLoggerSelector = createSelector(
  getPortalsContextSelector,
  ({ showLogger }) => showLogger === 'true'
);
export const getAppLanguageSelector = createSelector(getPortalsContextSelector, ({ language }) => language);
