import { all, call, put, takeLatest } from 'redux-saga/effects'
import endpoint from 'constants/endpoint'
import { AppActions } from 'store/reducers/app'
import api from 'utils/api'

export function* check() {
  try {
    yield call(api.get, endpoint.account())
    yield put(AppActions.checkAuthSuccess())
  } catch (err) {
    yield put(AppActions.checkAuthError())
  }
}

export default function* root() {
  yield all([takeLatest(AppActions.checkAuth.type, check)])
}
