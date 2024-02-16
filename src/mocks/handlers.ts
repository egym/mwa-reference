import { rest } from 'msw';
import type { ClassItem } from '../types';
import db from './db';

export const handlers = [
  rest.get<ClassItem[]>('http://localhost:8000/mocks/classes', (req, res, ctx) => {
    const classes = db.get('classes');

    return res(ctx.json(classes));
  }),
];
