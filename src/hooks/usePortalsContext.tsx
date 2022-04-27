import React, {FC, useContext, useEffect, useReducer} from "react";
import {getAuthTokenSubscription, getExerciserInfoSubscription} from "../utils/nativeHandlers/subscriptions";
import Portals from "@ionic/portals";
import {PortalSubscription} from "@ionic/portals/types/definitions";

type PortalsContext = typeof window.portalInitialContext.value;

const initialState: Partial<PortalsContext> = { };

const types = {
  SET_PORTALS_CONTEXT: 'SET_PORTALS_CONTEXT',
  REMOVE_PORTALS_CONTEXT: 'REMOVE_PORTALS_CONTEXT'
}

type Action = {
  payload: Partial<PortalsContext>,
  type: typeof types.SET_PORTALS_CONTEXT | typeof types.REMOVE_PORTALS_CONTEXT
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.SET_PORTALS_CONTEXT:
      return {
        ...state,
        ...action.payload
      };
    case types.REMOVE_PORTALS_CONTEXT:
      return initialState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

type ProviderProps = {
  initialContext: PortalsContext
}

type ContextType = {
  state: Partial<PortalsContext>;
  setPortalsState: (context: Partial<PortalsContext>) => void;
  authToken?: string | null;
  exerciserInfo?: Exerciser | null;
  url?: string | null;
}

const PortalsStateContext = React.createContext<Partial<ContextType>>({});

export const PortalsProvider: FC<ProviderProps> = ({ children, initialContext }) => {
  const [state, dispatch] = useReducer(reducer, initialContext || initialState);

  useEffect(() => {
    let subscription: PortalSubscription;

    (async () => {
      subscription = await getAuthTokenSubscription(({ data: authToken }) => {
        localStorage.setItem('mwa::authToken', authToken);
        dispatch({
          type: types.SET_PORTALS_CONTEXT,
          payload: {
            authToken
          }
        });
      });
    })();

    return () => {
      Portals.unsubscribe(subscription)
    }
  }, []);

  useEffect(() => {
    let subscription: PortalSubscription;

    (async () => {
      subscription = await getExerciserInfoSubscription(({ data: exerciserInfo }) => {
        dispatch({
          type: types.SET_PORTALS_CONTEXT,
          payload: {
            exerciserInfo
          }
        });
      });
    })();

    return () => {
      Portals.unsubscribe(subscription)
    }
  }, [])

  const setPortalsState = (context: Partial<PortalsContext>) => {
    dispatch({
      type: types.SET_PORTALS_CONTEXT,
      payload: context
    })
  }

  return <PortalsStateContext.Provider
    value={{
      state,
      authToken: state.authToken,
      exerciserInfo: state.exerciserInfo,
      url: state.url,
      setPortalsState
  }}>
    {children}
  </PortalsStateContext.Provider>
}

export const usePortalsContext = () => useContext(PortalsStateContext)
