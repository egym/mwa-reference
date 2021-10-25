import { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupConfig } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import PlainWebviewClassBookingDetails from './pages/PlainWebview/PlainWebviewClassBookingDetails';
import PlainWebviewClassBookingList from './pages/PlainWebview/PlainWebviewClassBookingList';
import PortalsClassBookingList from './pages/Portals/PortalsClassBookingList';
import PortalsClassBookingDetails from './pages/Portals/PortalsClassBookingDetails';
import WebClassBookingList from './pages/Web/WebClassBookingList';
import WebClassBookingDetails from './pages/Web/WebClassBookingDetails';

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

setupConfig({
  mode: 'ios'
});

type AppProps = {
  context: {
    startingRoute: string;
    gymName?: string
  };
}

const App: FC<AppProps> = ({ context }) => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/portals/classes">
            <PortalsClassBookingList context={context} />
          </Route>
          <Route exact path="/portals/classes/:id" component={PortalsClassBookingDetails}/>
          <Route exact path="/plain-webview/classes">
            <PlainWebviewClassBookingList />
          </Route>
          <Route exact path="/plain-webview/classes/:id" component={PlainWebviewClassBookingDetails}/>
          <Route exact path="/web/classes">
            <WebClassBookingList />
          </Route>
          <Route exact path="/web/classes/:id" component={WebClassBookingDetails}/>
          <Redirect exact from='/' to={window.AndroidInteractor?.initialRoute || context.startingRoute}/>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
