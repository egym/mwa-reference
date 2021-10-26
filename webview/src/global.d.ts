export {};
declare global {
  interface Window {
    AndroidInteractor?: {
      initialRoute: string;
      gymName: string
      onClassBookedClick: (className: string) => void;
      onClassItemClick: (classId: number) => void;
    };
  }
}
