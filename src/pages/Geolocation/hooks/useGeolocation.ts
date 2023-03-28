import { Geolocation as GeolocationPlugin } from '@capacitor/geolocation';
import { useIonAlert } from '@ionic/react';
import type { UseGeolocationResultProps } from '../GeolocationProps';

const useGeolocation = (): UseGeolocationResultProps => {
  const [openAlert] = useIonAlert();

  const showCurrentCoordinates = async () => {
    const coordinates = await GeolocationPlugin.getCurrentPosition();

    await openAlert(JSON.stringify(coordinates, null, 2));
  };

  const checkPermissions = async () => {
    const permissionStatus = await GeolocationPlugin.checkPermissions();

    await openAlert(JSON.stringify(permissionStatus, null, 2));
  };

  const requestPermissions = async () => {
    const permissionStatus = await GeolocationPlugin.requestPermissions({
      permissions: ['location', 'coarseLocation'],
    });

    await openAlert(JSON.stringify(permissionStatus, null, 2));
  };

  return {
    showCurrentCoordinates,
    checkPermissions,
    requestPermissions,
  };
};

export default useGeolocation;
