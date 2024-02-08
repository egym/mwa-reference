import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IonContent, IonPage } from '@ionic/react';
import CommonPageHeader from 'src/components/CommonPageHeader';
import useLocation from './hooks/useLocation';
import LocationItem from './LocationItem';
import './LocationItem.css';

const Locations: FC = () => {
  const { t } = useTranslation();
  const result = useLocation();

  return (
    <IonPage>
      <IonContent fullscreen>
        <CommonPageHeader title={t('locations.innerTitle')} />
        <IonContent className="ion-padding">
          <LocationItem {...result} />
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Locations;
