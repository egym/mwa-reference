import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IonList, IonItem, IonText, IonSearchbar } from '@ionic/react';
import { Loader } from 'src/components';
import type { Location } from '../../types';
import { routeUrls } from '../../utils/constants';
import type { UseLocationResultProps } from './hooks/LocationsProps';
import styles from './Location.module.scss';

const LocationList: FC<UseLocationResultProps> = ({ locations, loading }) => {
  const { t } = useTranslation();
  const [locationResult, setLocationResult] = useState<Location[]>([]);

  const handleSearch = (event: any) => {
    const searchText: string = event.target.value || '';
    const regex = new RegExp(searchText, 'i');
    const filteredResults: Location[] = locations.filter((location) => regex.test(location.name));
    setLocationResult(filteredResults);
  };

  useEffect(() => {
    if (!loading) setLocationResult(locations);
  }, [loading, locations]);

  return (
    <>
      <IonSearchbar onIonChange={handleSearch} placeholder="Search by location" />
      {loading ? (
        <Loader />
      ) : locationResult.length > 0 ? (
        locationResult.map((eachLocation: Location) => {
          return (
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
          );
        })
      ) : (
        <IonText className={styles.banner}>
          <p>{t('locations.gymNotFound')}</p>
        </IonText>
      )}
    </>
  );
};

export default LocationList;
