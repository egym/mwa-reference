// eslint-disable-next-line @typescript-eslint/ban-types
export type TestCorsContainerProps = {};

export type UseTestCorsResult = {
  testCorsQuerySuccess: boolean;
  capacitorV4Result: string;
  communityHttpPluginResult?: string;
  browserFetchResult?: string;
  testCorsWithCapacitorV4: () => void;
  testCorsWithCommunityHttpPlugin: () => void;
  testCorsWithBrowserFetch: () => void;
};

export type TestCorsProps = TestCorsContainerProps & UseTestCorsResult;
