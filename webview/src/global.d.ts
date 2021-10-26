export {};
declare global {
  interface Window {
    AndroidInteractor?: {
      initialRoute: string;
      gymName: string
      onClassBookedClick: (className: string) => void;
    };
    portalInitialContext: {
      value: { startingRoute: string; gymName?: string },
    }
  }
}
