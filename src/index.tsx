import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Settings } from 'luxon';
import { createRoot } from 'react-dom/client';
import { logDebug, logWebWitals } from '@egym/mwa-logger';
import { getPortalsInitialContext } from '@egym/mwa-utils';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './store';
import { decodeToken, refreshTokenErrorHandler, retryFunction } from './utils/api/refreshPortalsToken';
import { setGlobalPortalsContext, setThemeColors } from './utils/helpers';

const initialContext =
  getPortalsInitialContext<PortalsContext>()?.value ||
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
      retry: retryFunction,
      retryDelay: 2000,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 2, // 2 minutes
      cacheTime: Infinity,
      onError: refreshTokenErrorHandler,
    },
    mutations: {
      retry: retryFunction,
      retryDelay: 2000,
      onError: refreshTokenErrorHandler,
    },
  },
});

setGlobalPortalsContext(initialContext);
setThemeColors(window.portalsContext);
decodeToken(initialContext.authToken);
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
