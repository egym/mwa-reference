import { useQuery } from 'react-query';
import { getClassByIdMock } from '../../api/classes';
import { queryKeys } from '../../utils/queryKeys';

type Props = {
  classId: number;
};

const useClassById = ({ classId }: Props) => {
  const classByIdQuery = useQuery(queryKeys.classes.id(classId), async () => getClassByIdMock(classId), {
    enabled: Boolean(classId),
    select: (result) => result,
  });

  return {
    classByIdQuery,
  };
};

export default useClassById;
