import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { authActions, LoginPayLoad } from './authSlice';

function* handleLogin(payload: LoginPayLoad) {
  console.log('loggin', payload);
  try {
    console.log('handle login');
    yield delay(1000);
    localStorage.setItem('access_token', 'adawrfawfawf');
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'Gia Huy',
      })
    );
    yield put(push('/admin'));
  } catch (error: any) {
    console.log('handle login failed');
    yield put(authActions.loginFailed(error.message));
  }
}
function* handleLogout() {
  console.log('handle logout');

  localStorage.removeItem('access_token');
  //redirect to login page
  yield put(push('/login'));
}
function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayLoad> = yield take(authActions.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
