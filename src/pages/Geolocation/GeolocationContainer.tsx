import type { FC } from 'react';
import React from 'react';
import Geolocation from './Geolocation';
import useGeolocation from './hooks/useGeolocation';

const GeolocationContainer: FC = () => {
  const result = useGeolocation();

  return <Geolocation {...result} />;
};

export default GeolocationContainer;
