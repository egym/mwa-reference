import { useQuery } from 'react-query';
import { getClassesMock } from 'src/api/classes';
import { queryKeys } from 'src/utils/queryKeys';

const useClasses = () => {
  const classesQuery = useQuery(queryKeys.classes.all(), async () => getClassesMock(), { select: (result) => result });

  return {
    classesQuery,
  };
};

export default useClasses;
