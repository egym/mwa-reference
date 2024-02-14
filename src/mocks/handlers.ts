import { http, HttpResponse } from 'msw';
import type { ClassItem } from '../types';
import db from './db';

export const handlers = [
  //@ts-ignore
  http.get<ClassItem[]>('http://localhost:8000/mocks/classes', () => {
    const classes = db.get('classes');
    return HttpResponse.json(classes);
  }),
];
