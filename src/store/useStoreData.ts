import { useCallback, useRef } from 'react';
import { setGlobalPortalsContext } from '../utils/helpers';
import type { Store } from './Store';

export function useStoreData(initialState: Store): {
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

export type UseStoreDataReturnType = ReturnType<typeof useStoreData>;
