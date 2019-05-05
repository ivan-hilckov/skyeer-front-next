import { createActionCreators, ImmerReducer } from 'immer-reducer'
import PROGRESS_TYPES from 'constants/progressTypes'
import { State, Selectors } from 'store/rootState'

export class AppReducer extends ImmerReducer<State> {
  selectors = new Selectors(this.draftState)

  checkAuth() {
    const app = this.selectors.getApp()
    app.checkState = PROGRESS_TYPES.WORK
  }

  checkAuthSuccess() {
    const app = this.selectors.getApp()
    app.checkState = PROGRESS_TYPES.SUCCESS
    app.isAuthorized = true
  }

  checkAuthError() {
    const app = this.selectors.getApp()
    app.checkState = PROGRESS_TYPES.SUCCESS
    app.isAuthorized = false
  }
}

export const AppActions = createActionCreators(AppReducer)
