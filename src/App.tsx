import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { setupIonicReact } from '@ionic/react';
import qs from 'qs';
import { EgymMwaDevtools, ErrorBoundary } from '@egym/mwa-logger';
import { appflowCIconfig } from './appflow_ci_config';
import ErrorFallback from './ErrorFallback';
import i18n from './i18n';
import Layout from './Layout';
import { useStore } from './store';
import { getShowLoggerSelector } from './store/selectors';

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
  mode: queryParams.mode as 'ios' | 'md', // do not need to specify 'mode' in the real app (here it's done only for mode switcher)
  rippleEffect: false, // align with native app's styles, they don't use ripple effect
});

const App: React.FC = () => {
  const [showLogger] = useStore(getShowLoggerSelector);

  return (
    <Suspense fallback={<span />}>
      {showLogger && <EgymMwaDevtools position="top-right" ciConfig={appflowCIconfig} />}
      <I18nextProvider i18n={i18n}>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Layout />
        </ErrorBoundary>
      </I18nextProvider>
    </Suspense>
  );
};

export default App;
