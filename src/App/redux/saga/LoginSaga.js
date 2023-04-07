import { takeLatest } from 'redux-saga/effects';
import { LoginHandler } from './handlers/LoginHandler';

function* LoginSaga() {
    yield takeLatest('login/loginWithEmailAndPassword', LoginHandler);
}
export default LoginSaga;
