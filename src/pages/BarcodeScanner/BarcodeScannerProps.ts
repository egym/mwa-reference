// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type BarcodeScannerContainerProps = {};

export type UseBarcodeScannerResultProps = {
  scanBarcode: () => Promise<void>;
  scannerResult?: string;
};

export type BarcodeScannerProps = BarcodeScannerContainerProps & UseBarcodeScannerResultProps;
