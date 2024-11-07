import type { FC } from 'react';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import usePortalsSubscriptions from './hooks/usePortalsSubscriptions';
import { routesConfigs } from './pages/router';
import { useStore } from './store';
import { getStartingRouteSelector } from './store/selectors';
import { mapRoutes } from './utils/router';

const routes = mapRoutes(routesConfigs);

const Layout: FC = () => {
  const [startingRoute] = useStore(getStartingRouteSelector);
  usePortalsSubscriptions();

  return (
    <IonApp>
      <IonReactRouter>
        <Switch>
          <IonRouterOutlet>
            {routes}
            <Route path="/" render={() => <Redirect to={startingRoute || '/home'} />} exact={true} />
            <Route path="/index.html" render={() => <Redirect to={'/home'} />} exact={true} />
          </IonRouterOutlet>
        </Switch>
      </IonReactRouter>
    </IonApp>
  );
};

export default Layout;
