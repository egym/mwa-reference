import { useMemo } from 'react';
import { useParams } from 'react-router';
import type { ClassItem } from 'src/types';
import { getClassDetailsById } from 'src/utils/data';
import type { UseClassDetailsResultProps } from '../../ClassDetailsProps';

const useClassDetails = (): UseClassDetailsResultProps => {
  const params = useParams<{ classId: string }>();

  const classDetails = useMemo(() => {
    return getClassDetailsById(params.classId);
  }, [params.classId]);

  return {
    classDetails: {} as ClassItem,
  };
};

export default useClassDetails;
