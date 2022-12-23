// import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import reducer from './reducer';
// import { getLoading } from './reducer';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
	reducer, middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
//
// const interceptor = store => {
// 	axios.interceptors.request.use(config => {
// 		store.dispatch(getLoading.success(true));
// 		return config;
// 	}, error => {
// 		store.dispatch(getLoading.success(false));
// 		return Promise.reject(error);
// 	});
// 	axios.interceptors.response.use(config => {
// 		store.dispatch(getLoading.success(false));
// 		return config;
// 	}, error => {
// 		store.dispatch(getLoading.success(false));
// 		return Promise.reject(error);
// 	});
// };
//
// interceptor(store);
