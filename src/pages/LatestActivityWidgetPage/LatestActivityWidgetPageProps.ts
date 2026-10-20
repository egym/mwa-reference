import type { RefObject } from 'react';
import type { AdvancedWorkout } from '../../types/workouts';

export type UseLatestActivityWidgetPageResultProps = {
  latestWorkoutsHistory: AdvancedWorkout[];
  isLoading: boolean;
  viewAllClick: () => void;
  shouldShowLogWorkoutButton: boolean;
  handleLogWorkoutClick: () => void;
  isEmptyState: boolean;
  title: string;
  contentRef: RefObject<HTMLDivElement | null>;
};

export type LatestActivityWidgetPageProps = UseLatestActivityWidgetPageResultProps;
