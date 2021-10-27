import React from 'react';
import ReactDOM from 'react-dom';
import { Capacitor } from '@capacitor/core';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

console.log('Capacitor.getPlatform() - ', Capacitor?.getPlatform());

function initIOSContext(initialRoute: string, gymName: string) {
  window.IOSInteractor = {
    initialRoute, gymName
  }
  alert(`${Capacitor?.getPlatform()} - initIOSContext - ${JSON.stringify(window.IOSInteractor)}`);
}

// @ts-ignore
window.initIOSContext = initIOSContext;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
