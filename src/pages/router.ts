import Home from 'src/pages/Home';
import type { RouteConfig } from 'src/types';
import { routeUrls } from 'src/utils/constants/router';
import ClassDetails from './Classes/ClassDetails';
import ClassesList from './Classes/ClassesList';
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
  {
    path: routeUrls.classes,
    exact: true,
    component: ClassesList,
  },
  {
    path: routeUrls.classById(),
    exact: true,
    component: ClassDetails,
  },
];
