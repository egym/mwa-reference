import { createApiRequest } from 'src/utils/api';

const SUCCESS_URL = '/allow-everyone';
const USERS_URL = '/users';
const USER_BY_ID_URL = '/users/:id';

export const getSuccessfulRequest = createApiRequest<
  { message: string; data: { id: string; name: string } },
  never,
  never,
  { flag: string }
>(SUCCESS_URL, 'get', undefined, 'https://mwa-test-be.herokuapp.com');

export const getError500Request = createApiRequest<{ message: string; error: string }>(
  USERS_URL,
  'get',
  undefined,
  'https://mwa-test-be.herokuapp.com'
);

export const postError400Request = createApiRequest<{ message: string; error: string }, { name: string; age: number }>(
  USERS_URL,
  'post',
  undefined,
  'https://mwa-test-be.herokuapp.com'
);

export const putError404Request = createApiRequest<
  { message: string; error: string },
  { name: string; age: number },
  { id: string }
>(USER_BY_ID_URL, 'put', undefined, 'https://mwa-test-be.herokuapp.com');
