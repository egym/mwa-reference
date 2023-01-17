import type { HttpOptions, HttpResponse, HttpHeaders } from '@capacitor/core';
import { CapacitorHttp, CapacitorCookies } from '@capacitor/core';
import { compile } from 'path-to-regexp';
import qs from 'qs';
import { getBackendUrl } from '../helpers';

export const compileApiUrl = (url: string, urlParams?: Record<string, any>, urlPrefix?: string): string =>
  `${urlPrefix || ''}${url.includes(':') ? compile(url)(urlParams) : url}`;

export const prependSymbolIfExists = (symbol = '?', str?: string | null) => {
  return str ? `${symbol}${str}` : '';
};

export type DefaultQueryParamsRecord = Record<string, string | number | string[] | boolean | undefined>;
export type DefaultQueryParams = Record<
  string,
  string | number | string[] | boolean | undefined | DefaultQueryParamsRecord
>;

export type ApiRequestOptions<Payload = unknown, QueryParams = DefaultQueryParams, UrlParams = unknown> = {
  payload?: Payload;
  queryParams?: QueryParams;
  urlParams?: UrlParams;
};

const createHeaders = async (baseBackendUrl: string) => {
  const allCookies = await CapacitorCookies.getCookies({ url: baseBackendUrl });

  const headers: HttpHeaders = {};
  headers['Content-Type'] = 'application/json';
  headers.SomeAuthToken = allCookies.someAuthToken; // just an example...

  return headers;
};

export const createApiRequest =
  <Result = unknown, Payload = Result, UrlParams = unknown, QueryParams = DefaultQueryParams>(
    url: string,
    method: HttpOptions['method'] = 'get',
    defaultParams?: { query?: Partial<QueryParams>; url?: Partial<UrlParams> }
  ) =>
  async (
    options?: ApiRequestOptions<Payload, QueryParams, UrlParams>
  ): Promise<Omit<HttpResponse, 'data'> & { data: Result }> => {
    const urlParams = { ...defaultParams?.url, ...options?.urlParams };
    const queryParams = prependSymbolIfExists(
      '?',
      qs.stringify({ ...defaultParams?.query, ...options?.queryParams }, { arrayFormat: 'repeat' })
    );

    const baseBackendUrl = getBackendUrl();

    console.log('baseBackendUrl', baseBackendUrl);

    const response = await CapacitorHttp.request({
      method,
      url: `${baseBackendUrl}${compileApiUrl(url, urlParams)}${queryParams}`,
      data: options?.payload,
      responseType: 'json',
      headers: await createHeaders(baseBackendUrl),
    });

    return new Promise((resolve, reject) => {
      if (response.status >= 400 && response.status < 600) {
        reject(response);
      } else {
        resolve(response);
      }
    });
  };
