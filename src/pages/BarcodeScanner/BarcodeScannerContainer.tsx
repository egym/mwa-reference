import type { FC } from 'react';
import BarcodeScanner from './BarcodeScanner';
import useBarcodeScanner from './hooks/useBarcodeScanner';

const BarcodeScannerContainer: FC = () => {
  const result = useBarcodeScanner();

  return <BarcodeScanner {...result} />;
};

export default BarcodeScannerContainer;
