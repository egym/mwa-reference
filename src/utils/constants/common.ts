import { getPlatforms } from '@ionic/react';

const platforms = getPlatforms();

export const isIpad = platforms.includes('ipad');
export const isIphone = platforms.includes('iphone');
