import { createSlice } from '@reduxjs/toolkit';
const sliceLogin = createSlice({
    name: 'login',
    initialState: {
        username: null,
        password: null,
    },
    reducers: {
        loginWithEmailAndPassword(state, action) {
            state = action.payload;
        },
        loginFail(state, action) {},
    },
});
export default sliceLogin;
