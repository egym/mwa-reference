import { useQuery } from '@tanstack/react-query';
import { getClassByIdMock } from '../../api/classes';
import { queryKeys } from '../../utils/queryKeys';

type Props = {
  classId: number;
};

const useClassById = ({ classId }: Props) => {
  const classByIdQuery = useQuery({
    queryKey: queryKeys.classes.id(classId),
    queryFn: async () => getClassByIdMock(classId),
    enabled: Boolean(classId),
    select: (result) => result,
  });

  return {
    classByIdQuery,
  };
};

export default useClassById;
