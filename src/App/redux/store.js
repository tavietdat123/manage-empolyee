import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import watcherSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
});
sagaMiddleware.run(watcherSaga);
export default store;
