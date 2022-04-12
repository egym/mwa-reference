import { Capacitor } from '@capacitor/core';
import React from 'react';
import Portals from '@ionic/portals';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

if (!Capacitor?.isNativePlatform()) {
  // useful to mock portals initial context when testing app locally in browser
  window.portalInitialContext = {
    value: {
      url: '',
      startingRoute: '/home',
      lightPrimaryColor: '',
      primaryColor: '',
      primaryTextColor: '',
      secondaryColor: '',
      token: null,
      exerciserInfo: null,
    },
  };
}

Portals.getInitialContext<typeof window.portalInitialContext.value>().then((context) => {
  ReactDOM.render(
    <React.StrictMode>
      <App context={context.value} />
    </React.StrictMode>,
    document.getElementById('root'),
  );
})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
  onSuccess: (registration) => {
    console.log('success registration', registration);
  },
  onUpdate: (registration) => {
    console.log('update registration', registration);

    const waitingServiceWorker = registration.waiting;

    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener("statechange", event => {
        // @ts-ignore
        if (event.target?.state === "activated") {
          window.location.reload()
        }
      });
      waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
    }
  }
});
