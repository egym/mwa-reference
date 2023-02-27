// eslint-disable-next-line @typescript-eslint/ban-types
export type BarcodeScannerContainerProps = {};

export type UseBarcodeScannerResultProps = {
  barcodeActive: boolean;
  startScan: () => void;
  stopScan: () => void;
  scanResult?: string;
  error: boolean;
};

export type BarcodeScannerProps = BarcodeScannerContainerProps & UseBarcodeScannerResultProps;
