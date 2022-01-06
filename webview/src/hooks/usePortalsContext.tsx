import React, { FC, useContext, useReducer } from "react";

type PortalsContext = typeof window.portalInitialContext.value;

const initialState: PortalsContext = { startingRoute: '/home', gymName: '' };

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
}

const PortalsStateContext = React.createContext<Partial<ContextType>>({});

export const PortalsProvider: FC<ProviderProps> = ({ children, initialContext }) => {
  const [state, dispatch] = useReducer(reducer, initialContext || initialState);

  const setPortalsState = (context: Partial<PortalsContext>) => {
    dispatch({
      type: types.SET_PORTALS_CONTEXT,
      payload: context
    })
  }

  return <PortalsStateContext.Provider value={{ state, setPortalsState }}>
    {children}
  </PortalsStateContext.Provider>
}

export const usePortalsContext = () => useContext(PortalsStateContext)
