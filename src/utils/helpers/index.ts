import type { DateTime } from 'luxon';
import { Color } from '../color';

export const setGlobalPortalsContext = (context: PortalsContext) => {
  window.portalsContext = context;
};

export const setThemeColors = (context: PortalsContext) => {
  const primaryColor = new Color(context.primaryColor);
  const textColor = new Color(context.primaryTextColor);

  document.body.style.setProperty('--ion-color-primary', primaryColor.hex);
  document.body.style.setProperty('--ion-color-primary-rgb', primaryColor.rgbString);
  document.body.style.setProperty('--ion-color-primary-contrast', textColor.hex);
  document.body.style.setProperty('--ion-color-primary-contrast-rgb', textColor.rgbString);
  document.body.style.setProperty('--ion-color-primary-shade', primaryColor.shade(0.12).hex);
  document.body.style.setProperty('--ion-color-primary-tint', context.lightPrimaryColor);
};

type Cx = (...classNames: (undefined | null | string | boolean)[]) => string;

export const clsx: Cx = (...args) =>
  args
    .flat()
    .filter((x) => x !== null && x !== undefined && typeof x !== 'boolean')
    .join(' ');

export const parseJson = (data: string) => {
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
};

export const waitAndResolve = <Data>(data: Data, timeout: number) => {
  return new Promise<Data>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, timeout);
  });
};

export const getWeekRangeByDay = (day: DateTime) => {
  const currenDayOfWeek = day.weekday - 1;

  return Array.from({ length: 7 })
    .map((_, dayNumber) => {
      return currenDayOfWeek >= dayNumber
        ? day.minus({ days: currenDayOfWeek - dayNumber })
        : day.plus({ days: dayNumber - currenDayOfWeek });
    })
    .map((date) => {
      return {
        key: date.toMillis(),
        date,
        selected: date.equals(day),
      };
    });
};

export const hexToRgb = (hex: string) => {
  let result = null;
  if (hex.length === 6 || hex.length === 7) {
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  } else if (hex.length === 8 || hex.length === 9) {
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  }
  return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
};
