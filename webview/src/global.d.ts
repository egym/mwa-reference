export {};
declare global {
  interface Window {
    AndroidInteractor?: {
      mode: 'md' | 'ios';
      initialRoute: string;
      gymName: string
      onClassBookedClick: (className: string) => void;
    };
  }
}
