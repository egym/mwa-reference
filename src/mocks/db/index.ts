import { DateTime } from 'luxon';
import type { ClassItem } from 'src/types';

type Data = {
  classes: ClassItem[];
};

class MockDB {
  data: Data;

  initialData: Data;

  constructor(initialData: Data) {
    this.initialData = initialData;
    this.data = initialData;
  }

  get(model: keyof Data) {
    return this.data[model];
  }

  getById(model: keyof Data, id: number) {
    const allData = this.get(model);

    return allData.find((it) => it.id === id);
  }

  modify(model: keyof Data, callback: ({ previousData }: { previousData: any }) => any) {
    const previousData = this.data[model];

    this.data[model] = callback({ previousData });
  }

  getByIdAndModify(model: keyof Data, id: number, callback: ({ previousEntry }: { previousEntry: any }) => any) {
    const previousEntryById = this.getById(model, id);

    const newEntry = callback({ previousEntry: previousEntryById });

    this.modify(model, ({ previousData }) =>
      previousData.map((it: any) => {
        if (it.id === id) return newEntry;
        return it;
      })
    );

    return this.getById(model, id);
  }
}

const today = DateTime.now();

export default new MockDB({
  classes: [
    {
      id: 1,
      name: 'Immunity Training',
      trainer: 'with Rebeca',
      gymName: 'Fitness Gym Berlin',
      time: '8:30 AM - 45 min',
      date: today.plus({ day: 1 }).toISO(),
      image: '/assets/training_template_1.png',
      booked: false,
    },
    {
      id: 2,
      name: 'Sculpt Guide Program',
      trainer: 'with Darren Adams',
      gymName: 'Super Gym',
      time: '8:30 AM - 45 min',
      date: today.plus({ day: 1 }).toISO(),
      image: '/assets/training_template_2.png',
      booked: true,
    },
    {
      id: 3,
      name: 'Lilly`s HIIT Cardios',
      trainer: 'with Lilly Fletcher',
      gymName: 'Super Gym',
      time: '8:30 AM - 45 min',
      date: today.plus({ day: 1 }).toISO(),
      image: '/assets/training_template_3.png',
      booked: false,
    },
    {
      id: 4,
      name: 'Dance Mix',
      trainer: 'with Rebeca',
      gymName: 'Fitness Gym Berlin',
      time: '8:30 AM - 45 min',
      date: today.plus({ day: 1 }).toISO(),
      image: '/assets/training_template_24.png',
      booked: true,
    },
    {
      id: 5,
      name: 'Immunity Training',
      trainer: 'with Rebeca',
      gymName: 'Fitness Gym Berlin',
      time: '8:30 AM - 45 min',
      date: today.plus({ day: 2 }).toISO(),
      image: '/assets/training_template_25.png',
      booked: false,
    },
    {
      id: 6,
      name: 'Sculpt Guide Program',
      trainer: 'with Darren Adams',
      gymName: 'Super Gym',
      time: '8:30 AM - 45 min',
      date: today.plus({ day: 2 }).toISO(),
      image: '/assets/training_template_26.png',
      booked: true,
    },
    {
      id: 7,
      name: 'Lilly`s HIIT Cardios',
      trainer: 'with Lilly Fletcher',
      gymName: 'Super Gym',
      time: '8:30 AM - 45 min',
      date: today.plus({ day: 3 }).toISO(),
      image: '/assets/training_template_29.png',
      booked: true,
    },
    {
      id: 8,
      name: 'Dance Mix',
      trainer: 'with Rebeca',
      gymName: 'Fitness Gym Berlin',
      time: '8:30 AM - 45 min',
      date: today.plus({ day: 2 }).toISO(),
      image: '/assets/training_template_1.png',
      booked: false,
    },
    {
      id: 9,
      name: 'Sculpt Guide Program',
      trainer: 'with Darren Adams',
      gymName: 'Super Gym',
      time: '8:30 AM - 45 min',
      date: today.plus({ day: 2 }).toISO(),
      image: '/assets/training_template_2.png',
      booked: true,
    },
    {
      id: 10,
      name: 'Lilly`s HIIT Cardios',
      trainer: 'with Lilly Fletcher',
      gymName: 'Super Gym',
      time: '8:30 AM - 45 min',
      date: today.plus({ day: 3 }).toISO(),
      image: '/assets/training_template_3.png',
      booked: false,
    },
    {
      id: 11,
      name: 'Dance Mix',
      trainer: 'with Rebeca',
      gymName: 'Fitness Gym Berlin',
      time: '8:30 AM - 45 min',
      date: today.plus({ day: 3 }).toISO(),
      image: '/assets/training_template_24.png',
      booked: true,
    },
    {
      id: 12,
      name: 'Lilly`s HIIT Cardios',
      trainer: 'with Lilly Fletcher',
      gymName: 'Super Gym',
      time: '8:30 AM - 45 min',
      date: today.plus({ day: 2 }).toISO(),
      image: '/assets/training_template_25.png',
      booked: false,
    },
    {
      id: 13,
      name: 'Lilly`s HIIT Cardios',
      trainer: 'with Lilly Fletcher',
      gymName: 'Super Gym',
      time: '8:30 AM - 45 min',
      date: today.plus({ day: 3 }).toISO(),
      image: '/assets/training_template_26.png',
      booked: true,
    },
    {
      id: 14,
      name: 'Lilly`s HIIT Cardios',
      trainer: 'with Lilly Fletcher',
      gymName: 'Super Gym',
      time: '8:30 AM - 45 min',
      date: today.plus({ day: 1 }).toISO(),
      image: '/assets/training_template_29.png',
      booked: false,
    },
  ],
});
