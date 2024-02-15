export type Location = {
  uuid: string;
  name: string;
  timezone: string;
  phone: string;
  email: string;
  url: string;
  address: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    country: string;
    postalCode: string;
    stateOrProvince: string;
    timezone: string;
    lat: number;
    lng: number;
  };
  workingHours: {
    Mon: string;
    Tue: string;
    Wed: string;
    Thu: string;
    Fri: string;
    Sat: string;
    Sun: string;
  } | null;
  workingHoursFreeText: string | null;
};

export type LocationInfoProps = {
  icon: string;
  label: string;
  class?: string;
};
