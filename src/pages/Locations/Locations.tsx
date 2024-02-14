import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IonContent, IonPage } from '@ionic/react';
import { CommonPageHeader } from '../../components';
import useLocation from './hooks/useLocation';
import LocationList from './LocationList';

const Locations: FC = () => {
  const { t } = useTranslation();
  const result = useLocation();

  return (
    <IonPage>
      <CommonPageHeader title={t('locations.innerTitle')} />
      <IonContent fullscreen className="ion-padding">
        <LocationList {...result} />
      </IonContent>
    </IonPage>
  );
};

export default Locations;
