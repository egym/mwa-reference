import { createApiRequest } from 'src/utils/api';

const TEST_CORS_URL = '/test-cors';

export const getTestCors = createApiRequest<{ message: string }>(
  TEST_CORS_URL,
  'get',
  undefined,
  'https://mwa-test-be.herokuapp.com'
);
