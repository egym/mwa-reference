import type { DateTime } from 'luxon';

export const getBackendUrl = () => {
  return {
    develop: 'https://mwa-test-be.herokuapp.com',
    production: 'https://mwa-test-be.herokuapp.com',
  }[window.portalsContext?.environment || 'develop'];
};

export const setGlobalPortalsContext = (context?: PortalsContext) => {
  window.portalsContext = context;
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
