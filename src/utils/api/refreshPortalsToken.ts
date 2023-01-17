import type { JwtPayload } from 'jwt-decode';
import jwtDecode from 'jwt-decode';
import { requestAuthToken } from '../nativeHandlers/requests';

export const scheduleRefreshPortalsToken = (token?: string) => {
  if (token) {
    const decodedAuthToken = jwtDecode<JwtPayload & Exerciser>(token);

    const now = Date.now() / 1000;
    const exp = decodedAuthToken.exp || 0;
    // 5 minutes before token expires
    const diff = exp - now - 300;

    const expiresAtDate = new Date(exp * 1000).toLocaleString();

    console.log('[WEB] - authToken expiresAtDate', expiresAtDate);

    setTimeout(() => {
      console.log(`[WEB] - Refresh token start ${new Date().toLocaleString()}`);
      requestAuthToken();
    }, diff * 1000);
  }
};
