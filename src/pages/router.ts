import Home from 'src/pages/Home';
import type { RouteConfig } from 'src/types';
import { routeUrls } from 'src/utils/constants/router';
import TestCors from './TestCors';

export const routesConfigs: RouteConfig[] = [
  {
    path: routeUrls.home,
    exact: true,
    component: Home,
  },
  {
    path: routeUrls.testCors,
    exact: true,
    component: TestCors,
  },
];
