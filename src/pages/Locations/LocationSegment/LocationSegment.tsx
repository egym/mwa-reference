import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IonText } from '@ionic/react';
import { callOutline, globeOutline, locationOutline, mailOutline } from 'ionicons/icons';
import type { Location, LocationInfoContent } from '../../../types';
import { LocationSegmentType } from '../../../types';
import LocationHours from '../LocationHours';
import LocationInfo from '../LocationInfo';
import styles from '../Locations.module.scss';

interface LocationSegmentProps {
  location?: Location;
  locationSegment: LocationSegmentType;
}

const LocationSegment: FC<LocationSegmentProps> = ({ location, locationSegment }: LocationSegmentProps) => {
  const { t } = useTranslation();

  const transformLocationFeed = (locationInfo: Location): LocationInfoContent[] => {
    const locationFeed: LocationInfoContent[] = [
      {
        icon: locationOutline,
        label: `${locationInfo.address.addressLine1} ${locationInfo.address.city} ${locationInfo.address.postalCode}`,
      },
      {
        icon: mailOutline,
        label: locationInfo.email,
      },
      {
        icon: callOutline,
        label: locationInfo.phone,
      },
      {
        icon: globeOutline,
        label: locationInfo.url,
        class: 'danger',
      },
    ];
    return locationFeed;
  };

  return (
    <>
      {!location && (
        <IonText className={styles.banner}>
          <p>{t('locations.notInformation')}</p>
        </IonText>
      )}
      {location && locationSegment === LocationSegmentType.Location && (
        <LocationInfo locationFeed={transformLocationFeed(location)} />
      )}
      {location && locationSegment === LocationSegmentType.Hours && <LocationHours location={location} />}
    </>
  );
};

export default LocationSegment;
