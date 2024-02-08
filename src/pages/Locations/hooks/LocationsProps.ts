import type { Location } from '../../../types';

// eslint-disable-next-line @typescript-eslint/ban-types
export type LocationContainerProps = {};

export type UseLocationResultProps = {
    groupedLocations: Location[];
  loading: boolean;
};

export type LocationProps = LocationContainerProps & UseLocationResultProps;
