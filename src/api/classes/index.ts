import db from '../../mocks/db';
import type { ClassItem } from '../../types';
import { createApiRequest } from '../../utils/api';
import { waitAndResolve } from '../../utils/helpers';

const CLASSES_BASE_URL = '/mocks/classes';

// service workers doesnt' work in iOS webview :(
export const getClasses = createApiRequest<ClassItem[]>(CLASSES_BASE_URL, 'get', undefined, 'http://localhost:8000');
export const getClassesMock = (): Promise<ClassItem[]> => {
  const classes = db.get('classes');

  return waitAndResolve<ClassItem[]>(classes, 2000);
};
