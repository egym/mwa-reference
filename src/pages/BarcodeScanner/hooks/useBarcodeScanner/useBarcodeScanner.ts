import { useCallback, useState } from 'react';
import {
  CapacitorBarcodeScanner,
  CapacitorBarcodeScannerCameraDirection,
  CapacitorBarcodeScannerScanOrientation,
} from '@capacitor/barcode-scanner';
import { CapacitorBarcodeScannerTypeHint } from '@capacitor/barcode-scanner/dist/esm/definitions';
import type { UseBarcodeScannerResultProps } from '../../BarcodeScannerProps';

const useBarcodeScanner = (): UseBarcodeScannerResultProps => {
  const [scanResult, setScanResult] = useState<string | undefined>();
  const [error, setError] = useState<boolean>(false);
  const [barcodeActive, setBarcodeActive] = useState<boolean>(false);

  const startScan = useCallback(async () => {
    try {
      setBarcodeActive(true);
      const { ScanResult } = await CapacitorBarcodeScanner.scanBarcode({
        hint: CapacitorBarcodeScannerTypeHint.ALL,
        scanOrientation: CapacitorBarcodeScannerScanOrientation.ADAPTIVE,
        cameraDirection: CapacitorBarcodeScannerCameraDirection.BACK,
        scanButton: true,
      });

      setScanResult(ScanResult);
      setBarcodeActive(false);
    } catch (error) {
      setError(true);
      setBarcodeActive(false);
      setScanResult('Error scanning barcode');
    }
  }, []);

  const stopScan = useCallback(() => {
    document.querySelector('body')?.classList.remove('scanner-active');
    setBarcodeActive(false);
  }, []);

  return {
    barcodeActive,
    scanResult,
    error,
    startScan,
    stopScan,
  };
};

export default useBarcodeScanner;
