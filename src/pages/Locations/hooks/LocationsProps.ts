import type { Location } from '../../../types';

// eslint-disable-next-line @typescript-eslint/ban-types
export type LocationContainerProps = {};

export type LocationsPageProps = {
  locations: Location[];
  loading: boolean;
};

export type LocationProps = LocationContainerProps & LocationsPageProps;
