import createSelector from 'selectorator'
import PROGRESS_TYPES from 'constants/progressTypes'

export interface AppState {
  checkState: PROGRESS_TYPES
  isAuthorized: boolean
}

export interface State {
  app: AppState
}

export const appInitialState: AppState = {
  checkState: PROGRESS_TYPES.WORK,
  isAuthorized: false,
}

export const initialState: State = {
  app: appInitialState,
}

const getApp = createSelector<State, AppState>(
  ['app'],
  app => app
)

export class Selectors {
  state: State

  constructor(state: State) {
    this.state = state
  }
  getApp() {
    return getApp(this.state)
  }
}
