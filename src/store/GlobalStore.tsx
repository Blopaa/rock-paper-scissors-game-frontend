import React, {useReducer, useContext, createContext} from 'react'

interface State {
  socket: any
}

interface Action {
  type: string,
  payload: object | string | number 
}

const initalState: State = {
  socket: {}
}

const globalReducer = (state: State, action: Action) => {
  switch(action.type) { 
    case "CONNECT_SOCKET": 
      return {...state, socket: action.payload }
    default:
      return state
  }
}

const GlobalStateContext = createContext(initalState)
const GlobalDispatchContext = createContext((action: Action) => {});

export const useGlobalState = () => useContext(GlobalStateContext) 
export const useGlobalDispatch = () => useContext(GlobalDispatchContext) 

interface GlobalProviderProps {
  children: React.ReactChild
}

export default function GlobalStoreProvider({children}: GlobalProviderProps) {
  
  const [state, dispatch] = useReducer(globalReducer, initalState)
  
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}
