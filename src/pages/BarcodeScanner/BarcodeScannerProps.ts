// eslint-disable-next-line @typescript-eslint/ban-types
export type BarcodeScannerContainerProps = {};

export type UseBarcodeScannerResultProps = {
  scanBarcode: () => Promise<void>;
};

export type BarcodeScannerProps = BarcodeScannerContainerProps & UseBarcodeScannerResultProps;
