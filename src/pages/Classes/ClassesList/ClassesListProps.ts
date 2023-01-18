import type { DateTime } from 'luxon';
import type { ClassItem } from '../../../types';

// eslint-disable-next-line @typescript-eslint/ban-types
export type ClassesListContainerProps = {};

export type UseClassesListResultProps = {
  groupedClasses: Record<string, ClassItem[]>;
  loading: boolean;
  weekDays: { key: number; date: DateTime; selected: boolean }[];
};

export type ClassesListProps = ClassesListContainerProps & UseClassesListResultProps;
