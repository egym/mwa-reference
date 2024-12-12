// https://tkdodo.eu/blog/effective-react-query-keys
export const queryKeys = {
  auth: {
    all: () => ['auth'],
    session: (token: string) => [...queryKeys.auth.all(), 'session', token],
  },
  classes: {
    all: () => ['classes', 'all'],
    id: (id: number) => [...queryKeys.classes.all(), 'id', id],
  },
  testCors: ['test-cors'],
  testLogger: {
    success: ['success'],
    serverDown: ['serverDown'],
    validationError: ['validationError'],
    editError: ['editError'],
  },
  latestActivities: ['latestActivities'],
};
