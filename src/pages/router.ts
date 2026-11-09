import Home from 'src/pages/Home';
import type { RouteConfig } from 'src/types';
import { routeUrls } from 'src/utils/constants/router';
import BarcodeScanner from './BarcodeScanner';
import ClassDetails from './Classes/ClassDetails';
import ClassesList from './Classes/ClassesList';
import ClassesWidget from './Classes/ClassesWidget';
import Geolocation from './Geolocation';
import LatestActivityWidgetPage from './LatestActivityWidgetPage';
import MwaNavigation from './MwaNavigation';
import NFCPassWallet from './NFCPassWallet';
import Share from './Share';
import TestAuth from './TestAuth';
import TestCors from './TestCors';
import TestLogger from './TestLogger';

export const routesConfigs: RouteConfig[] = [
  {
    path: routeUrls.home,
    component: Home,
  },
  {
    path: routeUrls.testCors,
    component: TestCors,
  },
  {
    path: routeUrls.testAuth,
    component: TestAuth,
  },
  {
    path: routeUrls.classes,
    component: ClassesList,
  },
  {
    path: routeUrls.classesWidget,
    component: ClassesWidget,
  },
  {
    path: routeUrls.classById(),
    component: ClassDetails,
  },
  {
    path: routeUrls.testLogger,
    component: TestLogger,
  },
  {
    path: routeUrls.barcodeScanner,
    component: BarcodeScanner,
  },
  {
    path: routeUrls.nfcPassWallet,
    component: NFCPassWallet,
  },
  {
    path: routeUrls.mwaNavigation,
    exact: true,
    component: MwaNavigation,
  },
  {
    path: routeUrls.geolocation,
    component: Geolocation,
  },
  {
    path: routeUrls.share,
    component: Share,
  },
  {
    path: routeUrls.latestActivityWidget,
    component: LatestActivityWidgetPage,
  },
  {
    path: routeUrls.latestActivityWidgetWidget,
    component: LatestActivityWidgetPage,
  },
];
