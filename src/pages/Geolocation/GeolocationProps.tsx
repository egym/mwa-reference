export type UseGeolocationResultProps = {
  showCurrentCoordinates: () => void;
  checkPermissions: () => void;
  requestPermissions: () => void;
};

export type GeolocationProps = UseGeolocationResultProps;
