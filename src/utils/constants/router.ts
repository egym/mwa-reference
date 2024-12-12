import { getOrCompilePath } from '../router';

export const routeUrls = {
  home: '/home',
  testCors: '/test-cors',
  classes: '/classes',
  classesWidget: '/classes-widget',
  classById: getOrCompilePath<{ classId: string | number }>('/classes/:classId'),
  testAuth: '/test-auth',
  testLogger: '/test-logger',
  barcodeScanner: '/barcode-scanner',
  geolocation: '/geolocation',
  share: '/share',
  latestActivityWidget: '/workouts/latest-activity-widget',
  latestActivityWidgetWidget: '/workouts/latest-activity-widget-widget',
};
