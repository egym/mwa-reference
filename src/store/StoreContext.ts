import { createContext } from 'react';
import type { UseStoreDataReturnType } from './useStoreData';

export const StoreContext = createContext<UseStoreDataReturnType | null>(null);
