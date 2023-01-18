import type { ClassItem } from 'src/types';

// eslint-disable-next-line @typescript-eslint/ban-types
export type ClassesWidgetContainerProps = {};

export type UseClassesWidgetResultProps = {
  loading: boolean;
  upcomingClasses: ClassItem[];
  bookedClasses: ClassItem[];
  handleClassItemClick: (classId: number) => void;
};

export type ClassesWidgetProps = ClassesWidgetContainerProps & UseClassesWidgetResultProps;
