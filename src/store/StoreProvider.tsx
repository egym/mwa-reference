import React from 'react';
import type { Store } from './Store';
import { StoreContext } from './StoreContext';
import { useStoreData } from './useStoreData';

export const StoreProvider = ({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState: Partial<Store>;
}) => {
  return <StoreContext.Provider value={useStoreData(initialState)}>{children}</StoreContext.Provider>;
};
