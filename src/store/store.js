import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas.js';
import execute from './reducers/execute';
import lang from './reducers/languages';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
	reducer: combineReducers({ execute, lang }),
	middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
