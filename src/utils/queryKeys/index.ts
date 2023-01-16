// https://tkdodo.eu/blog/effective-react-query-keys
export const queryKeys = {
  auth: {
    all: () => ['auth'],
    session: (token: string) => [...queryKeys.auth.all(), 'session', token],
  },
  testCors: ['test-cors'],
};
