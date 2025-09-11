import { useState } from 'react';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint } from '@capacitor/barcode-scanner';
import { logDebug } from '@egym/mwa-logger';
import type { UseBarcodeScannerResultProps } from '../../BarcodeScannerProps';

const useBarcodeScanner = (): UseBarcodeScannerResultProps => {
  const [scannerResult, setScannerResult] = useState<string>('No Data...');

  const scanBarcode = async () => {
    try {
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: CapacitorBarcodeScannerTypeHint.ALL,
      });
      setScannerResult(result.ScanResult);
      logDebug('ScanResult', result.ScanResult);
    } catch (error) {
      logDebug('Error scanning barcode:', error);
      setScannerResult('Error scanning barcode');
    }
  };

  return {
    scannerResult,
    scanBarcode,
  };
};

export default useBarcodeScanner;
