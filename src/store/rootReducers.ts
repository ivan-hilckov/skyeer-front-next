import { createReducerFunction } from 'immer-reducer'
import { combineReducers } from 'redux'
import { AppReducer, AppState, appInitialState } from 'store/reducers/app'

export interface State {
  app: AppState
}

export const initialState: State = {
  app: appInitialState,
}

function composeReducers<S>(...reducers: (Reducer<S, any>)[]): Reducer<any, any> {
  return (firstState: any, action: any) =>
    reducers.reduce((state, subReducer) => {
      if (typeof subReducer === 'function') {
        return subReducer(state, action)
      }
      return state
    }, firstState) || firstState
}

export const reducer = composeReducers<State>(createReducerFunction(AppReducer, initialState))

const rootReducer = combineReducers({})

export default rootReducer
