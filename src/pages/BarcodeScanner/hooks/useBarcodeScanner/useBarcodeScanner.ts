import { useCallback, useEffect, useState } from 'react';
import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHint } from '@capacitor/barcode-scanner';
import type { UseBarcodeScannerResultProps } from '../../BarcodeScannerProps';

const useBarcodeScanner = (): UseBarcodeScannerResultProps => {
  const [scannerResult, setScannerResult] = useState<string>('No Data...');
  console.log(scannerResult);
  const scanBarcode = async () => {
    const result = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHint.ALL,
    });
    setScannerResult(result.ScanResult);
  };

  return {
    scanBarcode,
  };
};

export default useBarcodeScanner;
