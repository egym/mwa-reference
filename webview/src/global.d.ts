export {};
declare global {
  interface Window {
    AndroidInteractor?: {
      initialRoute: string;
      gymName: string
      onClassBookedClick: (classId: number, className: string) => void;
      onClassItemClick: (classId: number) => void;
    };
    IOSInteractor?: {
      initialRoute: string;
    }
  }
}
