import { useQuery } from '@tanstack/react-query';
import type { AdvancedWorkout } from '../../types/workouts';
import { queryKeys } from '../../utils/queryKeys';
import { latestActivitiesMockData } from './mockData';

const useLatestActivities = () => {
  const latestActivitiesQuery = useQuery({
    queryKey: queryKeys.latestActivities,
    queryFn: async () => {
      return new Promise<AdvancedWorkout[]>((resolve) => {
        setTimeout(() => {
          return resolve(latestActivitiesMockData as AdvancedWorkout[]);
        }, 2000);
      });
    },
  });

  return {
    latestActivitiesQuery,
  };
};

export default useLatestActivities;
