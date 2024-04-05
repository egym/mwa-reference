import { useQuery } from '@tanstack/react-query';
import { getClassesMock } from 'src/api/classes';
import { queryKeys } from 'src/utils/queryKeys';

const useClasses = () => {
  const classesQuery = useQuery({
    queryKey: queryKeys.classes.all(),
    queryFn: async () => getClassesMock(),
    select: (result) => result,
  });

  return {
    classesQuery,
  };
};

export default useClasses;
