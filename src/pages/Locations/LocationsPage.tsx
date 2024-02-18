import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IonSearchbar, IonContent, IonPage } from '@ionic/react';
import { CommonPageHeader, Loader } from 'src/components';
import type { LocationsPageProps } from './hooks/LocationsProps';
import useLocationsPage from './hooks/useLocationsPage';
import LocationList from './LocationList';

const LocationsPage: FC<LocationsPageProps> = ({ locations: locationList, loading }) => {
  const { t } = useTranslation();
  const { locationResult, handleSearch } = useLocationsPage(locationList);

  return (
    <IonPage>
      <CommonPageHeader title={t('locations.innerTitle')} />
      <IonContent fullscreen className="ion-padding">
        <IonSearchbar onIonChange={handleSearch} placeholder={`${t('locations.searchByLocation')}`} />
        {loading ? <Loader /> : <LocationList locations={locationResult}></LocationList>}
      </IonContent>
    </IonPage>
  );
};

export default LocationsPage;
