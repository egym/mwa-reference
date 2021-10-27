import { ClassItem } from './data';

export const onClassItemClick = (classDetails: ClassItem) => {
  if (window.AndroidInteractor?.onClassItemClick) {
    window.AndroidInteractor?.onClassItemClick(classDetails.id);
  }
  if (window.webkit?.messageHandlers.onClassItemClick) {
    window.webkit?.messageHandlers.onClassItemClick.postMessage({ classId: classDetails.id });
  }
}

export const onClassBookedClick = (classDetails: ClassItem) => {
  if (window.AndroidInteractor) {
    window.AndroidInteractor?.onClassBookedClick(Number(classDetails.id), classDetails.name);
  }

  if (window.webkit?.messageHandlers.onClassBookedClick) {
    window.webkit?.messageHandlers.onClassBookedClick.postMessage({ classId: Number(classDetails.id), className: classDetails.name });
  }
}
