import { getOrCompilePath } from '../router';

export const routeUrls = {
  home: '/home',
  testCors: '/test-cors',
  classes: '/classes',
  locations: '/locations',
  locationById: getOrCompilePath<{ locationId: string | number }>('/locations/:locationId'),
  classesWidget: '/classes-widget',
  classById: getOrCompilePath<{ classId: string | number }>('/classes/:classId'),
  testAuth: '/test-auth',
  testLogger: '/test-logger',
  barcodeScanner: '/barcode-scanner',
  geolocation: '/geolocation',
  share: '/share',
};
