import { createApiRequest } from 'src/utils/api';

const TEST_CORS_URL = '/test-cors';

export const getTestCors = createApiRequest<Record<string, string>>(TEST_CORS_URL, 'get');
