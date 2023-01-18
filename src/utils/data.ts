import { addBusinessDays, format, parseISO } from 'date-fns';
import type { ClassItem } from 'src/types/classes';

const today = new Date();

export const classes: ClassItem[] = [
  {
    id: 1,
    name: 'Immunity Training',
    trainer: 'with Rebeca',
    gymName: 'Fitness Gym Berlin',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 1).toISOString(),
    image: '/assets/training_template_1.png',
    booked: false,
  },
  {
    id: 2,
    name: 'Sculpt Guide Program',
    trainer: 'with Darren Adams',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 1).toISOString(),
    image: '/assets/training_template_2.png',
    booked: true,
  },
  {
    id: 3,
    name: 'Lilly`s HIIT Cardios',
    trainer: 'with Lilly Fletcher',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 1).toISOString(),
    image: '/assets/training_template_3.png',
    booked: false,
  },
  {
    id: 4,
    name: 'Dance Mix',
    trainer: 'with Rebeca',
    gymName: 'Fitness Gym Berlin',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 1).toISOString(),
    image: '/assets/training_template_24.png',
    booked: true,
  },
  {
    id: 5,
    name: 'Immunity Training',
    trainer: 'with Rebeca',
    gymName: 'Fitness Gym Berlin',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 2).toISOString(),
    image: '/assets/training_template_25.png',
    booked: false,
  },
  {
    id: 6,
    name: 'Sculpt Guide Program',
    trainer: 'with Darren Adams',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 2).toISOString(),
    image: '/assets/training_template_26.png',
    booked: true,
  },
  {
    id: 7,
    name: 'Lilly`s HIIT Cardios',
    trainer: 'with Lilly Fletcher',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 3).toISOString(),
    image: '/assets/training_template_29.png',
    booked: true,
  },
  {
    id: 8,
    name: 'Dance Mix',
    trainer: 'with Rebeca',
    gymName: 'Fitness Gym Berlin',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 2).toISOString(),
    image: '/assets/training_template_1.png',
    booked: false,
  },
  {
    id: 9,
    name: 'Sculpt Guide Program',
    trainer: 'with Darren Adams',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 2).toISOString(),
    image: '/assets/training_template_2.png',
    booked: true,
  },
  {
    id: 10,
    name: 'Lilly`s HIIT Cardios',
    trainer: 'with Lilly Fletcher',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 3).toISOString(),
    image: '/assets/training_template_3.png',
    booked: false,
  },
  {
    id: 11,
    name: 'Dance Mix',
    trainer: 'with Rebeca',
    gymName: 'Fitness Gym Berlin',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 3).toISOString(),
    image: '/assets/training_template_24.png',
    booked: true,
  },
  {
    id: 12,
    name: 'Lilly`s HIIT Cardios',
    trainer: 'with Lilly Fletcher',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 2).toISOString(),
    image: '/assets/training_template_25.png',
    booked: false,
  },
  {
    id: 13,
    name: 'Lilly`s HIIT Cardios',
    trainer: 'with Lilly Fletcher',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 3).toISOString(),
    image: '/assets/training_template_26.png',
    booked: true,
  },
  {
    id: 14,
    name: 'Lilly`s HIIT Cardios',
    trainer: 'with Lilly Fletcher',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 1).toISOString(),
    image: '/assets/training_template_29.png',
    booked: false,
  },
];

export const groupedClasses: Record<string, ClassItem[]> = classes.reduce((acc, classItem) => {
  const formattedDay = format(parseISO(classItem.date), 'eee, LLL d');

  return {
    ...acc,
    [formattedDay]: [
      // @ts-ignore
      ...(acc[formattedDay] || []),
      classItem,
    ],
  };
}, {});

export const getClassDetailsById = (id: string) => {
  return classes.find((classItem) => String(classItem.id) === id);
};

export const getUpcomingClasses = () => {
  return classes.filter((classItem) => !classItem.booked);
};

export const getBookedClasses = () => {
  return classes.filter((classItem) => classItem.booked);
};
