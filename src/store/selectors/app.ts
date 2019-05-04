import createSelector from 'selectorator'
import { State } from 'store/rootReducers'

const getIsAuthorized = createSelector(
  ['app.isAuthorized'],
  isAuthorized => isAuthorized
)
const getCheckState = createSelector(
  ['app.checkState'],
  checkState => checkState
)

export class AppSelectors {
  state: State

  constructor(state: State) {
    this.state = state
  }

  getApp() {
    return this.state.app
  }

  getIsAuthorized() {
    return getIsAuthorized(this.state)
  }

  getCheckState() {
    return getCheckState(this.state)
  }
}
