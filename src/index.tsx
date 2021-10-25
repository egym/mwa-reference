import React from 'react';
import ReactDOM from 'react-dom';
import { Capacitor } from '@capacitor/core';
import Portals from '@ionic/portals';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

console.log('Capacitor.getPlatform() - ', Capacitor?.getPlatform());

if (!Capacitor?.isNativePlatform()) {
  window.portalInitialContext = {
    value: { startingRoute: '/home', gymName: '' },
  };
}

Portals.getInitialContext<{ startingRoute: string }>().then((context) => {
  console.log('Portals.getInitialContext', context);

  ReactDOM.render(
    <React.StrictMode>
      <App context={context.value} />
    </React.StrictMode>,
    document.getElementById('root'),
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
