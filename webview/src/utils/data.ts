import { addBusinessDays, format, getDay } from 'date-fns'

const today = new Date();

export type ClassItem = {
  id: number;
  name: string;
  trainer: string;
  gymName: string;
  time: string;
  date: Date;
  image: string;
}

export const classes: ClassItem[] = [
  {
    id: 1,
    name: 'Immunity Training',
    trainer: 'with Rebeca',
    gymName: 'Fitness Gym Berlin',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 1),
    image: '/assets/training_template_1.png',
  },
  {
    id: 2,
    name: 'Sculpt Guide Program',
    trainer: 'with Darren Adams',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 1),
    image: '/assets/training_template_2.png',
  },
  {
    id: 3,
    name: 'Lilly`s HIIT Cardios',
    trainer: 'with Lilly Fletcher',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 1),
    image: '/assets/training_template_3.png',
  },
  {
    id: 4,
    name: 'Dance Mix',
    trainer: 'with Rebeca',
    gymName: 'Fitness Gym Berlin',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 1),
    image: '/assets/training_template_24.png',
  },
  {
    id: 5,
    name: 'Immunity Training',
    trainer: 'with Rebeca',
    gymName: 'Fitness Gym Berlin',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 2),
    image: '/assets/training_template_25.png',
  },
  {
    id: 6,
    name: 'Sculpt Guide Program',
    trainer: 'with Darren Adams',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 2),
    image: '/assets/training_template_26.png',
  },
  {
    id: 7,
    name: 'Lilly`s HIIT Cardios',
    trainer: 'with Lilly Fletcher',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 3),
    image: '/assets/training_template_29.png',
  },
  {
    id: 8,
    name: 'Dance Mix',
    trainer: 'with Rebeca',
    gymName: 'Fitness Gym Berlin',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 2),
    image: '/assets/training_template_1.png',
  },
  {
    id: 9,
    name: 'Sculpt Guide Program',
    trainer: 'with Darren Adams',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 2),
    image: '/assets/training_template_2.png',
  },
  {
    id: 10,
    name: 'Lilly`s HIIT Cardios',
    trainer: 'with Lilly Fletcher',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 3),
    image: '/assets/training_template_3.png',
  },
  {
    id: 11,
    name: 'Dance Mix',
    trainer: 'with Rebeca',
    gymName: 'Fitness Gym Berlin',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 3),
    image: '/assets/training_template_24.png',
  },
  {
    id: 12,
    name: 'Lilly`s HIIT Cardios',
    trainer: 'with Lilly Fletcher',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 2),
    image: '/assets/training_template_25.png',
  },
  {
    id: 13,
    name: 'Lilly`s HIIT Cardios',
    trainer: 'with Lilly Fletcher',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 3),
    image: '/assets/training_template_26.png',
  },
  {
    id: 14,
    name: 'Lilly`s HIIT Cardios',
    trainer: 'with Lilly Fletcher',
    gymName: 'Super Gym',
    time: '8:30 AM - 45 min',
    date: addBusinessDays(today, 1),
    image: '/assets/training_template_29.png',
  },
];

export const groupedClasses: Record<string, ClassItem[]> = classes.reduce((acc, classItem) => {
  const formattedDay = format(classItem.date, 'eee, LLL d');

  return {
    ...acc,
    [formattedDay]: [
      // @ts-ignore
      ...(acc[formattedDay] || []),
      classItem
    ]
  }
}, {});

export const getClassDetailsById = (id: string) => {
  return classes.find(classItem => String(classItem.id) === id)
}
