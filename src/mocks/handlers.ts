import { http, HttpResponse } from 'msw';
import db from './db';

export const handlers = [
  http.get('http://localhost:8000/mocks/classes', () => {
    const classes = db.get('classes');

    return HttpResponse.json(classes);
  }),
];
