import type { FC } from 'react';
import { IonSpinner } from '@ionic/react';

const Loader: FC = () => {
  return (
    <div className="flex-row flex-center ion-padding-top">
      <IonSpinner />
    </div>
  );
};

export default Loader;
