// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type TestCorsContainerProps = {};

export type UseTestCorsResult = {
  testCorsQuerySuccess: boolean;
  capacitorV4Result: string;
  browserFetchResult?: string;
  testCorsWithCapacitorV4: () => void;
  testCorsWithBrowserFetch: () => void;
};

export type TestCorsProps = TestCorsContainerProps & UseTestCorsResult;
