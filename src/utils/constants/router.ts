import { getOrCompilePath } from '../router';

export const routeUrls = {
  home: '/home',
  testCors: '/test-cors',
  occurrenceById: getOrCompilePath<{ occurrenceId: string | number }>('/occurrences/:occurrenceId'),
};
