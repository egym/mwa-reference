import { generatePath, Route } from 'react-router-dom';
import type { RouteConfig } from 'src/types';

export const mapRoutes = (routes: RouteConfig[]) => {
  return routes.map((route) => {
    const Component = route.component;

    return <Route key={route.path} path={route.path} element={<Component {...route.componentProps} />} />;
  });
};

export const getOrCompilePath = <P extends Record<string, string | number>>(path: string): ((params?: P) => string) => {
  return (params?: P) => {
    return params ? generatePath(path, params) : path;
  };
};
