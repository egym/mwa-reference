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
