import { useCallback, useEffect, useState } from 'react';
import { BarcodeScanner, CameraDirection } from '@capacitor-community/barcode-scanner';
import { logDebug } from '@egym/mwa-logger';
import type { UseBarcodeScannerResultProps } from '../../BarcodeScannerProps';

const useBarcodeScanner = (): UseBarcodeScannerResultProps => {
  const [scanResult, setScanResult] = useState<string | undefined>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    BarcodeScanner.prepare();

    return () => {
      BarcodeScanner.showBackground();
      BarcodeScanner.stopScan();
    };
  }, []);

  const startScan = useCallback(async () => {
    try {
      const permissionResult = await BarcodeScanner.checkPermission({ force: true });

      logDebug('barcode scanner permission result', permissionResult);

      if (permissionResult.granted) {
        document.querySelector('body')?.classList.add('scanner-active');
        await BarcodeScanner.hideBackground();

        const result = await BarcodeScanner.startScan({ cameraDirection: CameraDirection.BACK });

        if (result.hasContent) {
          logDebug('Scanner result', result.content);
          setScanResult(result.content);
        } else {
          logDebug('No content', result);
          setScanResult('No content');
        }
      } else if (permissionResult.denied) {
        // the user denied permission for good
        // redirect user to app settings if they want to grant it anyway
        const c = confirm('If you want to grant permission for using your camera, enable it in the app settings.');
        if (c) {
          await BarcodeScanner.openAppSettings();
        }
      } else if (permissionResult.asked) {
        setScanResult('Permission requested. Click "Start Scan" again.');
      } else {
        setScanResult('Permission not granted');
        setError(true);
      }
    } catch (e) {
      setError(true);
      // @ts-ignore
      logDebug('Scanning Error', e.toString());
      // @ts-ignore
      setScanResult(e.toString());
    } finally {
      await BarcodeScanner.showBackground();
      document.querySelector('body')?.classList.remove('scanner-active');
    }
  }, []);

  return {
    scanResult,
    error,
    startScan,
  };
};

export default useBarcodeScanner;
