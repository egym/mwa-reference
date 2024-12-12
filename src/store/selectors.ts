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

export const getWidgetPreferencesSelector = createSelector(getPortalsContextSelector, ({ preferences }) => {
  return preferences || {};
});
export const getEgymAccountLinkingSelector = createSelector(getPortalsContextSelector, ({ linking }) => {
  return linking || {};
});

export const getIsEgymAccountLinkedSelector = createSelector(getEgymAccountLinkingSelector, ({ status }) => {
  // ensure backward compatibility with older native apps that do not provide the linking field in the initial context
  return !status || status === 'linked';
});
