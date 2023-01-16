import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { setupIonicReact } from '@ionic/react';
import qs from 'qs';
import i18n from './i18n';
import Layout from './Layout';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Custom styles / overrides */
import './styles/global.scss';
import './styles/modificators.scss';

const queryParams = qs.parse(window.location.search.replace('?', ''));

setupIonicReact({
  mode: queryParams.mode as 'ios' | 'md',
  rippleEffect: false,
});

const App: React.FC = () => (
  <Suspense fallback={<span />}>
    <I18nextProvider i18n={i18n}>
      <Layout />
    </I18nextProvider>
  </Suspense>
);

export default App;
