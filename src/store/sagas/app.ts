import { all, call, takeLatest } from 'redux-saga/effects'
import endpoint from 'constants/endpoint'
import api from 'utils/api'
import { AppActions } from 'store/reducers/app'

export function* check() {
  try {
    const whoami = yield call(api.get, endpoint.account())
    console.log(whoami)
  } catch (err) {
    console.log(err)
  }
}

export default function* root() {
  yield all([takeLatest(AppActions.checkAuth.type, check)])
}
