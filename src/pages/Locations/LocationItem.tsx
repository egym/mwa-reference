import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IonList, IonItem, IonText } from '@ionic/react';
import { Loader } from 'src/components';
import './LocationItem.css';
import SearchBar from '../../components/SearchBar';
import type { Location } from '../../types';
import type { UseLocationResultProps } from './hooks/LocationsProps';

const LocationItem: FC<UseLocationResultProps> = ({ groupedLocations, loading }) => {
  const { t } = useTranslation();
  const [locationResult, setLocationResult] = useState<Location[]>([]);

  const handleSearch = (searchText: string) => {
    const regex = new RegExp(searchText, 'i');
    const filteredResults: Location[] = groupedLocations.filter((location) => regex.test(location.name));
    setLocationResult(filteredResults);
  };

  useEffect(() => {
    if (!loading) setLocationResult(groupedLocations);
  }, [loading, groupedLocations]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Loader />
      ) : locationResult.length > 0 ? (
        locationResult.map((eachLocation: Location) => {
          return (
            <IonList lines="none" key={eachLocation.uuid} className="custom-list">
              <IonItem className="custom-item" detail={false} routerLink={`/locations/${eachLocation.uuid}`} button>
                <IonText className="ion-text-wrap">
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
        <IonText className="ion-text-micro-wrap">
          <p>{t('locations.gymNotFound')}</p>
        </IonText>
      )}
    </>
  );
};

export default LocationItem;
