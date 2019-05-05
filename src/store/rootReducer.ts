import { Reducer } from 'redux'
import { createReducerFunction } from 'immer-reducer'
import { State, initialState } from 'store/rootState'
import { AppReducer } from 'store/reducers/app'

function composeReducers<S>(...reducers: (Reducer<S, any>)[]): Reducer<any, any> {
  return (firstState: any, action: any) =>
    reducers.reduce((state, subReducer) => {
      if (typeof subReducer === 'function') {
        return subReducer(state, action)
      }
      return state
    }, firstState) || firstState
}

export const rootReducer = composeReducers<State>(createReducerFunction(AppReducer, initialState))

export default rootReducer
