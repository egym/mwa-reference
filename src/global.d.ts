export {};
declare global {
  interface Exerciser {
    externalGymChainId: string;
    externalGymId: string;
    membershipSubType?: string;
    membershipStatus?: string;
    startOfContract?: number;
    endOfContract?: number;
    email: string;
    firstName: string;
    lastName: string;
    userLocale?: string;
    tenantLocale?: string;
    userPicture?: string;
  }

  interface Window {
    // portals context
    portalInitialContext: {
      value: {
        url: string;
        startingRoute: string;
        lightPrimaryColor: string;
        primaryColor: string;
        primaryTextColor: string;
        secondaryColor: string;
        authToken: string | null;
        exerciserInfo: Exerciser | null;
      },
    }
  }
}
