import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getInitialContext } from '@ionic/portals';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './store';
import { scheduleRefreshPortalsToken } from './utils/api/refreshPortalsToken';
import { setGlobalPortalsContext } from './utils/helpers';

const initialContext = getInitialContext<PortalsContext>()?.value || {
  startingRoute: '/home',
  authToken: '',
  language: 'en_GB',
  environment: 'develop',
};

initialContext.language = initialContext.language.replace('_', '-');

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

scheduleRefreshPortalsToken(initialContext.authToken);

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
reportWebVitals();
