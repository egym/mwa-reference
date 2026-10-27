import type { FC } from 'react';
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
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
        <IonRouterOutlet>
          {routes}
          <Route path="/" element={<Navigate to={startingRoute || '/home'} replace />} />
          <Route path="/index.html" element={<Navigate to="/home" replace />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default Layout;
