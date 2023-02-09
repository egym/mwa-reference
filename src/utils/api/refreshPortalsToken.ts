import type { JwtPayload } from 'jwt-decode';
import jwtDecode from 'jwt-decode';
import { logDebug } from '@egym/mwa-logger';
import { requestAuthToken } from '../nativeHandlers/requests';

export const scheduleRefreshPortalsToken = (token?: string) => {
  if (token) {
    const decodedAuthToken = jwtDecode<JwtPayload & Exerciser>(token);

    const now = Date.now() / 1000;
    const exp = decodedAuthToken.exp || 0;
    const diff = exp - now;

    const expiresAtDate = new Date(exp * 1000).toLocaleString();

    logDebug('authToken expiresAtDate', expiresAtDate);

    setTimeout(() => {
      logDebug('Refresh token start', new Date().toLocaleString());
      requestAuthToken();
    }, diff * 1000);
  }
};
