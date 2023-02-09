import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getInitialContext } from '@ionic/portals';
import { Settings } from 'luxon';
import { createRoot } from 'react-dom/client';
import { logDebug, logWebWitals } from '@egym/mwa-logger';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './store';
import { scheduleRefreshPortalsToken } from './utils/api/refreshPortalsToken';
import { hexToRgb, setGlobalPortalsContext } from './utils/helpers';

const initialContext =
  getInitialContext<PortalsContext>()?.value ||
  ({
    startingRoute: '/home',
    authToken: '',
    language: 'de_DE',
    lightPrimaryColor: '#ebfafc',
    primaryColor: '#00c4dc',
    primaryTextColor: '#ffffff',
    url: 'https://mwa-test-be.herokuapp.com',
    showLogger: 'true',
  } as PortalsContext);

initialContext.language = initialContext.language.replace('_', '-');

Settings.defaultLocale = initialContext.language;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 1000 * 60 * 2, // 2 minutes
      cacheTime: Infinity,
    },
  },
});

setGlobalPortalsContext(initialContext);

document.body.style.setProperty('--ion-color-primary', window.portalsContext.primaryColor);
document.body.style.setProperty('--ion-color-primary-rgb', hexToRgb(window.portalsContext.primaryColor));
document.body.style.setProperty('--ion-color-primary-shade', window.portalsContext.lightPrimaryColor);
document.body.style.setProperty('--ion-color-primary-tint', window.portalsContext.lightPrimaryColor);

scheduleRefreshPortalsToken(initialContext.authToken);

logDebug('initialContext', initialContext);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <StoreProvider
      initialState={{
        portalsContext: initialContext,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StoreProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(logWebWitals);
