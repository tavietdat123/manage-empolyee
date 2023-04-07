import { call } from 'redux-saga/effects';
import jwtAuthService from '../../../services/jwtAuthService';
import { toast } from 'react-toastify';
export function* LoginHandler(action) {
    try {
        const { username, password } = action.payload;
        const res = yield call(jwtAuthService.loginWithUserNameAndPassword, action.payload);
    } catch (error) {
        alert('Tài khoản mật khẩu không chính xác');
    }
}
