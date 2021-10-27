export {};
declare global {
  interface Window {
    AndroidInteractor?: {
      onClassBookedClick: (classId: number, className: string) => void;
      onClassItemClick: (classId: number) => void;
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
