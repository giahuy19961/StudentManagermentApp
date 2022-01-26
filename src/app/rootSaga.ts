import authSaga from '../features/auth/authSaga';
import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([authSaga()]);
}

export default rootSaga;
