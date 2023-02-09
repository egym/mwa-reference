// We need to tell TypeScript that when we write "import styles from './styles.scss' we mean to load a module (to look for a './styles.scss.d.ts').
declare module '*.scss';

interface Window {
  portalsContext: PortalsContext;
  backendUrl: string;
}

interface PortalsContext {
  startingRoute: string;
  language: string;
  authToken: string;
  lightPrimaryColor: string;
  primaryColor: string;
  primaryTextColor: string;
  url: string;
  showLogger: 'true' | 'false';
}

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
