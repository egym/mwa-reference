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
      gymName: string;
    };
    webkit: {
      messageHandlers: {
        onClassBookedClick: {
          postMessage: (body: { classId: number, className: string }) => void;
        }
        onClassItemClick: {
          postMessage: (body: { classId: number }) => void;
        }
      }
    }
  }
}
