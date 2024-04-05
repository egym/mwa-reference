import type { HttpResponse } from '@capacitor/core';
import type { JwtPayload } from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';
import { logDebug } from '@egym/mwa-logger';
import { requestAuthToken } from '../nativeHandlers/requests';

export const decodeToken = (token?: string) => {
  if (token) {
    const decodedAuthToken = jwtDecode<JwtPayload & Exerciser>(token);
    const exp = decodedAuthToken.exp || 0;
    const expiresAtDate = new Date(exp * 1000).toLocaleString();

    logDebug('authToken expiresAtDate', expiresAtDate);

    return decodedAuthToken;
  }
};

export const scheduleRefreshPortalsToken = (token?: string) => {
  if (token) {
    const decodedAuthToken = decodeToken(token)!;

    const now = Date.now() / 1000;
    const exp = decodedAuthToken.exp || 0;
    const diff = exp - now;

    logDebug('refresh in seconds', diff);

    setTimeout(() => {
      logDebug('Refresh token start', new Date().toLocaleString());
      requestAuthToken();
    }, diff * 1000);
  }
};

export const refreshTokenErrorHandler = (error: unknown) => {
  console.log('error', error);
  const err = error as unknown as HttpResponse;

  if ('status' in err) {
    if (err.status === 401) {
      logDebug('Refresh token start', new Date().toLocaleString());
      requestAuthToken();
    }
  }
};

export const retryFunction = (failureCount: number, error: unknown): boolean => {
  const err = error as HttpResponse;
  if (failureCount === 0 && err?.status === 401) {
    refreshTokenErrorHandler(error);
  }

  return err?.status === 401;
};
