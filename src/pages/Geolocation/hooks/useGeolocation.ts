import type { Position } from '@capacitor/geolocation';
import { Geolocation as GeolocationPlugin } from '@capacitor/geolocation';
import { useIonAlert } from '@ionic/react';
import type { UseGeolocationResultProps } from '../GeolocationProps';

const useGeolocation = (): UseGeolocationResultProps => {
  const [openAlert] = useIonAlert();

  const showCurrentCoordinates = async () => {
    let coordinates: Position;
    try {
      coordinates = await GeolocationPlugin.getCurrentPosition({ timeout: 12000 });
    } catch (error) {
      const message =
        typeof error === 'object' && error !== null && 'message' in error && typeof error.message === 'string'
          ? error.message
          : String(error);

      await openAlert({ header: 'Unable to retrieve location', message, buttons: ['OK'] });
      return;
    }

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
