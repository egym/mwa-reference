import { useParams } from 'react-router';
import useClassById from 'src/hooks/useClassById';
import type { UseClassDetailsResultProps } from '../../ClassDetailsProps';

const useClassDetails = (): UseClassDetailsResultProps => {
  const params = useParams<{ classId: string }>();

  const { classByIdQuery } = useClassById({ classId: Number(params.classId) });

  return {
    classDetails: classByIdQuery.data!,
    loading: classByIdQuery.isLoading,
  };
};

export default useClassDetails;
