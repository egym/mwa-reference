import { useCallback } from 'react';
import { useStore } from 'src/store';
import { getAuthTokenSelector, getExerciserSelector } from 'src/store/selectors';
import { requestAuthToken, requestExerciserInfo } from '../../../utils/nativeHandlers/requests';
import type { UseTestAuthResultProps } from '../TestAuthProps';

const useTestAuth = (): UseTestAuthResultProps => {
  const [authToken] = useStore(getAuthTokenSelector);
  const [exerciser] = useStore(getExerciserSelector);

  console.log('exerciser', exerciser);

  const handleRequestAuthToken = useCallback(() => {
    requestAuthToken();
  }, []);

  const handleRequestExerciserInfo = useCallback(() => {
    requestExerciserInfo();
  }, []);

  return {
    authToken,
    exerciserInfo: JSON.stringify(exerciser),
    handleRequestAuthToken,
    handleRequestExerciserInfo,
  };
};

export default useTestAuth;
