import { addDays, format, isSameDay, subDays } from 'date-fns';

const today = new Date();

const currenDayOfWeek = Number(format(today, 'e')) - 1;

export const weekDays = Array.from({ length: 7 }).map((_, dayNumber) => {
  const date =
    currenDayOfWeek >= dayNumber
      ? subDays(today, currenDayOfWeek - dayNumber)
      : addDays(today, dayNumber - currenDayOfWeek);

  return {
    date,
    currentDay: isSameDay(today, date),
  };
});
