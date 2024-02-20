import type { Location } from '../../../types';

export type LocationsPageProps = {
  locations: Location[];
  loading: boolean;
};

export type LocationsDetailProps = {
  locationDetail?: Location;
  loading: boolean;
};
