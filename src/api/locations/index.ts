import { createApiRequest } from 'src/utils/api';
import type { Location } from '../../types';

const LOCATION_REQUEST = '/children';

export const getLocationRequest = createApiRequest<Location[]>(
  LOCATION_REQUEST,
  'get',
  undefined,
  'https://egymidp.netpulse.com/np/company'
);
