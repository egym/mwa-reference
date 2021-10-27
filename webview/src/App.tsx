import { FC, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupConfig } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import ClassBookingListPage from './pages/ClassBookingListPage';
import ClassBookingDetailsPage from './pages/ClassBookingDetailsPage';

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
import ClassBookingWidgetPage from './pages/ClassBookingWidgetPage';

setupConfig({
  mode: window.AndroidInteractor ? 'md' : 'ios',
});

const App: FC = () => {

  useEffect(() => {
    alert(JSON.stringify(window.IOSInteractor));
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/classes">
            <ClassBookingListPage />
          </Route>
          <Route exact path="/classes/:id" component={ClassBookingDetailsPage}/>
          <Route exact path="/classes-widget">
            <ClassBookingWidgetPage />
          </Route>

          <Redirect exact from='/' to={window.AndroidInteractor?.initialRoute || window.IOSInteractor?.initialRoute || '/home'}/>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
