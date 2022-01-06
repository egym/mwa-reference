import Portals from '@ionic/portals';
import { ClassItem } from './data';

export const onClassItemClick = async (classDetails: ClassItem) => {
  console.log('send message to the native side - onClassItemClick');
  return Portals.publish({
    topic: 'class-item-click', data: {
      className: classDetails.name
    }
  });
}

export const onClassBookedClick = async (classDetails: ClassItem) => {
  console.log('send message to the native side - onClassBookedClick');
  return Portals.publish({
    topic: 'book-class', data: {
      className: classDetails.name
    }
  });
}
