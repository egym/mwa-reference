import React, { useRef, createContext, useContext, useCallback, useSyncExternalStore } from 'react';
import { setGlobalPortalsContext } from 'src/utils/helpers';

export type Store = Partial<{
  portalsContext: PortalsContext;
  exerciserInfo: Exerciser;
}>;

function useStoreData(initialState: Store): {
  get: () => Store;
  set: (value: Store) => void;
  subscribe: (callback: () => void) => () => void;
} {
  const store = useRef(initialState);

  const get = useCallback(() => store.current, []);

  const subscribers = useRef(new Set<() => void>());

  const set = useCallback((value: Store) => {
    store.current = { ...store.current, ...value };
    setGlobalPortalsContext(store.current.portalsContext!);
    subscribers.current.forEach((callback) => callback());
  }, []);

  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  }, []);

  return {
    get,
    set,
    subscribe,
  };
}

type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

const StoreContext = createContext<UseStoreDataReturnType | null>(null);

export const StoreProvider = ({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState: Partial<Store>;
}) => {
  return <StoreContext.Provider value={useStoreData(initialState)}>{children}</StoreContext.Provider>;
};

export const useStore = <SelectorOutput,>(
  selector: (store: Store) => SelectorOutput
): [SelectorOutput, (value: Partial<Store>) => void] => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('Store not found');
  }

  const state = useSyncExternalStore(
    store.subscribe,
    () => selector(store.get()),
    () => selector(store.get())
  );

  return [state, store.set];
};
