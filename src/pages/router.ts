import Home from 'src/pages/Home';
import type { RouteConfig } from 'src/types';
import { routeUrls } from 'src/utils/constants/router';
import BarcodeScanner from './BarcodeScanner';
import ClassDetails from './Classes/ClassDetails';
import ClassesList from './Classes/ClassesList';
import ClassesWidget from './Classes/ClassesWidget';
import Geolocation from './Geolocation';
import LatestActivityWidgetPage from './LatestActivityWidgetPage';
import Share from './Share';
import TestAuth from './TestAuth';
import TestCors from './TestCors';
import TestLogger from './TestLogger';

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
    path: routeUrls.testAuth,
    exact: true,
    component: TestAuth,
  },
  {
    path: routeUrls.classes,
    exact: true,
    component: ClassesList,
  },
  {
    path: routeUrls.classesWidget,
    exact: true,
    component: ClassesWidget,
  },
  {
    path: routeUrls.classById(),
    exact: true,
    component: ClassDetails,
  },
  {
    path: routeUrls.testLogger,
    exact: true,
    component: TestLogger,
  },
  {
    path: routeUrls.barcodeScanner,
    exact: true,
    component: BarcodeScanner,
  },
  {
    path: routeUrls.geolocation,
    exact: true,
    component: Geolocation,
  },
  {
    path: routeUrls.share,
    exact: true,
    component: Share,
  },
  {
    path: routeUrls.latestActivityWidget,
    exact: true,
    component: LatestActivityWidgetPage,
  },
  {
    path: routeUrls.latestActivityWidgetWidget,
    exact: true,
    component: LatestActivityWidgetPage,
  },
];
