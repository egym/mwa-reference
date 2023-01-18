import { getOrCompilePath } from '../router';

export const routeUrls = {
  home: '/home',
  testCors: '/test-cors',
  classes: '/classes',
  classesWidget: '/classes-widget',
  classById: getOrCompilePath<{ classId: string | number }>('/classes/:classId'),
  testAuth: '/test-auth',
};
