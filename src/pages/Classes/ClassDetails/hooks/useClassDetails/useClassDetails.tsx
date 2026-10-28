import { useMemo } from 'react';
import { useParams } from 'react-router';
import { DateTime } from 'luxon';
import useClassById from 'src/hooks/useClassById';
import type { UseClassDetailsResultProps } from '../../ClassDetailsProps';

const useClassDetails = (): UseClassDetailsResultProps => {
  const { classId } = useParams<'classId'>();

  const { classByIdQuery } = useClassById({ classId: classId ? Number(classId) : 0 });

  const weekDayFormatted = useMemo(() => {
    if (!classByIdQuery.isSuccess) return '';

    return DateTime.fromISO(classByIdQuery.data.date).toLocaleString({ weekday: 'short' });
  }, [classByIdQuery.data, classByIdQuery.isSuccess]);

  const dayFormatted = useMemo(() => {
    if (!classByIdQuery.isSuccess) return '';

    return DateTime.fromISO(classByIdQuery.data.date).toLocaleString({ day: '2-digit' });
  }, [classByIdQuery.data, classByIdQuery.isSuccess]);

  return {
    classDetails: classByIdQuery.data!,
    loading: classByIdQuery.isLoading,
    weekDayFormatted,
    dayFormatted,
  };
};

export default useClassDetails;
