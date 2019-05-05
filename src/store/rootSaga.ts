import { all, fork } from 'redux-saga/effects'
import app from 'store/sagas/app'

export default function* root() {
  yield all([fork(app)])
}
