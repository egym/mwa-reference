import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IonList, IonItem, IonText, IonSearchbar, IonContent, IonPage } from '@ionic/react';
import { CommonPageHeader, Loader } from 'src/components';
import type { Location } from '../../types';
import { routeUrls } from '../../utils/constants';
import type { LocationsPageProps } from './hooks/LocationsProps';
import styles from './Locations.module.scss';

const Locations: FC<LocationsPageProps> = ({ locations, loading }) => {
  const { t } = useTranslation();
  const [locationResult, setLocationResult] = useState<Location[]>([]);

  const handleSearch = (event: any) => {
    const searchText: string = event.target.value || '';
    const regex = new RegExp(searchText, 'i');
    const filteredResults: Location[] = locations.filter((location) => regex.test(location.name));
    setLocationResult(filteredResults);
  };

  const generateLocation = (): JSX.Element | JSX.Element[] => {
    if (locationResult.length > 0) {
      return locationResult.map((eachLocation: Location) => (
        <IonList lines="none" key={eachLocation.uuid} className={styles.listBackground}>
          <IonItem
            className={styles.itemCursor}
            detail={false}
            routerLink={`${routeUrls.locations}/${eachLocation.uuid}`}
            button
          >
            <IonText className={styles.textWrapper} class="ion-text-wrap">
              <h4>{eachLocation.name}</h4>
              <p>{eachLocation.address.addressLine1}</p>
              <p>
                {eachLocation.address.city}, {eachLocation.address.country}
              </p>
            </IonText>
          </IonItem>
        </IonList>
      ));
    }
    return (
      <IonText className={styles.banner}>
        <p>{t('locations.gymNotFound')}</p>
      </IonText>
    );
  };

  useEffect(() => {
    if (!loading) setLocationResult(locations);
  }, [loading, locations]);

  return (
    <IonPage>
      <CommonPageHeader title={t('locations.innerTitle')} />
      <IonContent fullscreen className="ion-padding">
        <IonSearchbar onIonChange={handleSearch} placeholder="Search by location" />
        {loading ? <Loader /> : generateLocation()}
      </IonContent>
    </IonPage>
  );
};

export default Locations;
