import type { FC } from 'react';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { routesConfigs } from './pages/router';
import { getStartingRouteSelector, useStore } from './store';
import { mapRoutes } from './utils/router';

const routes = mapRoutes(routesConfigs);

const Layout: FC = () => {
  const [startingRoute] = useStore(getStartingRouteSelector);

  return (
    <IonApp>
      <IonReactRouter>
        <Switch>
          <IonRouterOutlet>
            {routes}
            <Route path="/" render={() => <Redirect to={startingRoute || '/home'} />} exact={true} />
          </IonRouterOutlet>
        </Switch>
      </IonReactRouter>

      {/*<IonReactRouter>*/}
      {/*  <IonRouterOutlet>*/}
      {/*    <Route exact path="/home">*/}
      {/*      <Home />*/}
      {/*    </Route>*/}
      {/*    <Route exact path="/">*/}
      {/*      <Redirect to="/home" />*/}
      {/*    </Route>*/}
      {/*  </IonRouterOutlet>*/}
      {/*</IonReactRouter>*/}
    </IonApp>
  );
};

export default Layout;
