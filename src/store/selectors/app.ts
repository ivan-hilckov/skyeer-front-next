import { State } from 'store/rootReducers'
import { AppState } from 'store/reducers/app'

export class AppSelectors {
  state: State

  constructor(state: State) {
    this.state = state
  }

  getApp(): AppState {
    return this.state.app
  }
}
