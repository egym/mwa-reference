// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type TestAuthContainerProps = {};

export type UseTestAuthResultProps = {
  authToken: string;
  handleRequestAuthToken: () => void;
  exerciserInfo: string;
  handleRequestExerciserInfo: () => void;
};

export type TestAuthProps = TestAuthContainerProps & UseTestAuthResultProps;
