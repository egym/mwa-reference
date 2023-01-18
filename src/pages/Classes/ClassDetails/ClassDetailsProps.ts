import type { ClassItem } from 'src/types';

// eslint-disable-next-line @typescript-eslint/ban-types
export type ClassDetailsContainerProps = {};

export type UseClassDetailsResultProps = {
  classDetails: ClassItem;
  loading: boolean;
  weekDayFormatted: string;
  dayFormatted: string;
};

export type ClassDetailsProps = ClassDetailsContainerProps & UseClassDetailsResultProps;
