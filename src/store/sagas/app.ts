import { all, call, put, takeLatest } from 'redux-saga/effects'
import endpoints from 'constants/endpoints'
import { AppActions } from 'store/reducers/app'
import api from 'utils/api'

export function* check() {
  try {
    yield call(api.get, endpoints.account())
    yield put(AppActions.checkAuthSuccess())
  } catch (err) {
    yield put(AppActions.checkAuthError())
  }
}

export default function* root() {
  yield all([takeLatest(AppActions.checkAuth.type, check)])
}
