import { all } from 'redux-saga/effects';
import LoginSaga from './LoginSaga';

function* watcherSaga() {
    yield all([LoginSaga()]);
}
export default watcherSaga;
