// eslint-disable-next-line @typescript-eslint/ban-types
export type TestAuthContainerProps = {};

export type UseTestAuthResultProps = {
  authToken: string;
  handleRequestAuthToken: () => void;
  exerciserInfo: string;
  handleRequestExerciserInfo: () => void;
};

export type TestAuthProps = TestAuthContainerProps & UseTestAuthResultProps;
