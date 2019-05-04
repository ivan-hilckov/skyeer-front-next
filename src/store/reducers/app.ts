import { createActionCreators, ImmerReducer } from 'immer-reducer'
import STATE from 'constants/state'
import { State } from 'store/rootReducers'
import { AppSelectors } from 'store/selectors/app'

export interface AppState {
  checkState: STATE
  isAuthorized: boolean | undefined
}

export const appInitialState: AppState = {
  checkState: STATE.IDLE,
  isAuthorized: undefined,
}

export class AppReducer extends ImmerReducer<State> {
  selectors = new AppSelectors(this.draftState)
  checkAuth() {
    const app = this.selectors.getApp()

    app.checkState = STATE.WORK
    app.isAuthorized = undefined
  }
  checkAuthSuccess() {
    const app = this.selectors.getApp()

    app.checkState = STATE.SUCCESS
    app.isAuthorized = true
  }
  checkAuthError() {
    const app = this.selectors.getApp()

    app.checkState = STATE.SUCCESS
    app.isAuthorized = false
  }
}

export const AppActions = createActionCreators(AppReducer)
