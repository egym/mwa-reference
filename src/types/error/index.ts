import type { PortalsTopic } from '../portals';

export type PortalsError = {
  type: PortalsTopic;
  code?: number;
  url?: string;
  message?: string;
};
