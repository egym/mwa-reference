import { useCallback, useMemo, useState } from 'react';
import { useTestCors } from 'src/hooks';
import type { UseTestCorsResult } from '../../TestCorsProps';

const useTestCorsPage = (): UseTestCorsResult => {
  const { testCorsQuery } = useTestCors();

  const [browserFetchResult, setBrowserFetchResult] = useState<string>();
  const capacitorV4Result = useMemo<string>(() => {
    if (testCorsQuery.isFetching) return 'Fetching...';

    return testCorsQuery.data?.message || String(testCorsQuery.error || '');
  }, [testCorsQuery.data?.message, testCorsQuery.error, testCorsQuery.isFetching]);

  const testCorsWithCapacitorV4 = useCallback(async () => {
    await testCorsQuery.refetch();
  }, [testCorsQuery]);

  const testCorsWithBrowserFetch = useCallback(async () => {
    try {
      setBrowserFetchResult('Fetching...');
      const test = await fetch('https://mwa-test-be.herokuapp.com/test-cors');
      const data = await test.json();

      setBrowserFetchResult(data.data.message);
    } catch (e) {
      // @ts-ignore
      setBrowserFetchResult(`Error: ${e.message}`);
    }
  }, []);

  return {
    testCorsQuerySuccess: testCorsQuery.isSuccess,
    browserFetchResult,
    capacitorV4Result,
    testCorsWithCapacitorV4,
    testCorsWithBrowserFetch,
  };
};

export default useTestCorsPage;
