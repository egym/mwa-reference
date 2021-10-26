export {};
declare global {
  interface Window {
    MobileNativeInteractor?: {
      mode: 'md' | 'ios';
      initialRoute: string;
      gymName: string
      onClassBookedClick: (className: string) => void;
    };
  }
}
