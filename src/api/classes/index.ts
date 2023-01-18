import db from '../../mocks/db';
import type { ClassItem } from '../../types';
import { createApiRequest } from '../../utils/api';
import { waitAndResolve } from '../../utils/helpers';

const CLASSES_BASE_URL = '/mocks/classes';
const CLASS_BY_ID_URL = `${CLASSES_BASE_URL}/:classId`;

// service workers doesnt' work in iOS webview :(
export const getClasses = createApiRequest<ClassItem[]>(CLASSES_BASE_URL, 'get', undefined, 'http://localhost:8000');
export const getClassesMock = (): Promise<ClassItem[]> => {
  const classes = db.get('classes');

  return waitAndResolve<ClassItem[]>(classes, 2000);
};

export const getClassById = createApiRequest<ClassItem[], never, { classId: string }>(
  CLASS_BY_ID_URL,
  'get',
  undefined,
  'http://localhost:8000'
);
export const getClassByIdMock = (classId: number): Promise<ClassItem> => {
  const classById = db.getById('classes', classId)!;

  return waitAndResolve<ClassItem>(classById, 500);
};
