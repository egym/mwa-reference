import { getOrCompilePath } from '../router';

export const routeUrls = {
  home: '/home',
  testCors: '/test-cors',
  classes: '/classes',
  classById: getOrCompilePath<{ classId: string | number }>('/classes/:classId'),
};
