import Home from 'src/pages/Home';
import type { RouteConfig } from 'src/types';
import { routeUrls } from 'src/utils/constants/router';
import BarcodeScanner from './BarcodeScanner';
import ClassDetails from './Classes/ClassDetails';
import ClassesList from './Classes/ClassesList';
import ClassesWidget from './Classes/ClassesWidget';
import Geolocation from './Geolocation';
import Locations from './Locations';
import LocationDetail from './Locations/LocationDetail';
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
    path: routeUrls.locations,
    exact: true,
    component: Locations,
  },
  {
    path: routeUrls.locationById(),
    exact: true,
    component: LocationDetail,
  },
  {
    path: routeUrls.share,
    exact: true,
    component: Share,
  },
];
